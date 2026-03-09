import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "WeShareU",
    description: "팀 협업 기반 풀스택 프로젝트. Java/Spring Boot 백엔드와 프론트엔드를 모두 포함하는 웹 애플리케이션입니다.",
    tags: ["Java", "Spring Boot", "풀스택"],
    color: "from-primary/20 to-primary/5",
    github: "https://github.com/minseokKim6823/WeShareU_FE-BE",
  },
  {
    title: "SGMA Backend",
    description: "한화시스템 Beyond 9기 2nd Project 백엔드. Spring Cooler 팀으로 참여한 백엔드 시스템입니다.",
    tags: ["Java", "Spring Boot", "팀 프로젝트"],
    color: "from-accent/20 to-accent/5",
    github: "https://github.com/Spring-Cooler/SGMA_Backend",
  },
  {
    title: "MOTIVE",
    description: "최적의 영업을 위한 영업관리 시스템. Final Project로 Vue.js 프론트엔드와 백엔드를 결합한 ERP 솔루션입니다.",
    tags: ["Vue.js", "Java", "ERP", "영업관리"],
    color: "from-primary/20 to-accent/10",
    github: "https://github.com/STANL-2/MOTIVE",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group relative rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
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
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary font-mono text-xs" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
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
