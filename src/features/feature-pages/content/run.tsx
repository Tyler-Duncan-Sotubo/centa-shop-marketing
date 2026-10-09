import {
  ArrowLeftRight,
  BadgePercent,
  Bell,
  Boxes,
  Building2,
  ChartColumn,
  ChartLine,
  Gift,
  KeyRound,
  Layers,
  Mail,
  MapPin,
  Newspaper,
  Package,
  PiggyBank,
  ShoppingCart,
  Sparkles,
  Star,
  Upload,
  Users,
  Video,
  WandSparkles,
} from "lucide-react";
import { StoreBadges } from "@/shared/ui/store-badges";
import { MetricStrip, StockByLocation, ZuriChat } from "@/shared/ui/product/product-ui";
import {
  AbandonedCarts,
  BarcodeLabel,
  CampaignCard,
  ChannelChart,
  CustomerCard,
  DiscountLoyalty,
  ExpenseList,
  StockMovements,
  TeamRoles,
  VariantMatrix,
} from "@/shared/ui/product/operations-mockups";
import { PhoneScreen } from "@/shared/ui/product/kit";
import type { FeatureContent } from "../ui/feature-page";

export const inventory: FeatureContent = {
  slug: "inventory",
  meta: {
    title: "Products and inventory",
    description:
      "Products, variants, bundles and barcodes, with stock tracked by location and updated by every sale online or at the counter.",
  },
  hero: {
    title: "One stock count across every shop and warehouse.",
    sub: "Products, variants, bundles and barcodes, with stock tracked by location and updated by every sale, online or at the counter.",
    visual: <StockByLocation className="mx-auto max-w-[460px]" />,
  },
  spotlights: [
    {
      label: "Products",
      title: "Products in every option they come in.",
      body: "Sizes, colours and any other option, with each variant carrying its own price and stock. Define your colours once and pick them as swatches. Bring your catalogue in from a CSV or Excel file using our template.",
      points: ["Options and variants", "Colour swatches", "Spreadsheet import", "Bulk actions"],
      visual: <VariantMatrix className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Barcodes",
      title: "A barcode on every variant.",
      body: "Every new variant gets its own barcode, ready to print: one label per page on a thermal label printer, or a sheet on a regular printer to cut apart.",
      visual: <BarcodeLabel className="mx-auto max-w-[400px]" />,
    },
    {
      label: "Locations",
      title: "Move stock with a paper trail.",
      body: "Track stock for each shop and warehouse, transfer between them, and see every movement behind a number: sales, returns, transfers and adjustments.",
      points: ["Stock by location", "Transfers", "Movement history", "Adjustments"],
      visual: <StockMovements className="mx-auto max-w-[460px]" />,
    },
  ],
  capabilities: [
    { icon: Package, title: "Bundles", body: "Sell items together at a discount, with customers picking each item's size or colour." },
    { icon: Layers, title: "Collections", body: "Group products for your menus, homepage and the POS." },
    { icon: Upload, title: "Spreadsheet import", body: "Import products, variants and prices from a CSV or Excel file using our template." },
    { icon: Video, title: "Photos and video", body: "A photo gallery and one short video for every product." },
    { icon: WandSparkles, title: "AI descriptions", body: "Draft product descriptions with AI, then make them yours." },
    { icon: Star, title: "Reviews", body: "Reviews from real buyers on your product pages." },
    { icon: ArrowLeftRight, title: "Transfers", body: "Move stock between locations and track it in transit." },
    { icon: MapPin, title: "Locations", body: "Shops and warehouses, each with its own count." },
    { icon: Boxes, title: "Low stock at a glance", body: "See what's running low, or just ask Zuri." },
  ],
  related: ["pos", "orders", "reports"],
};

export const marketing: FeatureContent = {
  slug: "marketing",
  meta: {
    title: "Customers and marketing",
    description:
      "Customer records, discount codes, loyalty points, email campaigns and abandoned cart reminders, in the same place as your orders.",
  },
  hero: {
    title: "Bring customers back, without a plugin.",
    sub: "Customer records, discount codes, loyalty points and email campaigns, all in the same place as your orders.",
    visual: <CampaignCard className="mx-auto max-w-[460px]" />,
  },
  spotlights: [
    {
      label: "Customers",
      title: "Know who's buying.",
      body: "Every order and quote rolls up to a customer record. Group customers, like wholesale accounts or VIPs, and see each one's history, spend and loyalty balance.",
      points: ["Order history", "Customer groups", "Spend and points", "Wholesale accounts"],
      visual: <CustomerCard className="mx-auto max-w-[440px]" />,
    },
    {
      label: "Discounts and loyalty",
      title: "Discounts and loyalty that run themselves.",
      body: "Create discount codes for a sale or a single customer. Turn on loyalty and customers earn points on what they spend, then redeem them on a later order at a rate you set.",
      visual: <DiscountLoyalty className="mx-auto max-w-[400px]" />,
    },
    {
      label: "Campaigns",
      title: "Write once, send to everyone.",
      body: "Email a new arrival, a sale or a holiday notice, built from your own images. Send yourself a test first, then see how many opened it. Campaigns use credits from your plan, and you can top up any time.",
      points: ["Image-led emails", "Test before you send", "Open tracking", "Monthly credits"],
      visual: <CampaignCard className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Abandoned carts",
      title: "Win back the carts that almost sold.",
      body: "Signed-in customers who leave without paying get a reminder email with what they left behind, and you can see every abandoned cart to follow up yourself.",
      visual: <AbandonedCarts className="mx-auto max-w-[440px]" />,
    },
  ],
  capabilities: [
    { icon: Users, title: "Customer groups", body: "Group customers for wholesale, VIPs or anything you like." },
    { icon: BadgePercent, title: "Discount codes", body: "Percentage, fixed amount or free shipping, with usage limits and end dates." },
    { icon: Gift, title: "Loyalty points", body: "Points on spend, redeemed for money off a later order." },
    { icon: Mail, title: "Email campaigns", body: "Emails to your customers and subscribers, built from your own images." },
    { icon: ShoppingCart, title: "Cart reminders", body: "Automatic emails for carts left behind." },
    { icon: Star, title: "Product reviews", body: "Let buyers review what they bought." },
    { icon: Newspaper, title: "Blog", body: "Posts on your own storefront, good for search." },
    { icon: ChartLine, title: "Ad pixels", body: "Google Analytics, Meta Pixel, TikTok Pixel and Pinterest Tag." },
  ],
  related: ["online-store", "reports", "mobile-app"],
};

export const reports: FeatureContent = {
  slug: "reports",
  meta: {
    title: "Reports and team",
    description:
      "Sales by channel, expenses, and staff accounts with the access each role needs.",
  },
  hero: {
    title: "Real numbers, and a team that can help.",
    sub: "See where your sales come from, track what you spend, and give every member of staff the access their role needs.",
    visual: (
      <div className="space-y-4">
        <MetricStrip />
        <ChannelChart />
      </div>
    ),
  },
  spotlights: [
    {
      label: "Analytics",
      title: "See where your sales come from.",
      body: "Gross sales, orders and average order value against the previous period, sales by channel, and how your customers and website are doing.",
      points: ["Sales by channel", "Period comparison", "Customers", "Website visits"],
      visual: <ChannelChart className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Expenses",
      title: "Track what you spend, too.",
      body: "Log expenses by category and supplier, including costs that cover a period, like a year's rent, so you can see what the business really keeps.",
      visual: <ExpenseList className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Team",
      title: "Give staff the access their role needs.",
      body: "Invite your team as an owner, manager, accountant or sales role, or build a custom role, and choose what each one can see and do.",
      points: ["Built-in roles", "Custom roles", "Invite by email", "Remove access any time"],
      visual: <TeamRoles className="mx-auto max-w-[460px]" />,
    },
  ],
  capabilities: [
    { icon: ChartColumn, title: "Analytics dashboard", body: "Sales, customers, fulfilment and website, in one place." },
    { icon: PiggyBank, title: "Expenses", body: "Categories, suppliers and costs spread over a period." },
    { icon: KeyRound, title: "Roles and permissions", body: "Built-in roles or your own, with exactly the access they need." },
    { icon: Building2, title: "More than one store", body: "Run several stores from one account, by plan." },
    { icon: Sparkles, title: "Ask Zuri", body: "Ask how sales went this week and get the number in plain language." },
    { icon: ChartLine, title: "Pixels", body: "Google Analytics, Meta Pixel and TikTok Pixel alongside your own figures." },
  ],
  faqs: [
    { q: "How far back does analytics go?", a: "30 days of history on Starter, 90 on Growth and a year on Pro." },
    { q: "Are there finance reports?", a: "Enterprise adds a reports hub for receivables, tax and payment reconciliation." },
  ],
  related: ["inventory", "marketing", "zuri"],
};

export const mobileApp: FeatureContent = {
  slug: "mobile-app",
  meta: {
    title: "Mobile app",
    description:
      "The SalesCenta app for iPhone and Android: orders, stock, customers, bookings and your website, wherever you are.",
  },
  hero: {
    title: "Your whole shop, in your pocket.",
    sub: "The SalesCenta app for iPhone and Android: orders, stock, customers, bookings and your website, wherever you are.",
    frame: "flush",
    actions: <StoreBadges badgeClassName="h-12" />,
    visual: (
      <div className="grid grid-cols-2 gap-4">
        <PhoneScreen screen="home" alt="The SalesCenta app home screen" />
        <PhoneScreen screen="website" alt="Editing the website in the SalesCenta app" className="mt-10" />
      </div>
    ),
  },
  spotlights: [
    {
      label: "Orders",
      title: "Orders the moment they land.",
      body: "See new orders as they come in, update their status, record payments and keep customers in the loop without sitting at a desk.",
      points: ["Order alerts", "Update statuses", "Record payments", "Quick actions"],
      frame: "flush",
      visual: <PhoneScreen screen="home" alt="The SalesCenta app home screen" className="mx-auto w-[260px]" />,
    },
    {
      label: "Your website",
      title: "Update your website from your phone.",
      body: "Change your logo and brand colour, switch on an announcement, swap the homepage photo, then save a draft or publish.",
      frame: "flush",
      dark: true,
      visual: <PhoneScreen screen="website" alt="Editing the website in the SalesCenta app" className="mx-auto w-[260px]" />,
    },
    {
      label: "Zuri",
      title: "Ask instead of tapping through reports.",
      body: "Zuri lives in the app. Ask how sales went this week or which products are running low, and get the answer in plain language.",
      visual: (
        <div className="mx-auto max-w-[400px] rounded-2xl bg-white p-6 shadow-[0_24px_60px_-36px_rgba(0,24,49,0.35)]">
          <ZuriChat />
        </div>
      ),
    },
  ],
  capabilities: [
    { icon: Bell, title: "Order alerts", body: "Know the moment an order or booking comes in." },
    { icon: Boxes, title: "Stock on the spot", body: "Adjust stock while you're restocking the shelves." },
    { icon: Package, title: "Products", body: "Add, edit and organise your catalogue." },
    { icon: Users, title: "Customers and loyalty", body: "Customer history, loyalty points and abandoned carts." },
    { icon: Mail, title: "Campaigns", body: "Keep promotions and reminders going from your phone." },
    { icon: ChartColumn, title: "Reports", body: "Today's numbers, not just when you're back at a laptop." },
  ],
  related: ["zuri", "orders", "bookings"],
};
