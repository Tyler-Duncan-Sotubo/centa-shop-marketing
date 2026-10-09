/**
 * Plans, as the product sells them now. Self-serve tiers differ by quota
 * (stores, team, credits, data retention); almost every feature ships on
 * every tier, and a handful of setup-heavy items are Enterprise-only.
 *
 * Features: admin/src/features/subscription/config/plan-features.ts (the
 * comparison table) and backend/src/domains/subscriptions/
 * plan-features.map.ts (what's actually gated). Prices: the
 * subscription_plans table, copied by hand because the plans endpoint
 * needs a login. Keep them in step with the admin's billing page; last
 * copied 2026-10-08. Free and Enterprise aren't self-serve (the admin's
 * plan picker hides both), so Enterprise shows as custom.
 */

export type BillingCycle = "monthly" | "quarterly" | "semiannual" | "annual";

/** Mirrors admin/src/features/subscription/config/billing-cycle.ts. */
export const cycles: {
  id: BillingCycle;
  label: string;
  /** For the phone-width switch. */
  short: string;
  months: number;
  per: string;
}[] = [
  { id: "monthly", label: "Monthly", short: "Monthly", months: 1, per: "month" },
  { id: "quarterly", label: "Quarterly", short: "Quarterly", months: 3, per: "quarter" },
  { id: "semiannual", label: "Every 6 months", short: "6 months", months: 6, per: "6 months" },
  { id: "annual", label: "Yearly", short: "Yearly", months: 12, per: "year" },
];

export interface Tier {
  name: string;
  /** NGN per billing period, or "custom". */
  prices: Record<BillingCycle, number> | "custom";
  blurb: string;
  features: string[];
  highlight?: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Starter",
    prices: { monthly: 7140, quarterly: 25000, semiannual: 48000, annual: 86000 },
    blurb: "Everything you need to start selling.",
    features: ["1 store", "5 team members", "200 credits a month", "30 days of analytics history", "Online store, quotes and invoicing", "Email support"],
  },
  {
    name: "Growth",
    prices: { monthly: 19000, quarterly: 57500, semiannual: 115000, annual: 191500 },
    blurb: "More room for a second store and a bigger team.",
    features: ["2 stores", "10 team members", "800 credits a month", "90 days of analytics history", "Everything in Starter"],
    highlight: true,
  },
  {
    name: "Pro",
    prices: { monthly: 38500, quarterly: 115000, semiannual: 191500, annual: 345000 },
    blurb: "For established brands running several stores.",
    features: ["5 stores", "25 team members", "2,000 credits a month", "A year of analytics history", "Everything in Growth", "Priority support"],
  },
  {
    name: "Enterprise",
    prices: "custom",
    blurb: "We build your store and move you over.",
    features: ["Everything in Pro, with custom limits", "Your own domain", "Partner API access", "Zoho integration", "Store build and free migration", "Dedicated account manager"],
  },
];

/** Per-month rate for a cycle, rounded to the naira. */
export function monthlyRate(tier: Tier, cycle: BillingCycle) {
  if (tier.prices === "custom") return 0;
  const months = cycles.find((c) => c.id === cycle)!.months;
  return Math.round(tier.prices[cycle] / months);
}

/** % saved against paying monthly for the same months; 0 when it saves nothing. */
export function savingsPercent(tier: Tier, cycle: BillingCycle) {
  if (tier.prices === "custom" || cycle === "monthly") return 0;
  const months = cycles.find((c) => c.id === cycle)!.months;
  const monthlyTotal = tier.prices.monthly * months;
  const saved = Math.round(((monthlyTotal - tier.prices[cycle]) / monthlyTotal) * 100);
  return Math.max(0, saved);
}

/** The best saving any plan offers on a cycle, for the toggle's badge. */
export function bestSaving(cycle: BillingCycle) {
  return Math.max(0, ...tiers.map((t) => savingsPercent(t, cycle)));
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
      { label: "Email campaigns", values: [true, true, true, true] },
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
    a: "Credits pay for email campaigns and abandoned cart reminders, one credit per email. Each plan comes with a monthly allowance, and you can top up whenever you need more.",
  },
  {
    q: "Do you charge transaction fees on top of the plan price?",
    a: "On Paystack card and bank payments, SalesCenta takes 1% of each sale and Paystack charges its own fee separately. Bank transfers into your own account, WhatsApp orders and cash have no fee from us.",
  },
  {
    q: "Can I pay quarterly or yearly?",
    a: "Yes. Pay monthly, every 3 months, every 6 months or yearly, and switch from your billing settings. On Growth and Pro, paying yearly works out cheapest per month.",
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
