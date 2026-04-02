import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const HeroSection = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 snap-start">
      <motion.div className="relative z-10 max-w-3xl mx-auto" style={{ y, opacity }}>
        {/* Tag */}
        <motion.p
          className="font-mono text-muted-foreground text-xs tracking-[0.3em] uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Backend Developer
        </motion.p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="block text-foreground"
          >
            안녕하세요,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="block text-foreground"
          >
            김민석
            <motion.span
              className="inline-block text-accent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
            >
              .
            </motion.span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="block text-foreground text-4xl sm:text-5xl lg:text-6xl mt-2"
          >
            입니다
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          백엔드 개발을 기반으로 ERP · SAP 역량까지 겸비한 개발자입니다.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button size="lg" className="rounded-full font-mono text-xs gap-2" asChild>
            <a href="mailto:minseokkim6823@gmail.com">
              <Mail className="w-4 h-4" />
              연락하기
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-11 w-11" asChild>
            <a href="https://github.com/minseokKim6823" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
      >
        <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
