import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Native details/summary accordion, so it ships no client JS. */
export function FaqList({
  items,
  className,
}: {
  items: { q: string; a: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[17px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus className="size-4 shrink-0 text-[#6b7280] transition-transform group-open:rotate-45" />
          </summary>
          <p className="max-w-[60ch] pb-6 text-[16px] leading-[1.65] text-copy">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
