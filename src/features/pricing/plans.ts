/**
 * Plans, as the product sells them now. Self-serve tiers differ by quota
 * (stores, team, credits, data retention); almost every feature ships on
 * every tier, and a handful of setup-heavy items are Enterprise-only.
 *
 * Sources: admin/src/features/subscription/config/plan-features.ts (the
 * comparison table) and backend/src/domains/subscriptions/
 * plan-features.map.ts (what's actually gated). Prices live in the
 * database behind an authenticated endpoint, so they're copied here:
 * keep them in step with the admin's billing page. Yearly applies the
 * admin's "Save up to 17%" as a flat ~17% discount, for display.
 */

export interface Tier {
  name: string;
  price: number | "custom";
  blurb: string;
  features: string[];
  highlight?: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: 8000,
    blurb: "Everything you need to start selling.",
    features: ["1 store", "5 team members", "200 credits a month", "30 days of analytics history", "Online store, quotes and invoicing", "Email support"],
  },
  {
    name: "Growth",
    price: 18000,
    blurb: "More room for a second store and a bigger team.",
    features: ["2 stores", "10 team members", "800 credits a month", "90 days of analytics history", "Everything in Starter"],
    highlight: true,
  },
  {
    name: "Pro",
    price: 35000,
    blurb: "For established brands running several stores.",
    features: ["5 stores", "25 team members", "2,000 credits a month", "A year of analytics history", "Everything in Growth", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "custom",
    blurb: "We build your store and move you over.",
    features: ["Everything in Pro, with custom limits", "Your own domain", "Partner API access", "Zoho integration", "Store build and free migration", "Dedicated account manager"],
  },
];

export const YEARLY_DISCOUNT = 0.83;

export function yearlyMonthly(price: number) {
  return Math.round((price * 12 * YEARLY_DISCOUNT) / 12);
}

export function formatNaira(price: number) {
  return `₦${new Intl.NumberFormat("en-NG").format(price)}`;
}

type Value = string | boolean;

/** Starter, Growth, Pro, Enterprise. */
export const comparison: {
  group: string;
  rows: { label: string; values: [Value, Value, Value, Value] }[];
}[] = [
  {
    group: "Room to grow",
    rows: [
      { label: "Stores", values: ["1", "2", "5", "Custom"] },
      { label: "Team members", values: ["5", "10", "25", "Custom"] },
      { label: "Credits a month", values: ["200", "800", "2,000", "Custom"] },
      { label: "Analytics history", values: ["30 days", "90 days", "365 days", "Custom"] },
    ],
  },
  {
    group: "Selling",
    rows: [
      { label: "Online storefront", values: [true, true, true, true] },
      { label: "WhatsApp checkout", values: [true, true, true, true] },
      { label: "Multi-location stock", values: [true, true, true, true] },
      { label: "Quotes and custom orders", values: [true, true, true, true] },
      { label: "Bulk actions", values: [true, true, true, true] },
      { label: "Customer groups", values: [true, true, true, true] },
    ],
  },
  {
    group: "Payments",
    rows: [
      { label: "Paystack", values: [true, true, true, true] },
      { label: "Bank transfer", values: [true, true, true, true] },
      { label: "Invoicing", values: [true, true, true, true] },
      { label: "Tax settings", values: [true, true, true, true] },
    ],
  },
  {
    group: "Marketing and reports",
    rows: [
      { label: "Email and SMS campaigns", values: [true, true, true, true] },
      { label: "Discounts and loyalty", values: [true, true, true, true] },
      { label: "Abandoned cart recovery", values: [true, true, true, true] },
      { label: "Blog and product reviews", values: [true, true, true, true] },
      { label: "Analytics dashboard and revenue reports", values: [true, true, true, true] },
      { label: "Google Analytics and Meta Pixel", values: [true, true, true, true] },
    ],
  },
  {
    group: "Enterprise",
    rows: [
      { label: "Your own domain", values: [false, false, false, true] },
      { label: "Partner API access", values: [false, false, false, true] },
      { label: "Zoho integration", values: [false, false, false, true] },
      { label: "Priority support", values: [false, false, true, true] },
    ],
  },
];

export const pricingFaqs = [
  {
    q: "Which plan should I pick?",
    a: "Plans differ mainly in how much room you get: stores, team members, monthly credits and how long we keep your analytics. Start with Starter and move up as you grow. You can change plans any time.",
  },
  {
    q: "Is WhatsApp checkout available on every plan?",
    a: "Yes. WhatsApp checkout is included on every plan. It's not an add-on.",
  },
  {
    q: "What are credits for?",
    a: "Credits pay for email and SMS campaigns. Each plan comes with a monthly allowance, and you can top up whenever you need more.",
  },
  {
    q: "Do you charge transaction fees on top of the plan price?",
    a: "Paystack's standard processing fees apply as usual, but we don't add our own markup. Stripe and Fincra support is coming soon.",
  },
  {
    q: "Can I switch between monthly and yearly billing?",
    a: "Yes, any time from your billing settings. Switching to yearly applies the discount from your next billing cycle.",
  },
  {
    q: "What happens to my store if I downgrade?",
    a: "Your storefront and orders stay exactly as they are. Only what's tied to the higher plan becomes unavailable until you upgrade again.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fee on self-serve plans. Enterprise includes a guided, free migration if you're moving from another platform.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes, there's no lock-in contract. Cancel from your billing settings and you won't be billed again.",
  },
  {
    q: "Can I sell from more than one location?",
    a: "Yes, on every plan. Track stock across a shop and a warehouse, and move it between them. Higher plans also let you run more stores.",
  },
  {
    q: "Can I use my own domain?",
    a: "Custom domains are part of Enterprise, where we set the domain up for you during onboarding.",
  },
  {
    q: "Can developers build on top of SalesCenta?",
    a: "Yes. The Partner API is available on Enterprise, so you can connect your own tools to your products, orders, customers and stock.",
  },
];
