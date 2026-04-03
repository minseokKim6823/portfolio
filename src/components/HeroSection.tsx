import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.15, ease: EASE },
  }),
};

const HeroSection = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 snap-start overflow-hidden">
      <motion.div className="relative z-10 max-w-3xl mx-auto" style={{ y, opacity, scale }}>
        {/* Tag */}
        <div className="overflow-hidden mb-10">
          <motion.p
            className="font-mono text-muted-foreground text-xs tracking-[0.3em] uppercase"
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Backend Developer
          </motion.p>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          <div className="overflow-hidden">
            <motion.span
              className="block text-foreground"
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              안녕하세요,
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block text-foreground"
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              김민석
              <motion.span
                className="inline-block text-accent"
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 300 }}
              >
                .
              </motion.span>
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block text-foreground text-4xl sm:text-5xl lg:text-6xl mt-2"
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              입니다
            </motion.span>
          </div>
        </h1>

        {/* Animated line */}
        <motion.div
          className="h-px bg-accent/40 mb-8"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
        />

        {/* Description */}
        <div className="overflow-hidden">
          <motion.p
            className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed mb-12"
            variants={textReveal}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            백엔드 개발을 기반으로 ERP · SAP 역량까지 겸비한 개발자입니다.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
        >
          <Button size="lg" className="rounded-full font-mono text-xs gap-2 group" asChild>
            <a href="mailto:minseokkim6823@gmail.com">
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              연락하기
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-11 w-11 group" asChild>
            <a href="https://github.com/minseokKim6823" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
