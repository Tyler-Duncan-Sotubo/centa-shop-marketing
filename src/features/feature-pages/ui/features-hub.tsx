import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SIGNUP_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { label, wrap } from "@/shared/ui/site/styles";
import { featureGroups } from "../catalog";

export default function FeaturesHub() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything you need to sell, in one place."
        sub="Your online store, the till, bookings, payments, stock, customers and reports share one set of products, orders and figures. Here's each part in detail."
        actions={
          <>
            <ButtonLink href={SIGNUP_URL} variant="light" arrow>
              Start your free trial
            </ButtonLink>
            <ButtonLink href="/page-pricing" variant="ghost">
              See pricing
            </ButtonLink>
          </>
        }
      />

      <section className={`${wrap} space-y-20 py-24 md:py-32`}>
        {featureGroups.map((g) => (
          <div key={g.title}>
            <p className={`${label} border-b border-line pb-4 text-primary`}>{g.title}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((f) => (
                <Link
                  key={f.slug}
                  href={f.href}
                  className="group rounded-2xl border border-line p-6 transition-colors hover:border-[#c9d3df] hover:bg-mist"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-white">
                      <f.icon className="size-5 text-primary" />
                    </span>
                    {f.isNew && <span className="text-[12px] font-semibold text-primary">New</span>}
                  </div>
                  <h2 className="mt-5 text-[19px] font-bold text-ink">{f.name}</h2>
                  <p className="mt-1.5 text-[15px] leading-[1.55] text-copy">{f.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <ClosingCta />
    </>
  );
}
