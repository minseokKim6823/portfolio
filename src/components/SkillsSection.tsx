import { motion } from "framer-motion";
import { Cloud, GitBranch, Workflow, Server } from "lucide-react";
import {
  SiSpringboot, SiFastapi, SiTypescript, SiVuedotjs, SiReact,
  SiMariadb, SiRedis, SiMongodb, SiNginx, SiDocker, SiGithubactions,
  SiGit, SiGithub, SiSap, SiAmazonaws,
} from "react-icons/si";
import { type IconType } from "react-icons";
import { type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

type SkillItem = { name: string; icon: IconType | LucideIcon; color: string; isLucide?: boolean };

const skillCategories: { title: string; skills: SkillItem[] }[] = [
  {
    title: "백엔드",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
      { name: "MyBatis", icon: SiSpringboot, color: "text-orange-500" },
    ],
  },
  {
    title: "SAP / ERP",
    skills: [
      { name: "SAP", icon: SiSap, color: "text-blue-500" },
      { name: "SAP BTP", icon: Cloud, color: "text-sky-500", isLucide: true },
      { name: "ERP 프로세스", icon: Workflow, color: "text-purple-500", isLucide: true },
    ],
  },
  {
    title: "데이터베이스",
    skills: [
      { name: "MariaDB", icon: SiMariadb, color: "text-amber-600" },
      { name: "Redis", icon: SiRedis, color: "text-red-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    title: "프론트엔드",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-500" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
    ],
  },
  {
    title: "인프라 & DevOps",
    skills: [
      { name: "AWS EC2", icon: SiAmazonec2, color: "text-orange-400" },
      { name: "AWS RDS", icon: SiAmazonrds, color: "text-orange-500" },
      { name: "Elastic Beanstalk", icon: Cloud, color: "text-orange-300", isLucide: true },
      { name: "Nginx", icon: SiNginx, color: "text-green-500" },
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-violet-500" },
    ],
  },
  {
    title: "도구 & 기타",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-foreground" },
      { name: "CI/CD", icon: Workflow, color: "text-indigo-500", isLucide: true },
    ],
  },
];

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: EASE },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <motion.p
            className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4"
            variants={lineReveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} custom={0}
          >
            Skills
          </motion.p>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            variants={lineReveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} custom={1}
          >
            기술 스택
          </motion.h2>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
            >
              <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => {
                  const Icon = skill.icon as any;
                  return (
                    <motion.span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-md text-sm border border-border bg-card text-foreground cursor-default hover:border-accent/50 hover:bg-accent/5 transition-colors duration-200 inline-flex items-center gap-1.5"
                      variants={tagVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={si}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    >
                      <Icon className={`w-3.5 h-3.5 ${skill.color}`} />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
