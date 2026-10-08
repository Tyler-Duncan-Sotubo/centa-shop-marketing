import { SIGNUP_URL } from "@/shared/config/site";
import { ButtonLink } from "@/shared/ui/site/button-link";
import { ClosingCta } from "@/shared/ui/site/closing-cta";
import { PageHero } from "@/shared/ui/site/page-hero";
import { stores } from "../stores";
import { StoreCard } from "./store-card";

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Showcase"
        title="Real stores, built on SalesCenta."
        sub="Storefronts already selling with WhatsApp checkout, bank transfer and their own branding. Take a look at what's possible when you launch on SalesCenta."
        actions={
          <ButtonLink href={SIGNUP_URL} variant="light" arrow>
            Start your free trial
          </ButtonLink>
        }
        overlap="md"
      >
        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((s) => (
            <div key={s.name} className="rounded-2xl bg-white p-3 pb-4 shadow-[0_30px_70px_-35px_rgba(0,24,49,0.55)] ring-1 ring-line">
              <StoreCard store={s} inset />
            </div>
          ))}
        </div>
      </PageHero>

      <div className="h-24 md:h-32" />

      <ClosingCta
        title="Your store could be next."
        sub="Set up your storefront, connect Paystack and start taking orders on WhatsApp."
      />
    </>
  );
}
