import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "skills" },
  { id: "career" },
  { id: "projects" },
  { id: "contact" },
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

      setVisible(scrollTop > viewportH * 0.5);

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
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.4 }}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block transition-all duration-300"
            >
              <motion.div
                className={`rounded-sm transition-all duration-300 ${
                  active === s.id
                    ? "w-3 h-3 bg-accent"
                    : "w-2.5 h-2.5 border border-muted-foreground/30 hover:border-accent/60"
                }`}
                layout
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNav;
