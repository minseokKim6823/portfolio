import { motion } from "framer-motion";
import { type ReactNode } from "react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
};

const SectionHeader = ({ index, label, title, description, action }: SectionHeaderProps) => {
  return (
    <div className="mb-14">
      <div className="overflow-hidden">
        <motion.p
          className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase mb-4"
          variants={lineReveal} initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} custom={0}
        >
          <span className="text-muted-foreground/60">{index}</span>
          <span className="h-px w-8 bg-accent/50" aria-hidden />
          <span className="text-accent">{label}</span>
        </motion.p>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="overflow-hidden">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            variants={lineReveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} custom={1}
          >
            {title}
          </motion.h2>
        </div>
        {action && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {action}
          </motion.div>
        )}
      </div>
      {description && (
        <motion.p
          className="text-muted-foreground mt-4 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
