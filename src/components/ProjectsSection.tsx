import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { type RefObject } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import SectionHeader from "@/components/SectionHeader";
import { SpotlightOverlay } from "@/components/SpotlightCard";
import { spotlightMove } from "@/lib/spotlight";

const projects = [
  {
    title: "학교 축제 사이트",
    description: "디자이너·프론트엔드 개발자와 협업하여 학교 축제 사이트를 기획부터 배포까지 제작. 접속자 폭증 대비 캐싱 전략을 도입하여 장애를 사전에 예방했습니다.",
    highlights: ["Spring Boot 캐싱 전략으로 DB 부하 감소", "실사용자 피드백 기반 개선"],
    tags: ["Spring Boot", "협업", "캐싱"],
  },
  {
    title: "멋쟁이사자처럼 통합 홈페이지",
    description: "전국 2000명 회원 대상 실시간 채팅 서비스 개발. WebSocket에서 STOMP + Redis Pub/Sub 구조로 전환하여 다중 서버 환경에서도 동작하는 메시징 시스템을 구축했습니다.",
    highlights: ["Redis Pub/Sub 기반 메시지 브로커 구현", "JMeter 부하테스트 진행"],
    tags: ["Spring Boot", "WebSocket", "STOMP", "Redis"],
    github: "https://github.com/LikelionUniv",
  },
  {
    title: "Coy",
    description: "2024 멋쟁이사자처럼 운영진 해커톤에서 포트폴리오 홍보 및 기업 정보 제공 서비스를 개발했습니다. 백엔드를 담당해 이미지 업로드와 실시간 알림 기능을 구현했습니다.",
    highlights: ["SSE를 이용한 알림 서비스", "AWS S3를 이용한 데이터 저장"],
    tags: ["Spring Boot", "SSE", "AWS"],
    github: "https://github.com/Trendithon-Spin-Off",
    award: "해커톤 최우수상",
  },
  {
    title: "SGMA",
    description: "스터디 그룹 매니지먼트 어플리케이션. 한화시스템 Beyond 9기 2nd Project로, Redis 캐싱 전략과 Spring Batch를 활용한 대량 데이터 처리를 구현했습니다.",
    highlights: ["Redis 캐싱으로 검색 성능 86% 개선", "Spring Batch 기반 채점 서비스 구현"],
    tags: ["Spring Boot", "Redis", "Spring Batch"],
    github: "https://github.com/Spring-Cooler",
  },
  {
    title: "WeShareU",
    description: "내·외국인 여행자의 여행 중 물품 구매 부담을 줄이기 위한 공유 서비스. Jira로 업무를 관리하고 코드 컨벤션·DB 컬럼명 규칙을 정립했으며, 코드 리뷰로 구현 방식과 지식을 공유했습니다.",
    highlights: ["협업 프로세스 정립 (Jira 기반)", "코드 리뷰 문화 도입"],
    tags: ["Spring Boot", "MariaDB", "팀 프로젝트"],
    github: "https://github.com/STANL-2/WeShareU",
  },
  {
    title: "MOTIVE (영업관리 ERP)",
    description: "자동차 판매 영업사원의 업무 효율을 높이기 위한 영업관리 ERP 시스템. 읽기·쓰기 작업을 분리하는 AWS RDS DB 이중화 구조로 데이터 접근 병목을 줄이고 안정성을 높였습니다.",
    highlights: ["Primary DB 쓰기 / Read Replica 읽기 분리 및 트랜잭션별 DB 라우팅", "불필요한 박싱/언박싱을 줄여 코드 수준의 성능 개선", "GitHub Actions 기반 CI/CD 파이프라인"],
    tags: ["Spring Boot", "Vue.js", "AWS RDS", "Docker"],
    github: "https://github.com/STANL-2/MOTIVE",
  },
  {
    title: "tripcut 모니터링 환경 구축",
    description: "개인 프로젝트에 Docker Compose 기반 모니터링 환경을 구성했습니다. 애플리케이션 지표와 로그를 함께 확인하며 운영 중 문제의 원인을 파악할 수 있는 구조를 경험했습니다.",
    highlights: ["Prometheus·Grafana·Loki 직접 구성", "애플리케이션 지표 수집 및 로그 확인 환경 구축"],
    tags: ["Docker Compose", "Prometheus", "Grafana", "Loki"],
  },
];

const ProjectsSection = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const { ref, opacity, y } = useSectionReveal(containerRef);
  return (
    <section ref={ref} id="projects" className="min-h-screen flex items-center py-14 sm:py-20 px-6">
      <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto">
        <SectionHeader
          index="03"
          label="Projects"
          title="프로젝트"
          description="기획부터 개발·배포까지 직접 참여한 프로젝트들입니다."
        />

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden block border border-border bg-card/40 rounded-xl p-6 hover:border-accent/40 hover:bg-card/80 hover:shadow-xl hover:shadow-accent/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              onMouseMove={spotlightMove}
            >
              <SpotlightOverlay />
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="min-w-0 text-lg font-bold group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <span className="font-mono text-xs font-normal text-muted-foreground/50 tracking-wider">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                      aria-label={`${project.title} GitHub 열기`}
                    >
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
                    </a>
                  ) : project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.award && (
                    <span className="flex items-center gap-1 text-xs text-accent font-mono">
                      <Trophy className="w-3 h-3" />
                      {project.award}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              {project.highlights && (
                <ul className="mb-4 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent shrink-0">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground group-hover:border-accent/30 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
