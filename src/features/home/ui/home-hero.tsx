import Image from "next/image";
import { Search } from "lucide-react";
import { SIGNUP_URL, TRIAL_NOTE } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { Glow, GridTexture } from "@/shared/ui/site/glow";
import { label, wrap } from "@/shared/ui/site/styles";
import { MetricStrip, OrdersPanel, PhoneShot } from "@/shared/ui/product/product-ui";
import { SAMPLE_STORE } from "@/shared/ui/product/sample-data";
import { hero } from "../content";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Glow />
      <GridTexture />
      {/* The hero turns white below the fold line, so the product window
          straddles the edge into the page. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[18%] bg-white md:h-[30%]" />

      <div className={`${wrap} relative pt-32 text-center md:pt-40`}>
        <p className={`${label} text-sky`}>{hero.eyebrow}</p>
        <h1 className="mx-auto mt-6 max-w-[18ch] text-balance text-[42px] leading-[1.03] font-bold tracking-[-0.045em] sm:text-[58px] md:text-[76px]">
          {hero.title}
          <span className="block text-white/45">{hero.titleTail}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[58ch] text-[17px] leading-[1.6] text-white/65 md:text-[19px]">
          {hero.sub}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={SIGNUP_URL} variant="light" arrow>
            Start your free trial
          </ButtonLink>
          <ButtonLink href="/page-pricing" variant="ghost">
            See pricing
          </ButtonLink>
        </div>
        <p className="mt-5 text-[13px] text-white/45">{TRIAL_NOTE}</p>
      </div>

      <div className={`${wrap} relative mt-14 md:mt-20`}>
        <AdminWindow />
        <Chip
          className="absolute bottom-24 left-0 hidden lg:flex xl:left-4"
          dot="#4ade80"
          title="Payment received"
          sub="₦48,500 · Bank transfer"
        />
        <Chip
          className="absolute right-0 top-10 hidden lg:flex xl:right-6"
          dot="#8dbbff"
          title="New order on WhatsApp"
          sub="ORD-000214 · Adaeze Okafor"
        />
        <PhoneShot className="absolute -bottom-12 right-0 hidden w-[190px] drop-shadow-[0_30px_40px_rgba(0,24,49,0.35)] lg:block xl:-right-2" />
      </div>
      <div className="h-12 md:h-16" />
    </section>
  );
}

/** Floating notification chip, as on the brand carousel slides. */
function Chip({
  title,
  sub,
  dot,
  className,
}: {
  title: string;
  sub: string;
  dot: string;
  className?: string;
}) {
  return (
    <div
      className={`z-10 items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-left text-ink shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur ${className}`}
    >
      <span className="size-2 rounded-full" style={{ background: dot }} />
      <div>
        <div className="text-[13px] font-semibold">{title}</div>
        <div className="text-[12px] text-[#687385]">{sub}</div>
      </div>
    </div>
  );
}

/** The admin Overview, drawn as a window: sidebar, greeting, figures, orders. */
function AdminWindow() {
  const items = ["Overview", "Products", "Orders", "Customers", "Inventory", "Analytics", "Payout", "Storefront"];
  return (
    <div className="overflow-hidden rounded-2xl bg-white text-left text-[#30313d] shadow-[0_50px_120px_-30px_rgba(0,80,163,0.6)] ring-1 ring-white/15 lg:mx-28">
      <div className="flex items-center gap-4 border-b border-[#ebeef1] px-4 py-3">
        <Image src="/images/salescenta-mark.svg" alt="" width={20} height={20} className="size-5" />
        <span className="text-[13px] font-semibold">{SAMPLE_STORE}</span>
        <span className="mx-auto hidden w-full max-w-sm items-center gap-2 rounded-lg bg-[#f6f9fc] px-3 py-1.5 text-[12px] text-[#8792a2] sm:flex">
          <Search className="size-3.5" />
          Search customers, orders, invoices, quotes…
        </span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden border-r border-[#ebeef1] bg-[#f6f9fc] p-3 md:block">
          {items.map((i) => (
            <div
              key={i}
              className={
                i === "Orders"
                  ? "rounded-lg bg-[#e6eef7] px-3 py-2 text-[13px] font-medium text-primary"
                  : "px-3 py-2 text-[13px] text-[#4f5b6b]"
              }
            >
              {i}
            </div>
          ))}
        </aside>
        <div className="p-4 sm:p-6">
          <div className="text-[20px] font-semibold">Good afternoon!</div>
          <div className="text-[13px] text-[#687385]">
            Here&apos;s what&apos;s happening in your store.
          </div>
          <MetricStrip className="mt-5" />
          <OrdersPanel rows={4} className="mt-5" />
        </div>
      </div>
    </div>
  );
}
