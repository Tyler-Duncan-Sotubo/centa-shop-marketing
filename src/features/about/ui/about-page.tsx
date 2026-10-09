import { SIGNUP_URL } from "@/shared/config/site";
import { ArrowLink, ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { ProofBand } from "@/shared/ui/site/proof-band";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";

const reasons = [
  {
    title: "Get selling, fast.",
    desc: "Launch your online store in no time, and keep the same platform as you add locations, staff and wholesale buyers instead of migrating later.",
    cta: { label: "Start free", href: SIGNUP_URL },
  },
  {
    title: "Sell where your customers already are.",
    desc: "WhatsApp checkout means customers can browse, ask questions and send their order without leaving the chat they use every day.",
    cta: { label: "See the features", href: "/#features" },
  },
  {
    title: "Room to grow, without add-ons.",
    desc: "Multi-location stock, POS and wholesale quoting are part of the platform, not extras that push your bill up every time your business grows.",
    cta: { label: "See pricing", href: "/page-pricing" },
  },
  {
    title: "Real, direct support.",
    desc: "No call centre and no ticket queue. Reach out and hear back from someone who knows how your store is set up.",
    cta: { label: "Talk to us", href: "/contact-one" },
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SalesCenta"
        title="Our business is making yours a success."
        sub="We built SalesCenta to help Nigerian merchants start, manage and grow a real business, without forcing them into tools built for a market that isn't theirs."
        actions={
          <>
            <ButtonLink href={SIGNUP_URL} variant="light" arrow>
              Start your free trial
            </ButtonLink>
            <ButtonLink href="/contact-one" variant="ghost">
              Get in touch
            </ButtonLink>
          </>
        }
      />

      <section className={`${wrap} ${section}`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className={`${label} text-primary`}>Why we exist</p>
            <h2 className={`${h2} mt-4 max-w-[14ch]`}>Built the other way round.</h2>
          </div>
          <div className={`${body} space-y-5 md:text-[18px]`}>
            <p>
              Most commerce platforms are built for a market that isn&apos;t
              ours. They&apos;re designed around card payments and foreign
              currencies first, with WhatsApp and bank transfer bolted on as
              an afterthought, if at all.
            </p>
            <p>
              Most Nigerian merchants already sell on WhatsApp and get paid by
              bank transfer. So SalesCenta starts there: WhatsApp checkout,
              bank transfer and naira pricing from day one, with a real
              storefront, multi-location stock, a POS and wholesale quoting
              behind it.
            </p>
            <p>
              That means no fighting a platform that wasn&apos;t built for how
              you sell, no converting currencies you don&apos;t use, and no
              outgrowing the tool the moment you open a second store or land
              a bulk order.
            </p>
            <p className="text-ink">
              SalesCenta is built and run by TXD Agency, based in Croydon, UK.
            </p>
          </div>
        </div>
      </section>

      <ProofBand />

      <section className={`${wrap} ${section}`}>
        <p className={`${label} text-primary`}>Why merchants choose us</p>
        <h2 className={`${h2} mt-4 max-w-[18ch]`}>One platform from your first sale to your third store.</h2>
        <div className="mt-14 grid border-t border-line md:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`border-b border-line py-10 md:px-10 ${
                i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
              }`}
            >
              <h3 className="text-[22px] leading-[1.25] font-bold tracking-[-0.02em] text-ink">
                {r.title}
              </h3>
              <p className={`${body} mt-3 max-w-[46ch]`}>{r.desc}</p>
              <ArrowLink href={r.cta.href} className="mt-6">
                {r.cta.label}
              </ArrowLink>
            </div>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
