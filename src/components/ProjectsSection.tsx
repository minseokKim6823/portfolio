import { motion } from "framer-motion";
import { Github, ArrowUpRight, Trophy } from "lucide-react";

const projects = [
  {
    title: "WeShareU",
    description: "팀 협업 기반 풀스택 프로젝트. Jira를 활용한 코드 컨벤션·DB 컬럼명 규칙 정립, 코드 리뷰를 통한 팀 전체 기술 역량 향상에 기여했습니다.",
    highlights: ["협업 프로세스 정립 (Jira 기반)", "코드 리뷰 문화 도입"],
    tags: ["Spring Boot", "MariaDB", "팀 프로젝트"],
    github: "https://github.com/minseokKim6823/WeShareU_FE-BE",
  },
  {
    title: "SGMA Backend",
    description: "스터디 그룹 매니지먼트 어플리케이션. 한화시스템 Beyond 9기 2nd Project로, Redis 캐싱 전략과 Spring Batch를 활용한 대량 데이터 처리를 구현했습니다.",
    highlights: ["Redis 캐싱으로 검색 성능 86% 개선", "Spring Batch 기반 채점 서비스 구현"],
    tags: ["Spring Boot", "Redis", "Spring Batch"],
    github: "https://github.com/Spring-Cooler/SGMA_Backend",
  },
  {
    title: "MOTIVE (영업관리 ERP)",
    description: "최적의 영업을 위한 영업관리 ERP 시스템. AWS RDS를 활용한 DB 이중화 구조 설계와 원시/참조 타입 성능 차이를 분석하여 최적화했습니다.",
    highlights: ["AWS RDS DB 이중화 구조 설계", "박싱/언박싱 최적화로 성능 개선", "GitHub Actions 기반 CI/CD 파이프라인"],
    tags: ["Spring Boot", "Vue.js", "AWS RDS", "Docker"],
    github: "https://github.com/STANL-2/MOTIVE",
  },
  {
    title: "멋쟁이사자처럼 통합 홈페이지",
    description: "전국 2000명 회원 대상 실시간 채팅 서비스 개발. WebSocket에서 STOMP + Redis Pub/Sub 구조로 전환하여 다중 서버 환경에서도 동작하는 메시징 시스템을 구축했습니다.",
    highlights: ["Redis Pub/Sub 기반 메시지 브로커 구현", "JMeter 부하테스트 진행"],
    tags: ["Spring Boot", "WebSocket", "STOMP", "Redis"],
    github: "https://github.com/minseokKim6823",
    award: "해커톤 최우수상 수상",
  },
  {
    title: "학교 축제 사이트",
    description: "디자이너·프론트엔드 개발자와 협업하여 학교 축제 사이트를 기획부터 배포까지 제작. 접속자 폭증 대비 캐싱 전략을 도입하여 장애를 사전에 예방했습니다.",
    highlights: ["Spring Boot 캐싱 전략으로 DB 부하 감소", "실사용자 피드백 기반 개선"],
    tags: ["Spring Boot", "협업", "캐싱"],
    github: "https://github.com/minseokKim6823",
  },
];

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <motion.p
            className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4"
            variants={lineReveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} custom={0}
          >
            Projects
          </motion.p>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            variants={lineReveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} custom={1}
          >
            프로젝트
          </motion.h2>
        </div>

        <div className="space-y-4">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <div className="flex items-center gap-2">
                  {project.award && (
                    <span className="flex items-center gap-1 text-xs text-accent font-mono">
                      <Trophy className="w-3 h-3" />
                      {project.award}
                    </span>
                  )}
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
