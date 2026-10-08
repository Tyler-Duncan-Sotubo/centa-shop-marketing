import { cn } from "@/lib/utils";
import { Glow, GridTexture } from "./glow";
import { label, wrap } from "./styles";

/**
 * The navy header every inner page opens with. Clears the fixed nav, takes
 * an optional right-hand visual, and can end with a white band (`overlap`)
 * so whatever follows straddles the navy edge, as the home page does.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  actions,
  aside,
  overlap = false,
  className,
  children,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  /** Height of the white band at the bottom, for content that straddles. */
  overlap?: false | "sm" | "md" | "lg";
  className?: string;
  /** Rendered full width under the copy, inside the navy field. */
  children?: React.ReactNode;
}) {
  const band = {
    sm: "h-24 md:h-32",
    md: "h-40 md:h-56",
    lg: "h-56 md:h-80",
  };
  return (
    <section className={cn("relative overflow-hidden bg-navy text-white", className)}>
      <Glow />
      <GridTexture />
      {overlap && (
        <div aria-hidden className={cn("absolute inset-x-0 bottom-0 bg-white", band[overlap])} />
      )}
      <div className={`${wrap} relative pb-20 pt-32 md:pb-28 md:pt-44 ${overlap ? "pb-0! md:pb-0!" : ""}`}>
        <div className={aside ? "grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16" : ""}>
          <div className="min-w-0">
            {eyebrow && <p className={`${label} text-sky`}>{eyebrow}</p>}
            <h1 className="mt-5 max-w-[18ch] text-balance text-[40px] leading-[1.04] font-bold tracking-[-0.045em] sm:text-[52px] md:text-[64px]">
              {title}
            </h1>
            {sub && (
              <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.6] text-white/65 md:text-[19px]">
                {sub}
              </p>
            )}
            {actions && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            )}
          </div>
          {aside && <div className="min-w-0">{aside}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
