import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { type RefObject } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { SpotlightOverlay } from "@/components/SpotlightCard";
import { spotlightMove } from "@/lib/spotlight";
import trends from "@/data/trends.json";

const featured = {
  title: "Policy on the AI Exponential",
  source: "Dario Amodei (Anthropic CEO)",
  date: "2026.06",
  href: "https://darioamodei.com/post/policy-on-the-ai-exponential",
  description:
    "기하급수적으로 발전하는 AI와 그 속도를 따라가지 못하는 제도 사이의 간극을 짚은 에세이. AI 시대의 개발자에게는 기술만큼 방향성에 대한 감각도 필요하다고 생각해 가장 먼저 소개합니다.",
  tags: ["AI Policy", "Essay", "Anthropic"],
};

const formatUpdated = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

const TrendsSection = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const { ref, opacity, y } = useSectionReveal(containerRef);
  return (
    <section ref={ref} id="trends" className="min-h-screen flex items-center py-14 sm:py-20 px-6">
      <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto">
        <SectionHeader
          index="04"
          label="Trends"
          title="트렌드"
          description="AI 산업의 변화를 실시간으로 따라가며 읽고, 새로운 도구는 출시 즉시 직접 써봅니다. 아래 글들은 직접 만든 파이프라인이 이틀마다 아침에 새로 골라옵니다."
        />

        <motion.a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden block border border-accent/40 bg-accent/5 rounded-xl p-6 hover:border-accent transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.99 }}
          onMouseMove={spotlightMove}
        >
          <SpotlightOverlay />
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono text-accent border border-accent/30">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
            <span className="text-xs font-mono text-muted-foreground">{featured.date}</span>
          </div>
          <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
            {featured.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
          </h3>
          <p className="text-xs font-mono text-muted-foreground mt-1 mb-3">{featured.source}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{featured.description}</p>
          <div className="flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs font-mono border border-accent/20 text-muted-foreground group-hover:border-accent/40 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-6"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-2">
            Now — {trends.theme}
          </p>
          <p className="text-sm text-muted-foreground">
            GitHub Actions cron이 글을 수집하고 AWS Bedrock이 큐레이션해 이틀마다 갱신되는 리스트입니다.
          </p>
        </motion.div>

        <div className="space-y-3">
          {trends.articles.map((article, idx) => (
            <motion.a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-start justify-between gap-4 border border-border rounded-xl p-5 hover:border-accent/40 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
              onMouseMove={spotlightMove}
            >
              <SpotlightOverlay size={200} />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                  <span className="text-xs font-mono text-accent">{article.source}</span>
                  <span className="text-xs font-mono text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors duration-200 mb-1.5">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-xs font-mono text-muted-foreground/70 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          * 마지막 업데이트 {formatUpdated(trends.updatedAt)} — AWS Bedrock(Nova Lite) 기반 자동 큐레이션
        </motion.p>
      </motion.div>
    </section>
  );
};

export default TrendsSection;
