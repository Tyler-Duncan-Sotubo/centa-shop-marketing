import type { Metadata } from "next";
import ContactPage from "@/features/contact/ui/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about pricing, moving your store or anything else? Talk to the SalesCenta team.",
};

export default function Page() {
  return <ContactPage />;
}
