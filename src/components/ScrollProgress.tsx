import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject } from "react";

const ScrollProgress = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
