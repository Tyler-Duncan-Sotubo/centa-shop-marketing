import {
  Bell,
  Coins,
  CreditCard,
  Earth,
  FileText,
  Landmark,
  Link2,
  MapPin,
  Palette,
  PenLine,
  Percent,
  Receipt,
  ShoppingCart,
  Store,
  Users,
  Wallet,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { InvoiceDoc, OrdersPanel } from "@/shared/ui/product/product-ui";
import {
  ChannelPicker,
  PaymentLinkCard,
  PaymentOptions,
  PaymentsReceived,
  QuoteList,
  ReturnCard,
  ShippingOptions,
  WalletCard,
} from "@/shared/ui/product/commerce-mockups";
import { Toast } from "@/shared/ui/product/kit";
import type { FeatureContent } from "../ui/feature-page";

export const payments: FeatureContent = {
  slug: "payments",
  meta: {
    title: "Payments",
    description:
      "Paystack, bank transfer, WhatsApp, payment links and cash at the counter, each recorded against the right order, with payouts in one place.",
  },
  hero: {
    title: "Get paid the way your customers pay.",
    sub: "Cards and transfers through Paystack, bank transfer to your own account, WhatsApp, payment links and cash at the counter, each recorded against the right order.",
    visual: <PaymentOptions className="mx-auto max-w-[420px]" />,
  },
  spotlights: [
    {
      label: "Confirm transfers",
      title: "No more confirming transfers from screenshots.",
      body: "When a customer says they've sent a transfer, it shows as pending on the order. Check your bank, confirm it, and the order is marked paid, with a receipt you can pull up any time.",
      points: ["Pending until you confirm", "Receipts kept", "Matched to the order", "Paystack confirmed for you"],
      visual: <PaymentsReceived className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Payment links",
      title: "Send a link, get paid.",
      body: "Create a one-off checkout link for any amount and send it on WhatsApp or email: a custom order, a deposit, or a customer who just wants to pay without browsing your store.",
      visual: <PaymentLinkCard className="mx-auto max-w-[360px]" />,
    },
    {
      label: "Payouts",
      title: "See where your money is.",
      body: "Your Paystack payouts and your international wallet sit on one Payout page, with each payout's orders listed and the bank account it goes to.",
      visual: <WalletCard className="mx-auto max-w-[440px]" />,
    },
  ],
  capabilities: [
    { icon: CreditCard, title: "Paystack", body: "Cards and bank transfers at checkout, confirmed automatically." },
    { icon: Landmark, title: "Direct bank transfer", body: "Show your own account details and confirm transfers as they land." },
    { icon: SiWhatsapp, title: "WhatsApp checkout", body: "Customers send their order to your chat and pay you as agreed." },
    { icon: Store, title: "Cash and card at the till", body: "Cash, POS machine or transfer on the POS app, with change worked out." },
    { icon: Earth, title: "International cards", body: "Shoppers abroad pay in USD, GBP, EUR or CAD." },
    { icon: Coins, title: "Part-payments", body: "Record deposits and balances against invoices as they arrive." },
    { icon: Receipt, title: "Payments received", body: "Every payment against an invoice or order, with its receipt." },
    { icon: Percent, title: "Tax settings", body: "Set your VAT and other tax rates in one place." },
    { icon: Wallet, title: "Payout page", body: "Local and international payouts in one place." },
  ],
  faqs: [
    { q: "Do you charge transaction fees?", a: "Paystack's standard processing fees apply as usual, but we don't add our own markup on naira payments." },
    { q: "Do I need Paystack?", a: "No. You can take bank transfers to your own account and WhatsApp orders without it, and turn Paystack on whenever you want card payments." },
    { q: "Can customers abroad pay me?", a: "Yes. With sell abroad switched on, shoppers can pay by card in US dollars, pounds, euros or Canadian dollars, and you're paid out in naira." },
  ],
  related: ["sell-abroad", "invoices", "orders"],
};

export const invoices: FeatureContent = {
  slug: "invoices",
  meta: {
    title: "Quotes and invoices",
    description:
      "Take quote requests from your store, send branded quotes and invoices, and record part-payments as they come in.",
  },
  hero: {
    title: "Quotes, invoices and part-payments, tracked to the naira.",
    sub: "Built for wholesale and business buyers: take quote requests from your store, send branded quotes and invoices, and record payments as they arrive.",
    visual: (
      <div className="relative mx-auto max-w-[460px]">
        <Toast className="absolute -top-4 right-4">₦240,000 received by transfer</Toast>
        <InvoiceDoc className="mt-5" />
      </div>
    ),
  },
  spotlights: [
    {
      label: "Quote requests",
      title: "Buyers request a quote from your store.",
      body: "Wholesale customers pick the items they want and send a quote request straight from your storefront. Requests land in Quotes, where you move them from new to converted.",
      points: ["Requests from your store", "New, in progress, converted", "Customer details kept", "Archive old ones"],
      visual: <QuoteList className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Branded documents",
      title: "Invoices a business customer expects.",
      body: "Every order can carry a numbered, dated invoice the customer downloads or receives by email, with your logo and details on quotes and invoices alike.",
      visual: <InvoiceDoc className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Part-payments",
      title: "Record payments as they arrive.",
      body: "Log a deposit today and the balance next week. The invoice shows what's paid and what's still due, and every payment is kept with its receipt.",
      visual: <PaymentsReceived invoice className="mx-auto max-w-[460px]" />,
    },
  ],
  capabilities: [
    { icon: FileText, title: "Numbered invoices", body: "Numbered, dated documents for every order that needs one." },
    { icon: Palette, title: "Your branding", body: "Your logo and details on quotes and invoices." },
    { icon: Coins, title: "Deposits and balances", body: "Record part-payments until the invoice is settled." },
    { icon: Link2, title: "Payment links", body: "Send a link for a deposit or balance, paid through Paystack." },
    { icon: Percent, title: "Tax", body: "VAT and other rates from your tax settings on your documents." },
    { icon: Users, title: "Customer records", body: "Every quote and invoice rolls up to the customer it belongs to." },
  ],
  faqs: [
    { q: "Can I invoice without a website order?", a: "Yes. Create an order by hand for a phone, WhatsApp or walk-in sale and its invoice comes with it." },
    { q: "Does it connect to accounting software?", a: "Zoho Books and Invoices sync is part of Enterprise." },
  ],
  related: ["payments", "orders", "marketing"],
};

export const orders: FeatureContent = {
  slug: "orders",
  meta: {
    title: "Orders and delivery",
    description:
      "Website, WhatsApp, POS and invoice orders in one queue, plus orders you take on Instagram, TikTok, Jumia, Konga, Glovo and Chowdeck.",
  },
  hero: {
    title: "Every order in one queue, wherever it started.",
    sub: "Website, WhatsApp, POS and invoice orders land together, and you can log the ones you take on Instagram, TikTok, Jumia, Konga, Glovo or Chowdeck too.",
    visual: <OrdersPanel rows={5} />,
  },
  spotlights: [
    {
      label: "Every channel",
      title: "Log the orders you take everywhere else.",
      body: "Create an order by hand and tag where it came from: Instagram, Facebook, TikTok, Jumia, Konga, Amazon, Glovo, Chowdeck, WhatsApp or walk-in. Your reports finally show where your sales come from.",
      points: ["Tag the sales channel", "Edit items and prices", "Record payment", "Invoice included"],
      visual: <ChannelPicker className="mx-auto max-w-[480px]" />,
    },
    {
      label: "Delivery",
      title: "Delivery fees, set once.",
      body: "Add the delivery options customers choose from at checkout, with a flat fee or fees by weight, and free delivery over an amount. Add pickup locations for customers who'd rather collect.",
      visual: <ShippingOptions className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Returns",
      title: "Returns, decided item by item.",
      body: "For each returned item, choose whether it goes back into stock and at which location, then refund it or swap it for something else. Stock and sales stay right without a spreadsheet.",
      visual: <ReturnCard className="mx-auto max-w-[440px]" />,
    },
  ],
  capabilities: [
    { icon: Bell, title: "Instant alerts", body: "Know the moment a new order lands, on the web or in the app." },
    { icon: PenLine, title: "Edit an order", body: "Change items, prices and the customer's delivery details." },
    { icon: MapPin, title: "Pickup locations", body: "Let customers collect from a store you choose." },
    { icon: ShoppingCart, title: "Abandoned carts", body: "See what almost sold and send a reminder." },
    { icon: FileText, title: "Invoices", body: "A numbered invoice for any order that needs one." },
    { icon: Store, title: "POS sales", body: "Walk-in sales from the till appear with everything else." },
  ],
  related: ["payments", "inventory", "pos"],
};
