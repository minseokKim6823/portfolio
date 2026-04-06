import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HeroSection = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-20 sm:pb-28 px-8 sm:px-12 snap-start overflow-hidden"
    >
      {/* Background accent shape */}
      <motion.div
        className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: EASE }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[25vw] h-[25vw] rounded-full bg-accent/3 blur-2xl pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: EASE }}
      />

      <motion.div className="relative z-10 w-full max-w-5xl mx-auto" style={{ y, opacity }}>
        {/* Role tag */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase">
            Backend · ERP · SAP
          </span>
        </motion.div>

        {/* Main heading - large editorial style */}
        <div className="mb-8">
          <div className="overflow-hidden">
            <motion.h1
              className="relative -top-[5px] text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-tight leading-[1.1]"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
            >
              김민석
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-1">
            <motion.p
              className="text-[clamp(1rem,2.5vw,1.75rem)] text-muted-foreground font-light tracking-tight"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.5, ease: EASE }}
            >
              백엔드 · ERP · SAP
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border mb-8 max-w-md"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
        />

        {/* Brief intro + CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <motion.p
            className="text-sm sm:text-base text-muted-foreground max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          >
            금융권 프로젝트에서 검증된 백엔드 역량과
            <br className="hidden sm:block" />
            SAP·ERP 도메인 경험을 갖춘 개발자입니다.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
          >
            <Button size="lg" className="rounded-full font-mono text-xs gap-2 group" asChild>
              <a href="mailto:minseokkim6823@gmail.com">
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Contact
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-11 w-11 group" asChild>
              <a href="https://github.com/minseokKim6823" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-11 w-11 group" asChild>
              <a href="https://www.figma.com/design/OM95uaJ1g30vNOAEAfHFb6" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
