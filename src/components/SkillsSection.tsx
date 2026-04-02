import { motion } from "framer-motion";

const skillCategories = [
  { title: "백엔드", skills: ["Spring Boot", "FastAPI", "MyBatis", "Java", "Python"] },
  { title: "SAP / ERP", skills: ["SAP", "SAP BTP", "ERP 프로세스"] },
  { title: "데이터베이스", skills: ["MariaDB", "Redis", "MongoDB"] },
  { title: "프론트엔드", skills: ["TypeScript", "Vue.js", "React"] },
  { title: "인프라 & DevOps", skills: ["AWS EC2", "AWS RDS", "Elastic Beanstalk", "Nginx", "Docker", "GitHub Actions"] },
  { title: "도구 & 기타", skills: ["Git", "GitHub", "CI/CD", "알고리즘"] },
];

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] },
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
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-sm border border-border bg-card text-foreground cursor-default hover:border-accent/50 hover:bg-accent/5 transition-colors duration-200"
                    variants={tagVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={si}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    {skill}
                  </motion.span>
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
