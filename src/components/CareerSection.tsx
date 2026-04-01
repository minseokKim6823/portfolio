import { motion } from "framer-motion";
import { ExternalLink, Building2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const careers = [
  {
    company: "태화이노베이션",
    team: "기술연구소",
    period: "2025.03 - 현재",
    role: "AI 및 백엔드 개발",
    projects: [
      {
        title: "수표인식 솔루션",
        desc: "RapidOCR을 커스터마이징하여 수표 일련번호, 금액, MICR 코드를 인식합니다.",
        details: [
          "RapidOCR을 .Net Framework에서 커스터 마이징하여 스캐너에서 수표인식 가능한 시스템개발(DLL)",
          "RapidOCR 시연을 위한 FastAPI를 결목시킨 Web버전 개발",
          "성능향상을 위한 코드 개선 및 방법론 개선",
        ],
        tech: ["C#(.Net Framework)", "Python", "openCV", "FastAPI"],
      },
      {
        title: "농협정보시스템 AI-OCR 솔루션 POC, 개발",
        desc: "OCR을 이용해 주민등록증, 인감증명서 등의 행정 문서를 인식합니다.",
        details: [
          "기존 Flask 기반 백엔드 레거시 코드를 FastAPI로 마이그레이션하여 향후 OCR 프로젝트의 기본틀을 개발",
        ],
        tech: ["Flask", "FastAPI", "JavaScript", "ajax"],
      },
      {
        title: "금융결제원 어음교환 솔루션 백엔드 개발",
        desc: "OCR을 이용해 어음의 진위 여부를 판별합니다.",
        details: [
          "FastAPI+OCR을 이용한 어음 형태 분류기능",
          "Spring Boot 기반 Gateway에서 역프록시 구조를 설계 및 개발",
          "YOLO v7을 이용한 OCR 모델을 모델링하여 민감정보 마스킹 기능 추가 개발",
          "OCR 기능 추가에 따른 멀티모듈 구조로 마이그레이션",
        ],
        tech: ["FastAPI", "Spring Boot", "Webflux", "FeignClient", "Spring Cloud", "gRPC", "YOLO v7", "OracleDB", "H2"],
      },
      {
        title: "국민은행 이미지 허브 솔루션 풀스택 개발 지원",
        desc: "이미지 허브 솔루션 프로젝트 반입을 위해 프로젝트 기본 틀 개발 지원",
        details: [
          "Spring Boot 기반 백엔드 서버 구현",
          "Next.js 기반 프론트엔드 UI 구현",
        ],
        tech: ["Spring Boot", "myBatis", "Next.js", "OracleDB"],
      },
    ],
  },
  {
    company: "태화이노베이션",
    team: "SI 경험",
    period: "",
    role: "",
    projects: [
      {
        title: "우리은행 이미지 허브 솔루션 풀스택 개발",
        desc: "이미지, 오피스 문서, HTML 문서 등을 다양한 포맷(PDF, TIFF 등)으로 변환하고 통합 관리할 수 있도록 지원합니다.",
        details: [
          "Spring Boot 기반 백엔드 서버 구현",
          "Spring Batch를 이용하여 Linux 서버의 이미지 변환 엔진과 통신하여 이미지 변환 기능 구현",
          "Next.js 기반 프론트엔드 UI 구현",
        ],
        tech: ["Spring Boot", "myBatis", "Spring Batch", "Webflux", "Next.js", "Linux", "Tibero"],
      },
    ],
  },
  {
    company: "멋쟁이사자처럼",
    team: "통합홈페이지 TF팀",
    period: "2023.05 - 2023.12",
    role: "멋쟁이사자처럼 통합홈페이지 백엔드 개발 담당",
    projects: [
      {
        title: "채팅 서비스 개발",
        desc: "전체 회원(2000명)에게 원활한 채팅서비스를 구현했습니다.",
        details: [
          "Jmeter기반 부하 테스트 및 원활한 서비스를 위한 방법 고안",
          "채팅 서비스 개발",
        ],
        tech: ["Spring Boot", "WebSocket", "STOMP", "REDIS"],
      },
    ],
  },
];

const experiences = [
  {
    category: "동아리",
    items: [
      "SUSC : 대학생 방학교류 동아리 2024.12 - 2025.02",
      "멋쟁이사자처럼 : 대학생 창업 IT 동아리 (교내 대표, 운영진) 2023.01 - 2024.12",
    ],
  },
  {
    category: "커뮤니티",
    items: ["항해99 10일 아티클 챌린지", "면접 스터디"],
  },
  {
    category: "교육",
    items: ["한화 시스템 부트캠프 9기", "SAP ABAP(S4/HANA) Developer 과정"],
  },
  {
    category: "자격증",
    items: ["네트워크 관리사 2급", "정보처리기사", "SQLD"],
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="py-32 px-6 snap-start">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Career</p>
            <h2 className="text-3xl sm:text-5xl font-bold">경력</h2>
          </div>
          <Button variant="outline" size="sm" className="rounded-full font-mono text-xs gap-2" asChild>
            <a
              href="https://www.figma.com/design/OM95uaJ1g30vNOAEAfHFb6/%EA%B9%80%EB%AF%BC%EC%84%9D-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0-1&t=ODEdsZqGGnUVsbRU-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-3 h-3" />
              이력서 전체보기
            </a>
          </Button>
        </motion.div>

        {/* Career Projects */}
        <div className="space-y-16">
          {careers.map((career, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 50, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: ci * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold">{career.company}</h3>
                {career.team && (
                  <span className="text-sm text-muted-foreground font-mono">| {career.team}</span>
                )}
                {career.period && (
                  <span className="text-sm text-muted-foreground font-mono ml-auto">{career.period}</span>
                )}
              </div>
              {career.role && (
                <p className="text-muted-foreground text-sm mb-6 ml-8">{career.role}</p>
              )}

              <div className="space-y-8 ml-8 border-l-2 border-border/50 pl-6">
                {career.projects.map((project, pi) => (
                  <div key={pi}>
                    <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">{project.desc}</p>
                    <ul className="space-y-1.5 mb-3">
                      {project.details.map((detail, di) => (
                        <li key={di} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience & Activities */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">Experience</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 ml-8">
            {experiences.map((exp) => (
              <div key={exp.category}>
                <h4 className="font-semibold text-sm font-mono text-primary mb-3">{exp.category}</h4>
                <ul className="space-y-1.5">
                  {exp.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
