import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "이커머스 플랫폼",
    description: "React, Node.js, PostgreSQL 기반의 풀스택 이커머스 솔루션. 실시간 재고 관리와 결제 시스템을 구현했습니다.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "실시간 채팅 앱",
    description: "WebSocket을 활용한 실시간 메시징 플랫폼. 그룹 채팅, 파일 공유, 읽음 확인 기능을 지원합니다.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "대시보드 & 분석 도구",
    description: "데이터 시각화와 실시간 모니터링이 가능한 관리자 대시보드. 커스텀 차트와 리포트 생성 기능을 포함합니다.",
    tags: ["TypeScript", "D3.js", "Express", "AWS"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "AI 콘텐츠 생성기",
    description: "GPT API를 활용한 AI 기반 콘텐츠 자동 생성 도구. SEO 최적화와 다국어 지원 기능을 제공합니다.",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    color: "from-accent/20 to-primary/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Projects</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-16">프로젝트</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group relative rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary font-mono text-xs">
                    <Github className="w-4 h-4" /> Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary font-mono text-xs">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
