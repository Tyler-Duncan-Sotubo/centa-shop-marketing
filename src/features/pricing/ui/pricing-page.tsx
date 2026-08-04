import { FadeInUp } from "@/shared/ui/motion";
import ContactCta from "@/features/home/ui/contact-cta";
import PricingHero from "./pricing-hero";
import PricingHighlights from "./pricing-highlights";
import PricingTabs from "./pricing-tabs";
import FeatureComparison from "./feature-comparison";
import PricingFaq from "./pricing-faq";

export default function PricingPage() {
  return (
    <>
      <PricingHero />

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-0.5 inset-s-0 inset-e-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <PricingHighlights />

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <FadeInUp className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-5xl text-3xl leading-tight font-bold max-w-2xl mx-auto">
              Choose your plan
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Simple, transparent plans that grow with your store — no
              surprise fees, no long-term contract.
            </p>
          </FadeInUp>

          <PricingTabs />
        </div>

        <div className="container relative md:py-24 py-16">
          <FadeInUp className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-5xl text-3xl leading-tight font-bold max-w-2xl mx-auto">
              Every feature, side by side
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              See exactly what&apos;s included on each plan before you
              choose — no guessing, no fine print.
            </p>
          </FadeInUp>

          <FeatureComparison />
        </div>

        <div className="container relative md:py-24 py-16">
          <FadeInUp className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-5xl text-3xl leading-tight font-bold max-w-2xl mx-auto">
              Questions about pricing
            </h3>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Everything you need to know before you get started, straight
              from the plans themselves.
            </p>
          </FadeInUp>

          <PricingFaq />
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
