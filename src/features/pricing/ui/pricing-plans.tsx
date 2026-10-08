"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { formatNaira, tiers, yearlyMonthly, type Tier } from "../plans";

/** Billing toggle and the four plan cards. Sits on the navy hero's edge. */
export function PricingPlans() {
  const [yearly, setYearly] = useState(false);

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Billing period"
        className="inline-flex rounded-full bg-white/10 p-1 text-[14px] font-semibold ring-1 ring-white/10"
      >
        {[
          { value: false, label: "Monthly" },
          { value: true, label: "Yearly" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            role="radio"
            aria-checked={yearly === o.value}
            onClick={() => setYearly(o.value)}
            className={cn(
              "h-10 rounded-full px-5 transition-colors",
              yearly === o.value ? "bg-white text-navy" : "text-white/70 hover:text-white",
            )}
          >
            {o.label}
            {o.value && (
              <span className={cn("ml-2 text-[12px]", yearly ? "text-primary" : "text-sky")}>
                Save up to 17%
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <PlanCard key={t.name} tier={t} yearly={yearly} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ tier, yearly }: { tier: Tier; yearly: boolean }) {
  const custom = tier.price === "custom";
  const price = custom ? null : yearly ? yearlyMonthly(tier.price as number) : (tier.price as number);

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

      <div className="mt-6 flex items-baseline gap-1.5">
        {custom ? (
          <span className="text-[36px] leading-none font-bold tracking-[-0.04em]">Custom</span>
        ) : (
          <>
            <span className="text-[36px] leading-none font-bold tracking-[-0.04em] tabular-nums">
              {formatNaira(price!)}
            </span>
            <span className="text-[14px] text-copy">/month</span>
          </>
        )}
      </div>
      <p className="mt-2 h-5 text-[13px] text-[#6b7280]">
        {custom ? "Priced for your business" : yearly ? "Billed yearly" : "Billed monthly"}
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
