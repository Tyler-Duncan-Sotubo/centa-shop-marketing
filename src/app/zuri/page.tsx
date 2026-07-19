import type { Metadata } from "next";
import ZuriPage from "@/features/zuri/ui/zuri-page";

export const metadata: Metadata = {
  title: "Zuri — your AI business assistant | SalesCenta",
  description:
    "Ask Zuri about your sales, stock, and payments in plain language, and get step-by-step help running your store — right inside SalesCenta.",
};

export default function Page() {
  return <ZuriPage />;
}
