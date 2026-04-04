import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const paragraphs = [
  "안녕하세요, 백엔드 개발자 김민석입니다. 유저에게 이로운 가치를 제공함으로써 오늘보다 나은 내일을 선물하자라는 생각으로 UX와 DX를 모두 고려하는 설계를 하려 노력하고 있습니다.",
  "백엔드 개발을 기반으로 ERP 환경과 SAP 영역까지 역량을 확장하고 있습니다. SAP 구조와 ERP 프로세스를 이해하는 데 집중하며, 이를 백엔드 개발 경험과 연결하여 적용 범위를 넓혀 나가고 있습니다.",
  "금융결제원, 우리은행, 국민은행 등 금융권 프로젝트에서 AI-OCR 솔루션과 이미지 허브 시스템을 개발한 경험이 있으며, gRPC 도입으로 응답 속도 80% 개선, Redis 캐싱으로 검색 성능 86% 개선 등 실질적인 성과를 만들어왔습니다.",
  "업무 프로세스에 대한 깊은 이해와 시스템 구조 기반의 개발을 목표로 지속적으로 학습하고 있습니다.",
];

const highlights = [
  { label: "경력", value: "1년 1개월+" },
  { label: "학력", value: "상명대 스마트정보통신공학과 (3.81/4.5)" },
  { label: "위치", value: "서울 송파구" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-14 sm:py-20 px-6 snap-start">
      <div className="max-w-3xl mx-auto">
        <div className="overflow-hidden">
          <motion.p
            className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4"
            variants={lineReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            About
          </motion.p>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold"
            variants={lineReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={1}
          >
            소개
          </motion.h2>
        </div>

        <motion.div
          className="h-px bg-border mb-10"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
        />

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map((h) => (
            <div key={h.label} className="text-center sm:text-left">
              <p className="text-xs font-mono text-accent tracking-wider uppercase mb-1">{h.label}</p>
              <p className="text-sm text-foreground font-medium">{h.value}</p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          {paragraphs.map((text, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i + 2}
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
