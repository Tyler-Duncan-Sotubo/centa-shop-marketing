export default function PageHeroShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative table w-full py-36 lg:py-44 overflow-hidden bg-primary/5">
      <div
        className="absolute top-8 right-8 md:top-12 md:right-16 size-12 md:size-16 bg-amber-400/40 -z-1"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>
      <div
        className="absolute bottom-8 left-8 md:bottom-12 md:left-16 size-12 md:size-16 bg-emerald-400/30 -z-1"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
      ></div>

      <div className="container relative">{children}</div>
    </section>
  );
}
