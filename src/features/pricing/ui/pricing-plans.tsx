"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import {
  bestSaving,
  cycles,
  formatNaira,
  monthlyRate,
  savingsPercent,
  tiers,
  type BillingCycle,
  type Tier,
} from "../plans";

/** Billing-cycle switch and the four plan cards. Sits on the navy hero's edge. */
export function PricingPlans() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Billing period"
        className="grid grid-cols-2 gap-1 rounded-2xl bg-white/10 p-1 text-[14px] font-semibold ring-1 ring-white/10 md:inline-flex md:rounded-full"
      >
        {cycles.map((c) => {
          const save = bestSaving(c.id);
          const on = cycle === c.id;
          return (
            <button
              key={c.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setCycle(c.id)}
              className={cn(
                "h-10 rounded-full px-4 transition-colors md:px-5",
                on ? "bg-white text-navy" : "text-white/70 hover:text-white",
              )}
            >
              <span className="md:hidden">{c.short}</span>
              <span className="hidden md:inline">{c.label}</span>
              {save > 0 && (
                <span className={cn("ml-2 text-[12px]", on ? "text-primary" : "text-sky")}>
                  <span className="hidden md:inline">Save up to </span>
                  <span className="md:hidden">−</span>
                  {save}%
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <PlanCard key={t.name} tier={t} cycle={cycle} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ tier, cycle }: { tier: Tier; cycle: BillingCycle }) {
  const c = cycles.find((x) => x.id === cycle)!;
  const custom = tier.prices === "custom";
  const save = savingsPercent(tier, cycle);

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white p-7 text-left text-ink shadow-[0_30px_70px_-35px_rgba(0,24,49,0.55)]",
        tier.highlight ? "ring-2 ring-primary" : "ring-1 ring-line",
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-bold">{tier.name}</h3>
        {tier.highlight && (
          <span className="text-[12px] font-semibold text-primary">Most popular</span>
        )}
      </div>
      <p className="mt-2 min-h-[44px] text-[14px] leading-[1.55] text-copy">{tier.blurb}</p>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-1.5">
        {tier.prices === "custom" ? (
          <span className="text-[36px] leading-none font-bold tracking-[-0.04em]">Custom</span>
        ) : (
          <>
            <span className="text-[36px] leading-none font-bold tracking-[-0.04em] tabular-nums">
              {formatNaira(tier.prices[cycle])}
            </span>
            <span className="text-[14px] text-copy">/{c.per}</span>
          </>
        )}
      </div>
      <p className="mt-2 min-h-5 text-[13px] text-[#6b7280]">
        {custom
          ? "Priced for your business"
          : cycle === "monthly"
            ? "Billed monthly"
            : `${formatNaira(monthlyRate(tier, cycle))} a month`}
        {save > 0 && <span className="ml-2 font-semibold text-primary">Save {save}%</span>}
      </p>

      <ButtonLink
        href={custom ? "/contact-one" : SIGNUP_URL}
        variant={tier.highlight ? "primary" : "outline"}
        className="mt-6 w-full"
      >
        {custom ? "Talk to us" : "Start free trial"}
      </ButtonLink>

      <ul className="mt-7 space-y-3 border-t border-line pt-6 text-[14px]">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
