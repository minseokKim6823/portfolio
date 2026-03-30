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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Skills</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-16">기술 스택</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm hover:border-primary/30 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground font-medium"
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
