import { type MouseEvent } from "react";

/**
 * Tracks the cursor as CSS vars on a card so <SpotlightOverlay /> can
 * follow it. Attach to onMouseMove of an element with
 * `group relative overflow-hidden`.
 */
export const spotlightMove = (e: MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};
