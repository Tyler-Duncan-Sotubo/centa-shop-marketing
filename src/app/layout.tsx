import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/shared/assets/css/tailwind.css";
import Navbar from "@/shared/ui/navbar";
import Footer from "@/shared/ui/footer";
import CookieModal from "@/shared/ui/cookie-modal";
import ScrollToTop from "@/shared/ui/scroll-to-top";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SalesCenta — Sell the way your customers already buy",
  description:
    "A commerce platform built for how Nigerian merchants sell — WhatsApp checkout, bank transfer, and NGN pricing, all built in from day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${jakarta.variable} font-jakarta text-base text-black dark:text-white dark:bg-slate-900`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        {/* <CookieModal /> */}
      </body>
    </html>
  );
}
