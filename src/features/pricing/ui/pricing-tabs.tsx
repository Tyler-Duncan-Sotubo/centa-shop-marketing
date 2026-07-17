"use client";
import { useState } from "react";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";

interface Tier {
  name: string;
  price: number | "custom";
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}

/**
 * Real self-serve plan pricing (NGN, monthly), pulled from
 * admin/src/features/subscription/config/plan-features.ts and
 * plan-comparison-table.tsx. Yearly applies the same "Save up to 17%"
 * the admin plan-upgrade page shows, applied here as a flat ~17% discount
 * for display purposes.
 */
const monthlyTiers: Tier[] = [
  {
    name: "Starter",
    price: 8000,
    features: [
      "1 store",
      "5 team members",
      "500 credits/month",
      "Email campaigns",
      "Invoicing",
      "Email support",
    ],
    cta: "Buy Now",
    href: "https://app.salescenta.com/signup",
  },
  {
    name: "Growth",
    price: 18000,
    features: [
      "3 stores",
      "10 team members",
      "2,000 credits/month",
      "Email + SMS campaigns",
      "Analytics dashboard",
      "Multi-location",
      "Google Analytics & Meta Pixel",
    ],
    cta: "Try it Now",
    href: "https://app.salescenta.com/signup",
    highlight: true,
  },
  {
    name: "Pro",
    price: 35000,
    features: [
      "Unlimited stores",
      "Unlimited team members",
      "5,000 credits/month",
      "Everything in Growth",
      "Custom domain",
      "Zoho integration",
      "API access & webhooks",
      "Priority support",
    ],
    cta: "Started Now",
    href: "https://app.salescenta.com/signup",
  },
  {
    name: "Enterprise",
    price: "custom",
    features: [
      "Unlimited stores",
      "Unlimited team members",
      "Custom credits/month",
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Talk to sales",
    href: "https://wa.me/000000000000",
  },
];

const yearlyTiers: Tier[] = monthlyTiers.map((tier) =>
  typeof tier.price === "number" && tier.price > 0
    ? { ...tier, price: Math.round((tier.price * 12 * 0.83) / 12) }
    : tier
);

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG").format(price);
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`group p-6 py-8 duration-500 hover:scale-105 relative overflow-hidden shadow-sm dark:shadow-gray-800 rounded-md h-fit ${
        tier.highlight
          ? "border-b-[3px] border-primary bg-white dark:bg-slate-900"
          : "border-b-[3px] border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-900"
      }`}
    >
      {tier.highlight && (
        <span className="absolute -inset-e-11 -top-2.5 rotate-45 w-32 h-16 pt-4 px-2 pb-0 flex items-center justify-center text-white bg-primary font-semibold text-lg">
          Best
        </span>
      )}
      <h6 className="font-bold uppercase mb-5 text-primary">{tier.name}</h6>

      {tier.price === "custom" ? (
        <div className="flex mb-5">
          <span className="price text-3xl font-semibold mb-0">Custom</span>
        </div>
      ) : (
        <div className="flex items-end mb-5">
          <span className="text-xl font-semibold">₦</span>
          <span className="price text-4xl font-semibold mb-0">
            {formatPrice(tier.price)}
          </span>
          <span className="text-xl font-semibold self-end mb-1">/mo</span>
        </div>
      )}

      <ul className="list-none text-slate-400">
        {tier.features.map((feature) => (
          <li key={feature} className="mb-1 flex items-center">
            <BsCheckCircle className="text-primary text-base me-2 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={tier.href}
        target={tier.href.startsWith("http") ? "_blank" : undefined}
        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-md mt-5"
      >
        {tier.cta}
      </Link>
    </div>
  );
}

export default function PricingTabs() {
  const [isYearly, setIsYearly] = useState(false);
  const tiers = isYearly ? yearlyTiers : monthlyTiers;

  return (
    <div className="grid grid-cols-1">
      <p className="text-slate-400 text-center mb-4">
        14-day free trial on every self-serve plan — no card required.
      </p>
      <ul className="inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full">
        <li className="inline-block">
          <button
            onClick={() => setIsYearly(false)}
            className={`${
              !isYearly ? "text-white bg-primary hover:text-white" : ""
            } px-4 py-1 text-sm font-semibold rounded-full w-full hover:text-primary transition-all duration-500 ease-in-out`}
          >
            Monthly
          </button>
        </li>
        <li className="inline-block">
          <button
            onClick={() => setIsYearly(true)}
            className={`${
              isYearly ? "text-white bg-primary hover:text-white" : ""
            } px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out`}
          >
            Yearly{" "}
            <span className="bg-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full h-5 ms-1">
              Save up to 17%
            </span>
          </button>
        </li>
      </ul>

      <div className="mt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-7.5">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
}
