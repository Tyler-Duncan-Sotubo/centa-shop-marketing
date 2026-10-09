import type { Metadata } from "next";
import ShowcasePage from "@/features/showcase/ui/showcase-page";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Real stores selling on SalesCenta, with their own storefronts, WhatsApp checkout and bank transfer.",
};

export default function Page() {
  return <ShowcasePage />;
}
