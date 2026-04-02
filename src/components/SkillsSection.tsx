import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "백엔드",
    skills: ["Spring Boot", "FastAPI", "MyBatis", "Java", "Python"],
  },
  {
    title: "SAP / ERP",
    skills: ["SAP", "SAP BTP", "ERP 프로세스"],
  },
  {
    title: "데이터베이스",
    skills: ["MariaDB", "Redis", "MongoDB"],
  },
  {
    title: "프론트엔드",
    skills: ["TypeScript", "Vue.js", "React"],
  },
  {
    title: "인프라 & DevOps",
    skills: ["AWS EC2", "AWS RDS", "Elastic Beanstalk", "Nginx", "Docker", "GitHub Actions"],
  },
  {
    title: "도구 & 기타",
    skills: ["Git", "GitHub", "CI/CD", "알고리즘"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">기술 스택</h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <h3 className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm border border-border bg-card text-foreground"
                  >
                    {skill}
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

export default SkillsSection;
