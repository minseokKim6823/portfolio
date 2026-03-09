import { motion } from "framer-motion";

const stats = [
  { label: "경력", value: "5+" },
  { label: "프로젝트", value: "30+" },
  { label: "기술 스택", value: "15+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">About</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-12">소개</h2>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              사용자 중심의 웹 애플리케이션을 만드는 풀스택 개발자입니다. 
              복잡한 문제를 단순하고 아름다운 솔루션으로 풀어내는 것을 즐깁니다.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              프론트엔드에서는 React와 TypeScript를 사용하여 견고한 UI를 구축하고, 
              백엔드에서는 Node.js와 다양한 데이터베이스를 활용합니다. 
              끊임없이 새로운 기술을 배우고 적용하며 성장하고 있습니다.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              팀과의 협업을 중요시하며, 코드 리뷰와 문서화를 통해 
              함께 성장하는 개발 문화를 만들어 나가고 있습니다.
            </p>
          </motion.div>

          <motion.div
            className="flex md:flex-col gap-8 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-4xl sm:text-5xl font-bold text-gradient">{stat.value}</p>
                <p className="text-muted-foreground font-mono text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
