import { useRef, type RefObject } from "react";
import { useScroll, useTransform } from "framer-motion";

/**
 * Baemin-style scroll reveal.
 *
 * Tracks a section's position inside the scroll container and returns
 * `opacity` / `y` motion values so the section content gently rises and
 * fades in as it enters the viewport, and sinks/fades out as it leaves —
 * on both scroll-down and scroll-up.
 *
 * Attach `ref` to the `<section>` (the scroll-snap target stays
 * untransformed) and spread the returned style onto an inner wrapper.
 */
export function useSectionReveal(containerRef: RefObject<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  // progress: 0 = section just entering from the bottom,
  //           1 = section fully scrolled past the top.
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [80, 0, 0, -60]);

  return { ref, opacity, y };
}
