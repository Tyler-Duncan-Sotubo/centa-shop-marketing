import {
  HiOutlineCurrencyDollar,
  HiOutlineQuestionMarkCircle,
  HiOutlineTable,
} from "react-icons/hi";
import SectionBadge from "@/shared/ui/section-badge";
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
          <div className="grid grid-cols-1 pb-8 text-center">
            <SectionBadge icon={HiOutlineCurrencyDollar} label="Pricing" />
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Choose Pricing Plan
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Simple plans that grow with your store.
            </p>
          </div>

          <PricingTabs />
        </div>

        <div className="container relative md:py-24 py-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <SectionBadge icon={HiOutlineTable} label="Compare Plans" />
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Every feature, side by side
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              See exactly what's included on each plan before you choose.
            </p>
          </div>

          <FeatureComparison />
        </div>

        <div className="container relative md:py-24 py-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <SectionBadge icon={HiOutlineQuestionMarkCircle} label="FAQ" />
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Everything you need to know before you get started.
            </p>
          </div>

          <PricingFaq />
        </div>

        <ContactCta className="container relative md:mt-24 mt-16" />
      </section>
    </>
  );
}
