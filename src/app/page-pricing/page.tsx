import type { Metadata } from "next";
import PricingPage from "@/features/pricing/ui/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Plans in naira for every stage of your business. WhatsApp checkout, bank transfer and cards on every plan, with a 14-day free trial.",
};

export default function Page() {
  return <PricingPage />;
}
