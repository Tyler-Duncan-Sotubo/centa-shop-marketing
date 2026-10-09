import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/shared/assets/css/tailwind.css";
import { SiteNav } from "@/shared/ui/site/site-nav";
import { SiteFooter } from "@/shared/ui/site/site-footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salescenta.com"),
  title: {
    default: "SalesCenta — Sell online, in store and on WhatsApp",
    template: "%s · SalesCenta",
  },
  description:
    "A commerce platform built for how Nigerian merchants sell: your own store, WhatsApp checkout, a POS for the counter, invoices and one stock count across every location.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-jakarta text-base">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
