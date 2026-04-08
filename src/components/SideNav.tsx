import { useState, useEffect } from "react";
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => {
      const scrollTop = container.scrollTop;
      const viewportH = container.clientHeight;

      // Show only after scrolling past hero
      setVisible(scrollTop > viewportH * 0.5);

      // Determine active section
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
    return () => container.removeEventListener("scroll", handler);
  }, [containerRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
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
