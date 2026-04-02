import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "WeShareU",
    description: "팀 협업 기반 풀스택 프로젝트. Java/Spring Boot 백엔드와 프론트엔드를 모두 포함하는 웹 애플리케이션입니다.",
    tags: ["Java", "Spring Boot", "풀스택"],
    github: "https://github.com/minseokKim6823/WeShareU_FE-BE",
  },
  {
    title: "SGMA Backend",
    description: "한화시스템 Beyond 9기 2nd Project 백엔드. Spring Cooler 팀으로 참여한 백엔드 시스템입니다.",
    tags: ["Java", "Spring Boot", "팀 프로젝트"],
    github: "https://github.com/Spring-Cooler/SGMA_Backend",
  },
  {
    title: "MOTIVE",
    description: "최적의 영업을 위한 영업관리 시스템. Final Project로 Vue.js 프론트엔드와 백엔드를 결합한 ERP 솔루션입니다.",
    tags: ["Vue.js", "Java", "ERP", "영업관리"],
    github: "https://github.com/STANL-2/MOTIVE",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">프로젝트</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group border border-border rounded-lg p-6 hover:border-accent/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground -mt-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
