import type { Metadata } from "next";
import AboutPage from "@/features/about/ui/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built SalesCenta: commerce software for how Nigerian merchants already sell, on WhatsApp, by bank transfer and in naira.",
};

export default function Page() {
  return <AboutPage />;
}
