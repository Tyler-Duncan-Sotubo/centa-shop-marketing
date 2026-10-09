import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { FaqList } from "@/shared/ui/site/faq-list";
import { Glow } from "@/shared/ui/site/glow";
import { PageHero } from "@/shared/ui/site/page-hero";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";
import { featureBySlug, type FeatureSlug } from "../catalog";

/**
 * How a visual sits in its panel. "pad" floats it with room all round;
 * "flush" runs it off the bottom edge, for the open-bottomed iPad and
 * phone frames.
 */
type Frame = "pad" | "flush";

export interface Spotlight {
  label: string;
  title: string;
  body: string;
  points?: string[];
  visual: React.ReactNode;
  frame?: Frame;
  /** Navy panel instead of the light grey one. */
  dark?: boolean;
}

export interface FeatureContent {
  slug: FeatureSlug;
  meta: { title: string; description: string };
  hero: {
    title: string;
    sub: string;
    visual: React.ReactNode;
    frame?: Frame;
    /** Replaces the default "Start your free trial / See pricing" pair. */
    actions?: React.ReactNode;
  };
  spotlights: Spotlight[];
  capabilities: { icon: LucideIcon | IconType; title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  related: (FeatureSlug | "zuri")[];
  closing?: { title: string; sub: string };
}

export function FeaturePage({ content }: { content: FeatureContent }) {
  const entry = featureBySlug(content.slug);
  const { hero } = content;

  return (
    <>
      <PageHero
        eyebrow={entry?.name}
        title={hero.title}
        sub={hero.sub}
        actions={
          hero.actions ?? (
            <>
              <ButtonLink href={SIGNUP_URL} variant="light" arrow>
                Start your free trial
              </ButtonLink>
              <ButtonLink href="/page-pricing" variant="ghost">
                See pricing
              </ButtonLink>
            </>
          )
        }
        aside={hero.visual}
        asideFlush={hero.frame === "flush"}
      />

      {content.spotlights.map((s, i) => (
        <SpotlightRow key={s.title} s={s} flip={i % 2 === 1} first={i === 0} />
      ))}

      <section className="border-t border-line bg-mist">
        <div className={`${wrap} ${section}`}>
          <p className={`${label} text-primary`}>Also included</p>
          <h2 className={`${h2} mt-4 max-w-[18ch]`}>The details that make it work.</h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 border-t border-[#dfe4ea] pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {content.capabilities.map((c) => (
              <div key={c.title}>
                <c.icon className="size-5 text-primary" />
                <h3 className="mt-4 text-[17px] font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-copy">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.faqs && content.faqs.length > 0 && (
        <section className="border-t border-line">
          <div className={`${wrap} ${section} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
            <div>
              <p className={`${label} text-primary`}>Questions</p>
              <h2 className={`${h2} mt-4 max-w-[12ch]`}>Good to know.</h2>
            </div>
            <FaqList items={content.faqs} />
          </div>
        </section>
      )}

      <Related slugs={content.related} />

      <ClosingCta {...content.closing} />
    </>
  );
}

function SpotlightRow({ s, flip, first }: { s: Spotlight; flip: boolean; first: boolean }) {
  const flush = s.frame === "flush";
  return (
    <section className={first ? "" : "border-t border-line"}>
      <div className={`${wrap} grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20`}>
        <div className={flip ? "lg:order-2" : ""}>
          <p className={`${label} text-primary`}>{s.label}</p>
          <h2 className={`${h2} mt-4 max-w-[17ch]`}>{s.title}</h2>
          <p className={`${body} mt-5 max-w-[50ch]`}>{s.body}</p>
          {s.points && (
            <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 border-t border-line">
              {s.points.map((p) => (
                <li key={p} className="border-b border-line py-3 text-[14px] font-semibold text-[#1f2937]">
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={cn(
            "relative min-w-0 overflow-hidden rounded-3xl",
            s.dark ? "bg-navy" : "bg-mist",
            flush ? "px-6 pt-10 sm:px-12 md:pt-14" : "px-5 py-10 sm:px-10 md:py-14",
          )}
        >
          {s.dark && <Glow />}
          <div className="relative">{s.visual}</div>
        </div>
      </div>
    </section>
  );
}

function Related({ slugs }: { slugs: (FeatureSlug | "zuri")[] }) {
  const items = slugs.map((s) => featureBySlug(s)).filter((f) => f !== undefined);
  return (
    <section className="border-t border-line">
      <div className={`${wrap} ${section}`}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className={`${label} text-primary`}>Works with</p>
            <h2 className={`${h2} mt-4 max-w-[18ch]`}>Part of one connected system.</h2>
          </div>
          <Link href="/features" className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary">
            All features <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((f) => (
            <Link
              key={f.slug}
              href={f.href}
              className="group rounded-2xl border border-line p-6 transition-colors hover:border-[#c9d3df] hover:bg-mist"
            >
              <span className="flex size-10 items-center justify-center rounded-xl border border-line bg-white">
                <f.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 text-[18px] font-bold text-ink">{f.name}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-copy">{f.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                Learn more <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
