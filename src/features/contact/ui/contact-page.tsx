import { BookOpen, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import {
  HELP_URL,
  SUPPORT_EMAIL,
  SUPPORT_WHATSAPP_URL,
} from "@/shared/config/site";
import { ArrowLink, ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";

const channels = [
  ...(SUPPORT_WHATSAPP_URL
    ? [
        {
          icon: SiWhatsapp,
          title: "WhatsApp",
          desc: "The fastest way to reach us for setup help or support.",
          link: { label: "Message us", href: SUPPORT_WHATSAPP_URL },
        },
      ]
    : []),
  {
    icon: Mail,
    title: "Email",
    desc: "Pricing, setup, moving your store, or anything that needs detail.",
    link: { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  },
  {
    icon: BookOpen,
    title: "Help centre",
    desc: "Step-by-step guides for every part of SalesCenta.",
    link: { label: "Browse guides", href: HELP_URL },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        sub="Questions about pricing, moving your store, or anything else. A real person who knows the product will get back to you."
        actions={
          <ButtonLink href={`mailto:${SUPPORT_EMAIL}`} variant="light" arrow>
            Email {SUPPORT_EMAIL}
          </ButtonLink>
        }
      />

      <section className={`${wrap} ${section}`}>
        <div className={`grid border-t border-line ${channels.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {channels.map((c, i) => (
            <div
              key={c.title}
              className={`border-b border-line py-10 md:border-b-0 md:px-10 ${
                i === 0 ? "md:pl-0" : ""
              } ${i < channels.length - 1 ? "md:border-r" : "md:pr-0"}`}
            >
              <c.icon className="size-5 text-primary" />
              <h3 className="mt-5 text-[22px] font-bold tracking-[-0.02em] text-ink">{c.title}</h3>
              <p className={`${body} mt-2`}>{c.desc}</p>
              <ArrowLink href={c.link.href} className="mt-6">
                {c.link.label}
              </ArrowLink>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className={`${wrap} ${section} grid gap-12 lg:grid-cols-2`}>
          <div>
            <p className={`${label} text-primary`}>Moving to SalesCenta?</p>
            <h2 className={`${h2} mt-4 max-w-[16ch]`}>We&apos;ll bring your store with you.</h2>
            <p className={`${body} mt-5 max-w-[48ch]`}>
              Import your products from a Shopify CSV yourself, or go
              Enterprise and we migrate the whole store for you, free.
            </p>
            <ArrowLink href="/page-pricing" className="mt-8">
              See Enterprise
            </ArrowLink>
          </div>
          <div className="lg:justify-self-end">
            <p className={`${label} text-[#6b7280]`}>Office</p>
            <div className="mt-4 flex gap-3 text-[17px] leading-[1.6] text-ink">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <address className="not-italic">
                TXD Agency
                <br />
                300 Whitestone Way
                <br />
                Startup Croydon
                <br />
                Croydon, UK
              </address>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
