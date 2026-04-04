import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const careers = [
  {
    company: "태화이노베이션",
    team: "기술연구소",
    period: "2025.03 - 현재",
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
    period: "2025.11 - 2026.02",
    title: "SAP ABAP(S4/HANA) Developer 과정",
    org: "soldesk",
    details: ["ABAP 문법 및 데이터베이스 프로그래밍", "ERP 비즈니스 로직 및 시스템 구조 학습"],
  },
  {
    period: "2024.06 - 2024.12",
    title: "한화시스템 BEYOND SW 캠프 9기",
    org: "playdata",
    details: ["Spring Boot 기반 REST API 개발", "AWS 클라우드 인프라 (RDS, S3, ElasticBeanstalk)", "Docker 컨테이너화 및 CI/CD 구축"],
  },
];

const certifications = [
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
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const CareerSection = () => {
  return (
    <section id="career" className="py-32 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex items-end justify-between mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="overflow-hidden">
              <motion.p
                className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4"
                variants={lineReveal} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={0}
              >
                Career
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold"
                variants={lineReveal} initial="hidden" whileInView="visible"
                viewport={{ once: true }} custom={1}
              >
                경력
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
          </motion.div>
        </motion.div>

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
              <div className="flex items-baseline gap-3 mb-6">
                <h3 className="text-lg font-bold">{career.company}</h3>
                {career.team && <span className="text-sm text-muted-foreground">· {career.team}</span>}
                {career.period && <span className="text-xs text-muted-foreground font-mono ml-auto">{career.period}</span>}
              </div>
              {career.role && <p className="text-muted-foreground text-sm mb-6">{career.role}</p>}

              <div className="space-y-8 border-l border-border pl-6">
                {career.projects.map((project, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: pi * 0.08 }}
                  >
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
          <h3 className="text-lg font-bold mb-8">교육</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="border-l border-border pl-6"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-baseline gap-3 mb-2">
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
      </div>
    </section>
  );
};

export default CareerSection;
