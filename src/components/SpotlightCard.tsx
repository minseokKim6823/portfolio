/**
 * Cursor-following spotlight highlight. Pairs with `spotlightMove`
 * from "@/lib/spotlight" — render as the first child of the card.
 */
export const SpotlightOverlay = ({ size = 260 }: { size?: number }) => (
  <div
    aria-hidden
    className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    style={{
      background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), hsl(var(--accent) / 0.08), transparent 65%)`,
    }}
  />
);
