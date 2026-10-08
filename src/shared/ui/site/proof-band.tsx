import { Glow } from "./glow";
import { label, wrap } from "./styles";

/**
 * Merchant totals, from the "Merchant proof" post in the brand carousel.
 * Update here when the figures move.
 */
export const proof = [
  { value: "₦1.8B+", label: "invoiced by merchants on SalesCenta in 4 months" },
  { value: "₦200M+", label: "in orders fulfilled" },
];

export function ProofBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Glow at="bottom" />
      <div className={`${wrap} relative py-24 md:py-32`}>
        <p className={`${label} text-sky`}>Merchants on SalesCenta have</p>
        <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/10">
          {proof.map((p, i) => (
            <div key={p.value} className={i === 1 ? "md:pl-16" : ""}>
              <div className="text-[64px] leading-none font-bold tracking-[-0.05em] md:text-[104px]">
                {p.value}
              </div>
              <div className="mt-4 max-w-[26ch] text-[17px] text-white/60">
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
