// 이틀마다 AI 트렌드 글을 수집해 AWS Bedrock(Nova Lite)으로 큐레이션하고
// src/data/trends.json을 갱신하는 파이프라인. GitHub Actions cron과 로컬 실행 겸용.
//
// 안전장치:
// - 모델은 수집된 후보 목록의 "번호"만 고르게 한다 → URL 환각(죽은 링크) 원천 차단
// - 선정된 링크는 게시 전 HTTP 검증, 통과 글이 4개 미만이면 기존 큐레이션 유지
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = path.join(ROOT, "src", "data", "trends.json");

loadDotEnv(path.join(ROOT, ".env.local"));

const REGION = process.env.AWS_REGION || "ap-northeast-2";
const MODEL_ID = process.env.BEDROCK_MODEL || "apac.amazon.nova-lite-v1:0";
const PICK_COUNT = 6;
const WINDOW_HOURS = 72;
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

const FEEDS = [
  { name: "TechCrunch", url: "https://techcrunch.com/category/artificial-intelligence/feed/" },
  { name: "The Verge", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml" },
  { name: "Simon Willison", url: "https://simonwillison.net/atom/everything/" },
];

function loadDotEnv(file) {
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m && process.env[m[1]] === undefined) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html,application/xml,application/json,*/*" },
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return res.text();
}

const asArray = (x) => (Array.isArray(x) ? x : x == null ? [] : [x]);

function textOf(v) {
  if (v == null) return "";
  if (typeof v === "string") return v;
  if (typeof v === "object") return textOf(v["#text"] ?? v.__cdata ?? "");
  return String(v);
}

// CDATA 안의 엔티티는 XML 파서가 풀어주지 않으므로 직접 디코딩
function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

// RSS 2.0(<item>)과 Atom(<entry>) 둘 다 처리
function parseFeed(xml, sourceName) {
  const doc = new XMLParser({ ignoreAttributes: false }).parse(xml);
  const out = [];
  for (const item of asArray(doc?.rss?.channel?.item)) {
    out.push({
      title: textOf(item.title),
      url: textOf(item.link),
      date: new Date(textOf(item.pubDate)),
      source: sourceName,
    });
  }
  for (const entry of asArray(doc?.feed?.entry)) {
    const links = asArray(entry.link);
    const alt = links.find((l) => l?.["@_rel"] === "alternate" || !l?.["@_rel"]) ?? links[0];
    out.push({
      title: textOf(entry.title),
      url: alt?.["@_href"] ?? "",
      date: new Date(textOf(entry.published ?? entry.updated)),
      source: sourceName,
    });
  }
  return out;
}

function hostnameOf(u) {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "web";
  }
}

async function fetchHackerNews() {
  const since = Math.floor(Date.now() / 1000) - WINDOW_HOURS * 3600;
  const filters = encodeURIComponent(`created_at_i>${since},points>80`);
  const url = `https://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=30&numericFilters=${filters}`;
  const json = JSON.parse(await fetchText(url));
  return (json.hits ?? [])
    .filter((h) => h.url && h.title)
    .map((h) => ({ title: h.title, url: h.url, date: new Date(h.created_at), source: hostnameOf(h.url) }));
}

async function collectCandidates(previousUrls) {
  const all = [];
  for (const feed of FEEDS) {
    try {
      all.push(...parseFeed(await fetchText(feed.url), feed.name).slice(0, 12));
    } catch (e) {
      console.warn(`[skip] ${feed.name}: ${e.message}`);
    }
  }
  try {
    all.push(...(await fetchHackerNews()));
  } catch (e) {
    console.warn(`[skip] HackerNews: ${e.message}`);
  }

  const cutoff = Date.now() - WINDOW_HOURS * 3600 * 1000;
  const seen = new Set(previousUrls);
  const out = [];
  for (const c of all) {
    const url = (c.url || "").trim();
    const title = decodeEntities((c.title || "").replace(/\s+/g, " ").trim());
    if (!url.startsWith("http") || !title) continue;
    if (seen.has(url)) continue;
    if (!(c.date instanceof Date) || isNaN(c.date) || c.date.getTime() < cutoff) continue;
    seen.add(url);
    out.push({ title: title.slice(0, 140), url, source: c.source, date: c.date });
  }
  out.sort((a, b) => b.date - a.date);
  return out.slice(0, 36);
}

// JSON 대신 라인 기반 포맷을 쓴다 — 소형 모델이 JSON 따옴표를 빼먹는 문제 회피
async function curate(candidates) {
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return await curateOnce(candidates);
    } catch (e) {
      lastErr = e;
      console.warn(`[curate 재시도 ${attempt}/3] ${e.message}`);
    }
  }
  throw lastErr;
}

async function curateOnce(candidates) {
  const list = candidates
    .map((c, i) => `${i}. [${c.source}] ${c.title} (${fmtDate(c.date)})`)
    .join("\n");
  const system =
    "너는 한국인 백엔드 개발자의 포트폴리오 '트렌드' 섹션을 담당하는 테크 에디터다. " +
    "AI·소프트웨어 업계에서 지금 가장 중요한 글을 고른다. 지시된 출력 형식을 정확히 지킨다.";
  const prompt = `다음은 최근 ${WINDOW_HOURS}시간 안에 수집된 글 후보 목록이다.

${list}

위 목록에서 읽을 가치가 높은 글 8개를 중요도 순으로 골라라.

기준:
- AI 모델 출시, 업계에 영향이 큰 발표, 깊이 있는 기술 분석 우선
- AI·소프트웨어 개발과 무관한 글, 홍보성 글 제외
- 같은 주제가 겹치면 더 신뢰할 만한 소스 하나만 선택
- 코멘트는 띄어쓰기가 정확한 자연스러운 한국어 문장으로 쓴다.
  좋은 예: "프런티어 모델 경쟁 구도를 정리한 기사.", "AI 시대 개발자의 역할 변화를 짚은 글."
  나쁜 예: "동향 파악기사.", "안전성 논란발표."

정확히 아래 형식의 텍스트로만 답하라. JSON, 코드블록, 그 외 설명 금지.

THEME: 이번 글들 중 가장 굵직한 주제 하나만 짧은 키워드로 (예: Claude Fable 5 / AI Regulation — 쉼표 나열 금지, 25자 이내)
PICK: 번호 | 이 글을 읽어야 하는 이유 (한국어 45자 이내, '~기사.', '~글.', '~발표.'처럼 명사형 종결)

PICK 줄은 중요도 순으로 정확히 8개. '번호'에는 후보 목록의 숫자만 쓴다.`;

  const client = new BedrockRuntimeClient({ region: REGION });
  const res = await client.send(
    new ConverseCommand({
      modelId: MODEL_ID,
      system: [{ text: system }],
      messages: [{ role: "user", content: [{ text: prompt }] }],
      inferenceConfig: { maxTokens: 1200, temperature: 0.3 },
    })
  );
  const text = (res.output?.message?.content ?? []).map((c) => c.text ?? "").join("");

  const theme = (text.match(/THEME:\s*(.+)/)?.[1] ?? "").trim().slice(0, 40) || "AI Now";
  const picks = [];
  const used = new Set();
  for (const m of text.matchAll(/PICK:\s*(\d+)\s*\|\s*(.+)/g)) {
    const idx = Number(m[1]);
    const comment = m[2].trim();
    if (idx < 0 || idx >= candidates.length || used.has(idx) || !comment) continue;
    used.add(idx);
    picks.push({ ...candidates[idx], description: comment.slice(0, 90) });
  }
  if (picks.length < 4) {
    throw new Error(`PICK 파싱 결과 부족 (${picks.length}건). 응답 앞부분: ${text.slice(0, 200)}`);
  }
  return { theme, picks };
}

async function linkAlive(url) {
  try {
    const res = await fetch(url, {
      headers: { "user-agent": UA, accept: "text/html,*/*" },
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });
    return res.status < 400;
  } catch {
    return false;
  }
}

function fmtDate(d) {
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

async function main() {
  const previous = existsSync(OUT_FILE)
    ? JSON.parse(readFileSync(OUT_FILE, "utf8"))
    : { articles: [] };
  const previousUrls = asArray(previous.articles).map((a) => a.href);

  const candidates = await collectCandidates(previousUrls);
  console.log(`후보 ${candidates.length}건 수집`);
  if (candidates.length < PICK_COUNT) {
    console.warn("새 후보가 부족해 기존 큐레이션을 유지합니다.");
    return;
  }

  const { theme, picks } = await curate(candidates);
  console.log(`Bedrock 선정 ${picks.length}건 (theme: ${theme})`);

  const alive = [];
  for (const p of picks) {
    if (alive.length >= PICK_COUNT) break;
    if (await linkAlive(p.url)) alive.push(p);
    else console.warn(`[dead link 제외] ${p.url}`);
  }
  if (alive.length < 4) {
    console.warn("링크 검증을 통과한 글이 부족해 기존 큐레이션을 유지합니다.");
    return;
  }

  const data = {
    updatedAt: new Date().toISOString(),
    theme,
    articles: alive.map((a) => ({
      title: a.title,
      source: a.source,
      date: fmtDate(a.date),
      href: a.url,
      description: a.description,
    })),
  };
  writeFileSync(OUT_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`src/data/trends.json 갱신 완료 (${alive.length}건, theme: ${theme})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
