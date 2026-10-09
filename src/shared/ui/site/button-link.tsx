import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  /** White pill, the main action on navy. */
  light: "bg-white text-navy hover:bg-white/90",
  /** Outlined pill on navy. */
  ghost: "text-white/80 ring-1 ring-white/20 hover:bg-white/5 hover:text-white",
  /** Brand-blue pill, the main action on white. */
  primary: "bg-primary text-white hover:bg-primary-600",
  /** Outlined pill on white. */
  outline: "text-ink ring-1 ring-line hover:bg-mist",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
}) {
  const external = /^https?:|^mailto:/.test(href);
  return (
    <Link
      href={href}
      {...(external && href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight className="size-4" />}
    </Link>
  );
}

/** Text link with a trailing arrow, in brand blue by default. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-600",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}
