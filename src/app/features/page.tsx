import type { Metadata } from "next";
import FeaturesHub from "@/features/feature-pages/ui/features-hub";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Online store, POS, bookings, payments, invoices, inventory, marketing, reports and the mobile app: every part of SalesCenta in detail.",
};

export default function Page() {
  return <FeaturesHub />;
}
