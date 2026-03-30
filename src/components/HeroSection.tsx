import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
      }, 80);
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

const HeroSection = () => {
  const nameChars = "김민석".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 snap-start">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            &lt;Backend Developer /&gt;
          </p>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block"
          >
            안녕하세요,
          </motion.span>
          <br />
          <span className="text-gradient inline-flex">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="inline-block"
          >
            입니다.
          </motion.span>
        </h1>

        <motion.div
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <TypewriterText
            text="백엔드 개발을 기반으로 ERP · SAP 역량까지 겸비한 개발자입니다."
            delay={1.5}
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <Button size="lg" className="rounded-full font-mono text-sm gap-2" asChild>
            <a href="mailto:minseokkim6823@gmail.com">
              <Mail className="w-4 h-4" />
              연락하기
            </a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/50 hover:border-primary hover:text-primary transition-colors" asChild>
            <a href="https://github.com/minseokKim6823" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
