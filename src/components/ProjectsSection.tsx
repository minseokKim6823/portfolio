import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
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
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
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
