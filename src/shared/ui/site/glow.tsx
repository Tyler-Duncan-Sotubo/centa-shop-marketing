/** Brand-blue light on a navy field, from the top or the bottom edge. */
export function Glow({ at = "top" }: { at?: "top" | "bottom" }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          at === "top"
            ? "radial-gradient(60% 55% at 50% 0%, rgba(0,96,196,0.6) 0%, rgba(0,80,163,0.14) 55%, transparent 100%)"
            : "radial-gradient(55% 75% at 50% 100%, rgba(0,96,196,0.5) 0%, transparent 100%)",
      }}
    />
  );
}

/** A faint grid that fades out from the top centre. */
export function GridTexture() {
  const mask = "radial-gradient(70% 55% at 50% 0%, #000 30%, transparent 75%)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}
