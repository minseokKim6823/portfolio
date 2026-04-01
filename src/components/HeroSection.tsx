import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [displayed, started, text]);

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  );
};

const FloatingParticle = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-primary/30"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const nameChars = "김민석".split("");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 snap-start">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Animated gradient orbs that follow mouse slightly */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px]"
        animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[150px]"
        animate={{ x: -mousePos.x * 1.5, y: -mousePos.y * 1.5 }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Floating particles */}
      {[
        { delay: 0, x: "20%", y: "30%" },
        { delay: 1.2, x: "75%", y: "25%" },
        { delay: 0.6, x: "60%", y: "70%" },
        { delay: 2.0, x: "30%", y: "65%" },
        { delay: 1.5, x: "85%", y: "50%" },
        { delay: 0.3, x: "10%", y: "55%" },
        { delay: 2.5, x: "50%", y: "20%" },
        { delay: 1.8, x: "40%", y: "80%" },
      ].map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <motion.div className="relative z-10 max-w-4xl mx-auto text-center" style={{ y, opacity, scale }}>
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-8 flex items-center justify-center gap-2">
            <motion.span
              className="inline-block w-8 h-[1px] bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            Backend Developer
            <motion.span
              className="inline-block w-8 h-[1px] bg-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </p>
        </motion.div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
          {/* 안녕하세요, - slide in with blur */}
          <motion.span
            initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="inline-block"
          >
            안녕하세요,
          </motion.span>
          <br />

          {/* 김민석 - staggered 3D flip with glow */}
          <span className="text-gradient inline-flex relative">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -90, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                className="inline-block"
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  transition: { duration: 0.2 },
                }}
              >
                {char}
              </motion.span>
            ))}
            {/* Underline glow */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            />
          </span>
          <br />

          {/* 입니다. - slide in from right with blur */}
          <motion.span
            initial={{ opacity: 0, x: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 80 }}
            className="inline-block"
          >
            입니다.
          </motion.span>
        </h1>

        {/* Typewriter description */}
        <motion.div
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <TypewriterText
            text="백엔드 개발을 기반으로 ERP · SAP 역량까지 겸비한 개발자입니다."
            delay={1.5}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <Button size="lg" className="rounded-full font-mono text-sm gap-2 shadow-lg shadow-primary/20" asChild>
            <a href="mailto:minseokkim6823@gmail.com">
              <Mail className="w-4 h-4" />
              연락하기
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/50 hover:border-primary hover:text-primary transition-all hover:shadow-lg hover:shadow-primary/10 hover:scale-110" asChild>
            <a href="https://github.com/minseokKim6823" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-[10px] font-mono text-muted-foreground/50 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
