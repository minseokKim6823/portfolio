import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import SectionHeader from "@/components/SectionHeader";

const careers = [
  {
    company: "더존비즈온",
    team: "AiProductCell · 연구원",
    period: "2026.07 - 현재",
    role: "ONEAI 백엔드 개발 · AI 모델 연동 · API 표준화 및 운영 안정성 개선",
    projects: [
      {
        title: "AI 모델 프록시 개선 및 다국어 지원",
        desc: "기존 고객의 호출 방식을 유지하면서 PTU 계약 고객의 모델을 전환하고, 사용자 언어에 맞는 모델 정보를 제공했습니다.",
        details: [
          "PTU 판별을 기본 모델 설정에서 분리하고 인증 설정 키를 통일해 모델 교체 시 설정 변경 최소화",
          "기존 completion 클라이언트의 호출 경로를 유지하고 DB 패치로 고객 설정 이관",
          "실제 요청으로 호출 주소·인증·스트리밍·사용량 응답 검증",
          "한국어·영어·일본어·중국어 모델 설명 제공 및 번역 누락 시 한국어 대체 처리",
        ],
        tech: ["Spring Boot", "PTU", "SSE", "다국어"],
      },
      {
        title: "음성 스크립트 편집 기능 개발",
        desc: "음성 인식 결과에서 필요한 구간을 편집할 수 있도록 화자별 스크립트 데이터 구조와 API를 개발했습니다.",
        details: [
          "화자 변경·구간 분리·선택 스크립트 삭제 및 원복을 지원하는 데이터 구조 설계",
          "스크립트 생성 로직 수정 및 기존 데이터를 새 구조로 마이그레이션",
          "음성 원본 파일을 저장하지 않고 편집한 스크립트만 저장할 수 있도록 저장 타입과 분기 처리 추가",
        ],
        tech: ["Spring Boot", "REST API", "데이터 마이그레이션"],
      },
      {
        title: "레거시 백엔드 리팩토링 및 API 명세 표준화",
        desc: "Map 기반 요청 본문을 전용 DTO로 전환하고, Swagger 명세와 실제 API 동작을 대조해 문서와 구현의 정합성을 개선했습니다.",
        details: [
          "Swagger UI의 HMAC 인증 헤더 자동 생성, 문서 접근 제어 및 환경별 서버 주소 적용",
          "API 분류 태그·요약·요청 필드·공통 응답 구조 문서화 및 내부 운영용 API 노출 제외",
          "Controller·DTO·Postman·기존 위키를 교차 검증해 누락 API와 명세 불일치 정리",
          "SSE·임베딩·음성 API의 DTO 전환 전후 동작 및 요청 모델과 응답 키 일치 검증",
          "SSE restore와 재연결 시 응답 복구 동작 검증 및 테스트 절차 문서화",
        ],
        tech: ["Spring Boot", "Swagger(OpenAPI)", "HMAC", "Postman", "SSE"],
      },
      {
        title: "ERP 고정 크레딧 차감 API 개발",
        desc: "ERP 사용 이벤트 수신부터 크레딧 차감 기록과 이력 시스템 전달까지 이어지는 연동 흐름을 구현했습니다.",
        details: [
          "Redis·DB 사용량 기록 및 이력 시스템 전송, Kafka 이벤트 발행 경로 추가",
          "요청을 제품·사용자·크레딧·기능 정보로 구조화하고 이력 데이터와 필드명 통일",
          "BigDecimal로 금액 연산의 부동소수점 오차 방지",
          "Redis 조회를 HGETALL에서 HMGET으로 변경해 필요한 필드만 조회",
          "ERP 연동 부서를 위한 API 명세 작성 및 공유",
        ],
        tech: ["Spring Boot", "Redis", "Kafka", "BigDecimal", "ERP"],
      },
      {
        title: "폐쇄망 sLLM 인증 오류 분석 및 조회 로직 개선",
        desc: "고객 서버 로그와 코드를 대조해 폐쇄망 GLM 모델 호출 시 발생한 401 오류의 원인을 확인하고 개선을 진행하고 있습니다.",
        details: [
          "Redis 인증 키 정상 조회 여부 및 IP 기반 요청 주소의 GLM 배포 경로 판별 조건 분석",
          "Authorization 대신 api-key 헤더가 선택되는 원인 확인 및 enum·전역 캐시를 활용한 개선 진행",
          "별도 음성 조회 서비스를 통해 밀접하게 연결된 호출 흐름을 줄이는 구조 검토",
        ],
        tech: ["Spring Boot", "Redis", "sLLM", "인증"],
      },
    ],
  },
  {
    company: "태화이노베이션",
    team: "기술연구소",
    period: "2025.03 - 2026.07",
    role: "AI-OCR 솔루션 및 금융권 프로젝트 백엔드 개발",
    projects: [
      {
        title: "금융결제원 어음교환 솔루션",
        desc: "OCR을 이용한 어음 진위 판별 시스템. 역프록시 패턴 API Gateway 구축 및 헥사고날 아키텍처 도입으로 확장성을 확보했습니다.",
        details: [
          "Spring Boot Gateway에서 FastAPI 역프록시 구조 설계 및 Swagger 문서 일원화",
          "gRPC 도입으로 REST API 대비 응답 시간 10초→2초 (80% 개선)",
          "헥사고날 아키텍처 도입으로 MSA 전환 용이한 구조 설계",
          "YOLO v7 기반 민감정보 마스킹 기능 추가 개발",
          "SonarQube 도입하여 코드 품질 개선 (Code Smell, 중복 코드 제거)",
        ],
        tech: ["Spring Boot", "FastAPI", "gRPC", "Webflux", "FeignClient", "YOLO v7", "OracleDB", "SonarQube"],
      },
      {
        title: "기업은행 수표 AI-OCR 솔루션",
        desc: "수표 일련번호, 금액, MICR 코드를 자동 인식하는 AI-OCR 시스템",
        details: [
          "C#(.Net Framework) 기반 DLL 라이브러리화 개발",
          "병렬 처리 도입으로 OCR 처리 시간 2~3초→0.7초 (70% 단축)",
          "NLP 기반 후처리 로직 개발로 오인식률 개선",
          "CRNN 기반 인지·탐색 모델 학습",
        ],
        tech: ["C#(.Net)", "Python", "FastAPI", "Flask", "CRNN", "NLP", "OpenCV"],
      },
      {
        title: "우리은행 이미지 허브 솔루션 (풀스택)",
        desc: "이미지·오피스 문서·HTML을 다양한 포맷(PDF, TIFF)으로 변환하고 통합 관리하는 시스템",
        details: [
          "Spring Boot 기반 백엔드 및 Spring Batch를 이용한 이미지 변환 엔진 연동",
          "Next.js 기반 프론트엔드 UI 구현",
        ],
        tech: ["Spring Boot", "MyBatis", "Spring Batch", "Webflux", "Next.js", "Tibero"],
      },
      {
        title: "국민은행 이미지 허브 솔루션 (개발 지원)",
        desc: "프로젝트 반입을 위한 기본 틀 개발 지원",
        details: [
          "Spring Boot 백엔드 및 Next.js 프론트엔드 기본 구조 구현",
        ],
        tech: ["Spring Boot", "MyBatis", "Next.js", "OracleDB"],
      },
    ],
  },
  {
    company: "멋쟁이사자처럼",
    team: "교내 대표 · 운영진",
    period: "2023.01 - 2024.12",
    role: "전국 코딩 연합 동아리 교내 설립 및 대표 활동",
    projects: [
      {
        title: "통합 홈페이지 채팅 서비스",
        desc: "전체 회원(2000명) 대상 실시간 채팅 서비스 개발. 타 학교 운영진과 협업하여 likelion.university 제작.",
        details: [
          "WebSocket→STOMP+SockJS+Redis Pub/Sub 구조로 전환하여 다중 서버 대응",
          "JMeter 부하테스트 진행 및 안정적인 메시징 시스템 구축",
        ],
        tech: ["Spring Boot", "WebSocket", "STOMP", "Redis Pub/Sub"],
      },
      {
        title: "학교 축제 사이트 제작",
        desc: "디자이너·프론트엔드 개발자와 협업하여 기획부터 배포까지 진행",
        details: [
          "Spring Boot 캐싱 전략 도입으로 축제 기간 접속자 폭증 대비",
          "실사용자 피드백 기반 서비스 개선",
        ],
        tech: ["Spring Boot", "캐싱"],
      },
    ],
  },
];

const education = [
  {
    period: "2021.03 - 2025.08",
    title: "상명대학교 (천안) 스마트정보통신공학과",
    org: "학사 졸업 · 학점 3.81 / 4.5",
    details: [
      "졸업논문: 기업 추천 및 면접 예상 질문을 제공하는 취업 지원 서비스",
      "Spring Boot와 ChatGPT API를 활용해 구현하고 Docker·AWS EC2로 배포",
    ],
  },
  {
    period: "2025.11 - 2026.02",
    title: "SAP ABAP(S4/HANA) Developer 과정",
    org: "soldesk",
    details: ["ABAP 문법 및 데이터베이스 프로그래밍", "ERP 비즈니스 로직 및 시스템 구조 학습"],
  },
  {
    period: "2024.06 - 2024.12",
    title: "한화시스템 BEYOND SW 캠프 9기",
    org: "playdata",
    details: ["Agile 기반 프로젝트 기획, ERD 설계 및 Spring Boot REST API 개발", "AWS RDS MariaDB 이중화 구조 설계 및 Redis 캐싱으로 검색 성능 86% 개선", "Docker 컨테이너화 및 GitHub Actions 기반 CI/CD 구축"],
  },
];

const certifications = [
  { year: "2026.06", name: "SAP Certified - Back-End Developer - ABAP Cloud", org: "SAP" },
  { year: "2026.03", name: "SQL 개발자 (SQLD)", org: "한국데이터산업진흥원" },
  { year: "2025.12", name: "정보처리기사", org: "한국산업인력공단" },
  { year: "2023.10", name: "네트워크관리사 2급", org: "한국정보통신자격협회" },
];

const awards = [
  { year: "2024", name: "최우수상", org: "한성대학교 멋쟁이사자처럼 해커톤", desc: "포트폴리오 홍보 및 기업 정보 제공 서비스 (Spring Boot + React)" },
  { year: "2022", name: "우수상", org: "상명대학교 SM Learning Fair", desc: "Python 기반 미로 게임 제작" },
];

const experiences = [
  { category: "동아리", items: ["SUSC : 대학생 방학교류 동아리 2024.12 - 2025.02", "멋쟁이사자처럼 : 교내 대표·운영진 2023.01 - 2024.12"] },
  { category: "커뮤니티", items: ["SSAFY Ambassador 2023.09 - 2024.02", "항해99 10일 아티클 챌린지", "면접 스터디"] },
  { category: "교육 봉사", items: ["카르페디엠작은도서관 2021.03 - 2021.07", "스마트팜·3D 프린팅 학습 및 교육 보조 (40시간)"] },
];

const CareerSection = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const { ref, opacity, y } = useSectionReveal(containerRef);
  return (
    <section ref={ref} id="career" className="min-h-screen flex items-center py-14 sm:py-20 px-6">
      <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto">
        <SectionHeader
          index="02"
          label="Career"
          title="경력"
          action={
            <Button variant="outline" size="sm" className="rounded-full font-mono text-xs gap-2 group" asChild>
              <a
                href="https://www.figma.com/design/OM95uaJ1g30vNOAEAfHFb6/%EA%B9%80%EB%AF%BC%EC%84%9D-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0-1&t=ODEdsZqGGnUVsbRU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                이력서 전체보기
              </a>
            </Button>
          }
        />

        {/* Career */}
        <div className="space-y-16">
          {careers.map((career, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-6">
                <h3 className="text-lg font-bold">{career.company}</h3>
                {career.team && <span className="text-sm text-muted-foreground">· {career.team}</span>}
                {career.period && <span className="text-xs text-muted-foreground font-mono ml-auto">{career.period}</span>}
              </div>
              {career.role && <p className="text-muted-foreground text-sm mb-6">{career.role}</p>}

              <div className="space-y-8 border-l border-border pl-6">
                {career.projects.map((project, pi) => (
                  <motion.div
                    key={pi}
                    className="relative"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: pi * 0.08 }}
                  >
                    <span
                      aria-hidden
                      className="absolute -left-[28.5px] top-[7px] w-2 h-2 rounded-full border border-accent/70 bg-background"
                    />
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{project.desc}</p>
                    <ul className="space-y-1 mb-3">
                      {project.details.map((detail, di) => (
                        <li key={di} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent mt-1 shrink-0">·</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2 py-0.5 rounded border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-bold mb-8">학력 및 교육</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="relative border-l border-border pl-6"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  aria-hidden
                  className="absolute -left-[4.5px] top-[5px] w-2 h-2 rounded-full border border-accent/70 bg-background"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-2">
                  <h4 className="font-semibold text-sm">{edu.title}</h4>
                  <span className="text-xs text-muted-foreground font-mono ml-auto">{edu.period}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{edu.org}</p>
                <ul className="space-y-1">
                  {edu.details.map((d, di) => (
                    <li key={di} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent shrink-0">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Awards */}
        <div className="grid sm:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-xs text-accent tracking-wider uppercase mb-4">자격증</h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-muted-foreground shrink-0">{cert.year}</span>
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-mono text-xs text-accent tracking-wider uppercase mb-4">수상</h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-muted-foreground shrink-0">{award.year}</span>
                    <p className="text-sm font-medium">{award.name} <span className="text-muted-foreground font-normal">· {award.org}</span></p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 ml-14">{award.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-bold mb-8">Experience</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {experiences.map((exp, ei) => (
              <motion.div
                key={exp.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ei * 0.1 }}
              >
                <h4 className="font-mono text-xs text-accent tracking-wider uppercase mb-3">{exp.category}</h4>
                <ul className="space-y-1.5">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CareerSection;
