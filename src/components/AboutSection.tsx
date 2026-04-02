import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">소개</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            안녕하세요, 백엔드 개발자 김민석입니다.
            유저에게 이로운 가치를 제공함으로써 오늘보다 나은 내일을 선물하자라는 생각으로
            UX와 DX를 모두 고려하는 설계를 하려 노력하고 있습니다.
          </p>
          <p>
            백엔드 개발을 기반으로 ERP 환경과 SAP 영역까지 역량을 확장하고 있습니다.
            SAP 구조와 ERP 프로세스를 이해하는 데 집중하며, 이를 백엔드 개발 경험과 연결하여
            적용 범위를 넓혀 나가고 있습니다.
          </p>
          <p>
            업무 프로세스에 대한 깊은 이해와 시스템 구조 기반의 개발을 목표로
            지속적으로 학습하고 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
