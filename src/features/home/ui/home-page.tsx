import Image from "next/image";
import Link from "next/link";
import { CreditCard, Earth, Landmark, Sparkles, Store } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SIGNUP_URL, TRIAL_NOTE } from "@/shared/config/site";
import { StoreBadges } from "@/shared/ui/store-badges";
import { ArrowLink, ButtonLink } from "@/shared/ui/site/button-link";
import { FaqList } from "@/shared/ui/site/faq-list";
import { Glow } from "@/shared/ui/site/glow";
import { ProofBand } from "@/shared/ui/site/proof-band";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";
import { ChannelFlow } from "@/shared/ui/product/channel-flow";
import { PhoneShot, ZuriChat } from "@/shared/ui/product/product-ui";
import { stores } from "@/features/showcase/stores";
import { StoreCard } from "@/features/showcase/ui/store-card";
import { featureBySlug } from "@/features/feature-pages/catalog";
import { faqs, problems, steps } from "../content";
import { HomeHero } from "./home-hero";
import { HomeChapters } from "./home-chapters";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Payments />
      <OneQueue />
      <HomeChapters />
      <MoreFeatures />
      <ProofBand />
      <Zuri />
      <Showcase />
      <AppSection />
      <Faq />
      <Closing />
    </>
  );
}

function Payments() {
  const items = [
    { label: "Paystack", icon: <Image src="/images/payments/paystack.png" alt="" width={20} height={20} className="size-5 grayscale" /> },
    { label: "Bank transfer", icon: <Landmark className="size-5" /> },
    { label: "Cards", icon: <CreditCard className="size-5" /> },
    { label: "WhatsApp checkout", icon: <SiWhatsapp className="size-5" /> },
    { label: "In-store POS", icon: <Store className="size-5" /> },
    { label: "International cards", icon: <Earth className="size-5" /> },
  ];
  return (
    <section className={`${wrap} pt-10 md:pt-14`}>
      <div className="grid items-center gap-6 border-y border-line py-8 md:grid-cols-[230px_1fr]">
        <p className={`${label} text-[#5b6676]`}>Get paid your way</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[15px] font-semibold text-[#334155]">
          {items.map((i) => (
            <li key={i.label} className="flex items-center gap-2.5">
              <span className="text-[#64748b]">{i.icon}</span>
              {i.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OneQueue() {
  return (
    <section className={`${wrap} ${section}`}>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:items-center lg:gap-16">
        <div>
          <p className={`${label} text-primary`}>Sound familiar?</p>
          <h2 className={`${h2} mt-4`}>Four ways to sell. One order book.</h2>
          <ul className="mt-8 border-t border-line">
            {problems.map((p) => (
              <li key={p.title} className="border-b border-line py-4">
                <div className="text-[15px] font-semibold text-[#9aa3af] line-through decoration-[#c4cad3]">
                  {p.title}
                </div>
                <div className="mt-1 text-[15px] text-[#1f2937]">{p.fix}</div>
              </li>
            ))}
          </ul>
        </div>
        <ChannelFlow
          itemClassName="rounded-xl border border-line bg-white"
          labelClassName="font-semibold text-ink"
          detailClassName="text-[#6b7280]"
          panelClassName="shadow-[0_30px_60px_-30px_rgba(0,24,49,0.25)]"
        />
      </div>
    </section>
  );
}

/** The features the chapters above don't cover, one link each. */
function MoreFeatures() {
  const items = (["bookings", "sell-abroad", "orders", "marketing", "reports", "mobile-app"] as const)
    .map((s) => featureBySlug(s))
    .filter((f) => f !== undefined);
  return (
    <section className="border-t border-line bg-mist">
      <div className={`${wrap} ${section}`}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className={`${label} text-primary`}>There&apos;s more</p>
            <h2 className={`${h2} mt-4 max-w-[18ch]`}>Everything else your business runs on.</h2>
          </div>
          <ArrowLink href="/features">See all features</ArrowLink>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#dfe4ea] bg-[#dfe4ea] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <Link key={f.slug} href={f.href} className="group bg-white p-7 transition-colors hover:bg-[#fafbfd]">
              <div className="flex items-center justify-between">
                <f.icon className="size-5 text-primary" />
                {f.isNew && <span className="text-[12px] font-semibold text-primary">New</span>}
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-ink">{f.name}</h3>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-copy">{f.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Zuri() {
  return (
    <section className={`${wrap} ${section}`}>
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className={`${label} flex items-center gap-2 text-primary`}>
            <Sparkles className="size-3.5" /> Zuri AI
          </p>
          <h2 className={`${h2} mt-4 max-w-[16ch]`}>Ask your business a question.</h2>
          <p className={`${body} mt-5 max-w-[48ch]`}>
            Zuri reads your own sales, stock and payments and answers in
            plain language. It can also walk you through doing anything in
            the app.
          </p>
          <ArrowLink href="/zuri" className="mt-8">
            Meet Zuri
          </ArrowLink>
        </div>
        <div className="rounded-3xl border border-line p-6 shadow-[0_30px_60px_-40px_rgba(0,24,49,0.35)] sm:p-10">
          <ZuriChat />
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="border-t border-line">
      <div className={`${wrap} ${section}`}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className={`${label} text-primary`}>Showcase</p>
            <h2 className={`${h2} mt-4 max-w-[20ch]`}>Stores already selling on SalesCenta.</h2>
          </div>
          <ArrowLink href="/showcase">See all stores</ArrowLink>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stores.map((s) => (
            <StoreCard key={s.name} store={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppSection() {
  return (
    <section className={`${wrap} pb-24 md:pb-32`}>
      <div className="relative overflow-hidden rounded-[28px] bg-navy px-6 pt-14 text-white sm:px-12 md:px-16 md:pt-16">
        <Glow />
        <div className="relative grid items-end gap-10 md:grid-cols-2">
          <div className="pb-4 md:pb-20">
            <p className={`${label} text-sky`}>Now on iPhone and Android</p>
            <h2 className={`${h2} mt-4 max-w-[14ch]`}>Your whole shop, in your pocket.</h2>
            <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.65] text-white/60">
              Take orders, chase payments and update stock and prices from
              wherever you are.
            </p>
            <StoreBadges className="mt-8" badgeClassName="h-11" />
          </div>
          <div className="relative mx-auto h-[300px] w-full max-w-[420px] md:h-[400px]">
            <PhoneShot which="products" className="absolute -bottom-24 left-0 w-[46%] drop-shadow-2xl md:-bottom-20" />
            <PhoneShot className="absolute -bottom-40 right-0 w-[50%] drop-shadow-2xl md:-bottom-44" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="border-t border-line">
      <div className={`${wrap} ${section} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
        <div>
          <p className={`${label} text-primary`}>Questions</p>
          <h2 className={`${h2} mt-4 max-w-[14ch]`}>What merchants ask us first.</h2>
          <p className={`${body} mt-5`}>
            Something else?{" "}
            <Link href="/contact-one" className="font-semibold text-primary">
              Talk to us
            </Link>
          </p>
        </div>
        <FaqList items={faqs} />
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Glow at="bottom" />
      <div className={`${wrap} relative ${section}`}>
        <div className="text-center">
          <h2 className="mx-auto max-w-[14ch] text-[40px] leading-[1.04] font-bold tracking-[-0.045em] md:text-[68px]">
            Start free in 3 steps.
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-[17px] leading-[1.6] text-white/60 md:text-[19px]">
            {TRIAL_NOTE} Bring your products, connect Paystack and share your
            link on WhatsApp.
          </p>
        </div>
        <ol className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-white/15 pt-6">
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-[14px] font-bold text-navy">
                {i + 1}
              </span>
              <div className="mt-4 text-[17px] font-semibold">{s.title}</div>
              <div className="mt-1 text-[15px] text-white/55">{s.body}</div>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={SIGNUP_URL} variant="light" arrow>
            Start your free trial
          </ButtonLink>
          <ButtonLink href="/contact-one" variant="ghost">
            Talk to us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
