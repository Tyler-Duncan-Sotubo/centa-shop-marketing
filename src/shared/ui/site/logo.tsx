import Image from "next/image";
import { cn } from "@/lib/utils";

/** The wordmark: "dark" is the blue mark with charcoal type, "light" is all white. */
export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Image
      src={
        tone === "light"
          ? "/images/salescenta-logo-light.png"
          : "/salescenta-logo.png"
      }
      alt="SalesCenta"
      width={448}
      height={98}
      priority
      className={cn("h-7 w-auto", className)}
    />
  );
}
