import Link from "next/link";
import { StoreBadges } from "@/shared/ui/store-badges";
import {
  HELP_URL,
  SUPPORT_EMAIL,
  SUPPORT_WHATSAPP_URL,
} from "@/shared/config/site";
import { Logo } from "./logo";
import { label, wrap } from "./styles";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Pricing", href: "/page-pricing" },
      { label: "Zuri AI", href: "/zuri" },
      { label: "Showcase", href: "/showcase" },
      { label: "Developers", href: "/developer" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/page-aboutus" },
      { label: "Learn", href: "/learn" },
      { label: "Contact", href: "/contact-one" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", href: HELP_URL },
      { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
      ...(SUPPORT_WHATSAPP_URL
        ? [{ label: "WhatsApp", href: SUPPORT_WHATSAPP_URL }]
        : []),
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white/60">
      <div className={`${wrap} grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]`}>
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-[34ch] text-[14px] leading-[1.6]">
            Commerce software for how Nigerian merchants sell.
          </p>
          <StoreBadges className="mt-6" badgeClassName="h-9" />
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <div className={`${label} text-white/40`}>{c.title}</div>
            <ul className="mt-4 space-y-3 text-[14px]">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={wrap}>
        <div className="flex flex-col justify-between gap-2 border-t border-white/10 py-8 text-[13px] sm:flex-row">
          <span>© {new Date().getFullYear()} SalesCenta. All rights reserved.</span>
          <span>Built by TXD Agency, Croydon, UK</span>
        </div>
      </div>
    </footer>
  );
}
