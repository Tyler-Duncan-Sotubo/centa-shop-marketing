import Image from "next/image";
import { cn } from "@/lib/utils";

/*
 * Small parts the product mockups are built from, in the admin's own
 * vocabulary: #30313d ink, #687385 muted text, hairline #ebeef1 rules,
 * #f6f9fc washes and brand blue for the one selected thing.
 */

export const muted = "text-[#687385]";
export const faint = "text-[#8792a2]";
export const rule = "border-[#ebeef1]";

export function Panel({
  title,
  meta,
  children,
  className,
  bodyClassName,
}: {
  title?: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[#e3e8ee] bg-white text-left text-[#30313d] shadow-[0_24px_60px_-36px_rgba(0,24,49,0.35)]",
        className,
      )}
    >
      {(title || meta) && (
        <div className={cn("flex items-center justify-between gap-4 border-b px-5 py-3.5", rule)}>
          <div className="text-[14px] font-semibold">{title}</div>
          {meta && <div className={cn("text-[12px]", muted)}>{meta}</div>}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

export function Tabs({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <div className={cn("flex gap-5 border-b px-5 text-[12px]", rule)}>
      {items.map((t, i) => (
        <span
          key={t}
          className={cn(
            "-mb-px py-2.5",
            i === active ? "border-b-2 border-[#0050a3] font-semibold text-[#0050a3]" : muted,
          )}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 border-b border-[#f0f2f5] px-5 py-3 last:border-0", className)}>
      {children}
    </div>
  );
}

const dots = {
  green: "bg-[#1f9d55]",
  amber: "bg-[#d97706]",
  blue: "bg-[#0050a3]",
  grey: "bg-[#c4cad3]",
} as const;

export function Status({
  tone,
  children,
}: {
  tone: keyof typeof dots;
  children: React.ReactNode;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-[11px]", muted)}>
      <span className={cn("size-1.5 rounded-full", dots[tone])} />
      {children}
    </span>
  );
}

export function Toggle({ on = true }: { on?: boolean }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-[18px] w-8 shrink-0 rounded-full transition-colors",
        on ? "bg-[#0050a3]" : "bg-[#d5dbe3]",
      )}
    >
      <span
        className={cn(
          "absolute top-[2px] size-[14px] rounded-full bg-white shadow-sm",
          on ? "left-[16px]" : "left-[2px]",
        )}
      />
    </span>
  );
}

export function MiniButton({
  children,
  primary = false,
  className,
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg px-3 text-[12px] font-medium",
        primary ? "bg-[#0050a3] text-white" : "border border-[#e3e8ee] bg-white text-[#30313d]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** A small floating confirmation, laid over a mockup's corner. */
export function Toast({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "z-10 flex w-fit items-center gap-2 rounded-full bg-[#020b1a] px-4 py-2 text-[12px] font-medium text-white shadow-lg",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-[#4ade80]" />
      {children}
    </div>
  );
}

/**
 * A real app screen (cropped from the App Store shots) in a phone frame,
 * open at the bottom: sit it flush on its container's lower edge.
 */
export function PhoneScreen({
  screen,
  alt,
  className,
}: {
  screen: "home" | "storefront" | "website" | "bookings";
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-t-[44px] bg-[#0d0f12] p-[10px] pb-0", className)}>
      <div className="relative aspect-[600/1000] overflow-hidden rounded-t-[34px] bg-white">
        <Image
          src={`/images/app/screens/${screen}.webp`}
          alt={alt}
          fill
          sizes="320px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
