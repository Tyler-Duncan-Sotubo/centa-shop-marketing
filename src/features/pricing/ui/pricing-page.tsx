import { CreditCard, Sparkles, Store } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { FaqList } from "@/shared/ui/site/faq-list";
import { PageHero } from "@/shared/ui/site/page-hero";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";
import { pricingFaqs } from "../plans";
import FeatureComparison from "./feature-comparison";
import { PricingPlans } from "./pricing-plans";

const included = [
  {
    icon: SiWhatsapp,
    title: "WhatsApp checkout",
    desc: "Customers send their order to your WhatsApp in one tap. On every plan, not an add-on.",
  },
  {
    icon: CreditCard,
    title: "Paystack, transfer and cards",
    desc: "Take payment the way your customers already pay, with no markup from us.",
  },
  {
    icon: Store,
    title: "Your own storefront",
    desc: "A branded store you edit yourself, with discounts, collections and SEO built in.",
  },
  {
    icon: Sparkles,
    title: "Zuri AI",
    desc: "Ask about your sales and stock, or how to do anything in the app.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="One price. Every way your customers pay."
        sub="WhatsApp checkout, bank transfer and cards on every plan. Priced in naira, with a 14-day free trial and no card required."
        overlap="lg"
      >
        <div className="mt-12 pb-4 md:mt-14">
          <PricingPlans />
        </div>
      </PageHero>

      <section className={`${wrap} pb-24 pt-16 md:pb-32 md:pt-24`}>
        <p className={`${label} text-primary`}>On every plan</p>
        <div className="mt-8 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {included.map((i) => (
            <div key={i.title}>
              <i.icon className="size-5 text-primary" />
              <h3 className="mt-4 text-[17px] font-bold text-ink">{i.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-copy">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className={`${wrap} ${section}`}>
          <p className={`${label} text-primary`}>Compare plans</p>
          <h2 className={`${h2} mt-4 max-w-[18ch]`}>Every feature, side by side.</h2>
          <p className={`${body} mt-5 max-w-[52ch]`}>
            See exactly what&apos;s included on each plan before you choose.
          </p>
          <div className="mt-12">
            <FeatureComparison />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className={`${wrap} ${section} grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]`}>
          <div>
            <p className={`${label} text-primary`}>Questions</p>
            <h2 className={`${h2} mt-4 max-w-[12ch]`}>Questions about pricing.</h2>
          </div>
          <FaqList items={pricingFaqs} />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
