import type { Metadata } from "next";
import DeveloperPage from "@/features/developer/ui/developer-page";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "The SalesCenta Partner API: read products, orders, customers and stock with scoped API keys.",
};

export default function Page() {
  return <DeveloperPage />;
}
