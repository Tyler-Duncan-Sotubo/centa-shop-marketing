import {
  Boxes,
  CalendarDays,
  ChartColumn,
  CreditCard,
  Earth,
  FileText,
  Globe,
  Megaphone,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  type LucideIcon,
} from "lucide-react";

/**
 * Every product area, in menu order. Drives the nav's Product menu, the
 * /features hub and each page's "related" links, so a new feature page
 * only needs an entry here and a content file.
 */
export type FeatureSlug =
  | "online-store"
  | "pos"
  | "bookings"
  | "sell-abroad"
  | "payments"
  | "invoices"
  | "orders"
  | "inventory"
  | "marketing"
  | "reports"
  | "mobile-app";

export interface FeatureEntry {
  slug: FeatureSlug | "zuri";
  name: string;
  /** One line for menus and cards. */
  blurb: string;
  icon: LucideIcon;
  href: string;
  isNew?: boolean;
}

export const featureGroups: { title: string; items: FeatureEntry[] }[] = [
  {
    title: "Sell",
    items: [
      { slug: "online-store", name: "Online store", blurb: "Your own website, with WhatsApp checkout", icon: Globe, href: "/features/online-store" },
      { slug: "pos", name: "Point of sale", blurb: "Sell at the counter on iPad, even offline", icon: Store, href: "/features/pos" },
      { slug: "bookings", name: "Bookings", blurb: "Services, staff calendars and appointments", icon: CalendarDays, href: "/features/bookings" },
      { slug: "sell-abroad", name: "Sell abroad", blurb: "Shoppers pay in dollars, pounds or euros", icon: Earth, href: "/features/sell-abroad", isNew: true },
    ],
  },
  {
    title: "Get paid",
    items: [
      { slug: "payments", name: "Payments", blurb: "Paystack, transfers, payment links and payouts", icon: CreditCard, href: "/features/payments" },
      { slug: "invoices", name: "Quotes and invoices", blurb: "Quote requests, invoices and part-payments", icon: FileText, href: "/features/invoices" },
      { slug: "orders", name: "Orders and delivery", blurb: "Every channel in one queue, delivery and returns", icon: ShoppingBag, href: "/features/orders" },
    ],
  },
  {
    title: "Run and grow",
    items: [
      { slug: "inventory", name: "Products and inventory", blurb: "Variants, barcodes and stock by location", icon: Boxes, href: "/features/inventory" },
      { slug: "marketing", name: "Customers and marketing", blurb: "Discounts, loyalty and campaigns", icon: Megaphone, href: "/features/marketing" },
      { slug: "reports", name: "Reports and team", blurb: "Analytics, expenses and staff roles", icon: ChartColumn, href: "/features/reports" },
      { slug: "mobile-app", name: "Mobile app", blurb: "Run the shop from iPhone or Android", icon: Smartphone, href: "/features/mobile-app" },
      { slug: "zuri", name: "Zuri AI", blurb: "Ask your business a question", icon: Sparkles, href: "/zuri" },
    ],
  },
];

export const allFeatures = featureGroups.flatMap((g) => g.items);

export function featureBySlug(slug: string) {
  return allFeatures.find((f) => f.slug === slug);
}
