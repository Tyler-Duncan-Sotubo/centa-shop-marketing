import { SIGNUP_URL, TRIAL_NOTE } from "@/shared/config/site";
import { ButtonLink } from "./button-link";
import { Glow } from "./glow";
import { wrap } from "./styles";

/** The navy sign-off band at the foot of inner pages. */
export function ClosingCta({
  title = "Start selling in minutes.",
  sub = "Add your products, connect Paystack and share your store link on WhatsApp.",
  primary = { label: "Start your free trial", href: SIGNUP_URL },
  secondary = { label: "Talk to us", href: "/contact-one" },
  note = TRIAL_NOTE,
}: {
  title?: React.ReactNode;
  sub?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  note?: string | null;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Glow at="bottom" />
      <div className={`${wrap} relative py-24 text-center md:py-32`}>
        <h2 className="mx-auto max-w-[16ch] text-balance text-[38px] leading-[1.04] font-bold tracking-[-0.045em] md:text-[60px]">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-[48ch] text-[17px] leading-[1.6] text-white/60 md:text-[19px]">
          {sub}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={primary.href} variant="light" arrow>
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="ghost">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
        {note && <p className="mt-5 text-[13px] text-white/45">{note}</p>}
      </div>
    </section>
  );
}
