/*
 * Class recipes for the Navy design: one page width, one label style, one
 * section heading and body size. Kept as strings so server components can
 * share them without a wrapper component per element.
 */

export const wrap = "mx-auto w-full max-w-[1300px] px-5 md:px-8";

/** Small uppercase label above a heading. Add a colour per surface. */
export const label = "text-[12px] font-semibold uppercase tracking-[0.16em]";

export const h2 =
  "text-[34px] leading-[1.08] font-bold tracking-[-0.035em] md:text-[46px]";

export const body = "text-[17px] leading-[1.65] text-copy";

/** Vertical rhythm for a standard section. */
export const section = "py-24 md:py-32";
