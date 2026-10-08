import {
  ChartColumn,
  CircleHelp,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import { SIGNUP_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";
import { ZuriChat } from "@/shared/ui/product/product-ui";
import type { ChatMessage } from "@/shared/ui/product/sample-data";

const conversation: ChatMessage[] = [
  { role: "user", text: "How many orders came in this week?" },
  {
    role: "zuri",
    text: "You had 34 orders this week totalling ₦1,240,000, up 18% on last week. Your best day was Saturday with 11 orders.",
  },
  { role: "user", text: "Which products are low on stock?" },
  {
    role: "zuri",
    text: "3 products are running low: Belt Wrap Dress (S) has 4 left, LunaFlex Tote has 6, and Aviator Sunglasses has 2. Want the steps to restock them?",
  },
];

const capabilities = [
  {
    icon: ChartColumn,
    title: "Ask about your business",
    desc: "How much did I sell this week? Which products are low on stock? Have I been paid for order 97? Zuri answers from your real numbers and never guesses.",
  },
  {
    icon: CircleHelp,
    title: "Get help doing anything",
    desc: "Ask how to add a tax rate or start an email campaign, and Zuri gives you verified step-by-step instructions for the screen you're on.",
  },
  {
    icon: MonitorSmartphone,
    title: "On your phone and your desk",
    desc: "Zuri lives inside the SalesCenta app and dashboard and knows which one you're using, so its directions match what's in front of you.",
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    desc: "Zuri only sees your own store's data, respects your staff roles and permissions, and never shares information between businesses.",
  },
];

const prompts = [
  "How much did I sell this week?",
  "Which products are low on stock?",
  "Have I been paid for order 97?",
  "How do I add a tax rate?",
  "How do I start an email campaign?",
];

export default function ZuriPage() {
  return (
    <>
      <PageHero
        eyebrow="Zuri AI"
        title="Your business, answered."
        sub="Zuri is the AI assistant built into SalesCenta. Ask about your sales, stock and payments in plain language, or ask how to do anything in the app, and get a straight answer from your own data."
        actions={
          <>
            <ButtonLink href={SIGNUP_URL} variant="light" arrow>
              Try Zuri free
            </ButtonLink>
            <ButtonLink href="/page-pricing" variant="ghost">
              See pricing
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <ZuriChat dark messages={conversation} />
          </div>
        }
      />

      <section className={`${wrap} ${section}`}>
        <p className={`${label} text-primary`}>What Zuri does</p>
        <h2 className={`${h2} mt-4 max-w-[16ch]`}>Like having an analyst on staff.</h2>
        <p className={`${body} mt-5 max-w-[54ch]`}>
          No dashboards to learn and no reports to build. Ask a question and
          get an answer sourced from your own store.
        </p>
        <div className="mt-14 grid border-t border-line md:grid-cols-2">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`border-b border-line py-10 md:px-10 ${
                i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
              }`}
            >
              <c.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-[22px] leading-[1.25] font-bold tracking-[-0.02em] text-ink">
                {c.title}
              </h3>
              <p className={`${body} mt-3 max-w-[48ch]`}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className={`${wrap} ${section} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
          <div>
            <p className={`${label} text-primary`}>Try asking</p>
            <h2 className={`${h2} mt-4 max-w-[14ch]`}>Ask it the way you&apos;d ask a colleague.</h2>
          </div>
          <ul className="border-t border-[#dfe4ea]">
            {prompts.map((p) => (
              <li
                key={p}
                className="border-b border-[#dfe4ea] py-5 text-[20px] font-semibold tracking-[-0.015em] text-ink md:text-[24px]"
              >
                &ldquo;{p}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta
        title="Stop digging through reports. Start asking."
        sub="Zuri is included with SalesCenta. No setup, no extra tools: open the app and ask your first question."
      />
    </>
  );
}
