import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SideNav = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => {
      const scrollTop = container.scrollTop;
      const viewportH = container.clientHeight;

      // Show only when actively scrolling and past hero
      if (scrollTop > viewportH * 0.5) {
        setScrolling(true);
        setVisible(true);
        if (scrollTimer.current) clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => setScrolling(false), 1500);
      }

      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop - scrollTop;
        if (top < viewportH * 0.5) current = s.id;
      }
      setActive(current);
    };

    container.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => {
      container.removeEventListener("scroll", handler);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, [containerRef]);

  return (
    <AnimatePresence>
      {visible && scrolling && (
        <motion.nav
          className="fixed left-8 top-1/3 -translate-y-1/2 z-40 hidden md:flex flex-col items-start gap-5"
          style={{ marginTop: "-20px" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[20px] tracking-wider uppercase transition-all duration-300 ${
                active === s.id
                  ? "text-accent scale-110 font-semibold"
                  : "text-muted-foreground/40 hover:text-muted-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
