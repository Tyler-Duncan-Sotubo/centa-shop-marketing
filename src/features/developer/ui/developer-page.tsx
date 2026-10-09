import { SiGoogleanalytics, SiMeta, SiPinterest, SiTiktok, SiZoho } from "react-icons/si";
import Image from "next/image";
import { API_DOCS_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { body, h2, label, section, wrap } from "@/shared/ui/site/styles";

/** The Partner API, from backend/src/channels/external/v1. */
const resources = [
  {
    name: "Products",
    does: "List and search products, browse a category, and read a product by its slug.",
    routes: ["GET /v1/products", "GET /v1/products/category/{slug}", "GET /v1/products/{slug}"],
    scopes: ["products:read"],
  },
  {
    name: "Orders",
    does: "List and search orders and read one in full, including its payment and delivery status.",
    routes: ["GET /v1/orders", "GET /v1/orders/{id}"],
    scopes: ["orders:read"],
  },
  {
    name: "Customers",
    does: "List, search and read customers with their addresses, or create a new one.",
    routes: ["GET /v1/customers", "GET /v1/customers/{id}", "POST /v1/customers"],
    scopes: ["customers:read", "customers:write"],
  },
  {
    name: "Inventory",
    does: "A stock overview you can search by product or SKU and filter by location.",
    routes: ["GET /v1/inventory"],
    scopes: ["inventory:read"],
  },
];

const facts = [
  { title: "Scoped keys", body: "Create keys in Settings → API & Webhooks and give each one only the scopes it needs." },
  { title: "Rate limits", body: "60 reads and 10 writes a minute per company." },
  { title: "Credits", body: "Each call uses one credit from your balance. Responses tell you how many are left." },
];

const integrations = [
  { label: "Paystack", node: <Image src="/images/payments/paystack.png" alt="" width={20} height={20} className="size-5" /> },
  { label: "Google Analytics", node: <SiGoogleanalytics className="size-5 text-[#e37400]" /> },
  { label: "Meta Pixel", node: <SiMeta className="size-5 text-[#0866ff]" /> },
  { label: "TikTok Pixel", node: <SiTiktok className="size-5 text-ink" /> },
  { label: "Pinterest Tag", node: <SiPinterest className="size-5 text-[#e60023]" /> },
  { label: "Zoho", node: <SiZoho className="size-5 text-[#e42527]" /> },
];

const sample = `curl https://api.salescenta.com/v1/orders \\
  -H "X-API-Key: sk_live_…"`;

export default function DeveloperPage() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        title="Build on top of your store."
        sub="The Partner API lets your own tools read products, orders, customers and stock, and add customers, with keys you scope yourself. It's part of the Enterprise plan."
        actions={
          <>
            <ButtonLink href={API_DOCS_URL} variant="light" arrow>
              Read the API docs
            </ButtonLink>
            <ButtonLink href="/contact-one" variant="ghost">
              Talk to us about Enterprise
            </ButtonLink>
          </>
        }
        aside={
          <div className="overflow-hidden rounded-2xl bg-[#0b1626] ring-1 ring-white/10">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 text-[12px] text-white/40">Terminal</span>
            </div>
            <pre className="overflow-x-auto p-6 text-[14px] leading-[1.7] text-[#b8d4ff]">
              <code>{sample}</code>
            </pre>
          </div>
        }
      />

      <section className={`${wrap} ${section}`}>
        <p className={`${label} text-primary`}>Partner API</p>
        <h2 className={`${h2} mt-4 max-w-[16ch]`}>What you can reach.</h2>
        <div className="mt-12 border-t border-ink">
          {resources.map((r) => (
            <div key={r.name} className="grid gap-4 border-b border-line py-8 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
              <h3 className="text-[20px] font-bold text-ink">{r.name}</h3>
              <div>
                <p className="text-[16px] leading-[1.6] text-copy">{r.does}</p>
                <p className="mt-3 flex flex-wrap gap-2">
                  {r.scopes.map((s) => (
                    <code key={s} className="text-[13px] text-primary">
                      {s}
                    </code>
                  ))}
                </p>
              </div>
              <ul className="space-y-1.5">
                {r.routes.map((route) => (
                  <li key={route}>
                    <code className="text-[13px] text-ink">{route}</code>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.title}>
              <h3 className="text-[17px] font-bold text-ink">{f.title}</h3>
              <p className={`${body} mt-2`}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-mist">
        <div className={`${wrap} ${section}`}>
          <p className={`${label} text-primary`}>Integrations</p>
          <h2 className={`${h2} mt-4 max-w-[18ch]`}>Connects to the tools you already use.</h2>
          <p className={`${body} mt-5 max-w-[54ch]`}>
            Payments, ad pixels and accounting plug in from your settings, no
            code needed.
          </p>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#dfe4ea] bg-[#dfe4ea] sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <li key={i.label} className="flex items-center gap-3 bg-white px-6 py-5 text-[16px] font-semibold text-ink">
                {i.node}
                {i.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta
        title="Need a custom integration?"
        sub="Enterprise includes the Partner API, Zoho and a team that helps you connect the rest."
        primary={{ label: "Talk to us", href: "/contact-one" }}
        secondary={{ label: "See pricing", href: "/page-pricing" }}
        note={null}
      />
    </>
  );
}
