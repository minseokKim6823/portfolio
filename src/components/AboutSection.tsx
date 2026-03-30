import { motion } from "framer-motion";

const stats = [
  { label: "기여(연간)", value: "335+" },
  { label: "팔로워", value: "31" },
  { label: "핀 프로젝트", value: "3+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 snap-start">
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
              안녕하세요, 백엔드 개발자 김민석입니다.
              유저에게 이로운 가치를 제공함으로써 오늘보다 나은 내일을 선물하자라는 생각으로
              UX와 DX를 모두 고려하는 설계를 하려 노력하고 있습니다.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              백엔드 개발을 기반으로 ERP 환경과 SAP 영역까지 역량을 확장하고 있습니다.
              SAP 구조와 ERP 프로세스를 이해하는 데 집중하며, 이를 백엔드 개발 경험과 연결하여
              적용 범위를 넓혀 나가고 있습니다.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              업무 프로세스에 대한 깊은 이해와 시스템 구조 기반의 개발을 목표로
              지속적으로 학습하고 있습니다.
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
