/**
 * Sample data for the product mockups. "Ivory Lane" is a made-up store, so
 * the mockups never show a real merchant's name. Figures are illustrative.
 */

export const SAMPLE_STORE = "Ivory Lane";

export type Channel = "whatsapp" | "website" | "pos" | "invoice" | "app";

export const channels: { id: Channel; label: string; detail: string }[] = [
  { id: "website", label: "Your website", detail: "A storefront you edit yourself" },
  { id: "whatsapp", label: "WhatsApp", detail: "Checkout inside the chat" },
  { id: "pos", label: "Shop floor", detail: "POS on an iPad" },
  { id: "invoice", label: "Wholesale", detail: "Quotes that become invoices" },
];

export const orders: {
  ref: string;
  customer: string;
  channel: Channel;
  channelLabel: string;
  amount: string;
  status: string;
  tone: "paid" | "waiting" | "part";
}[] = [
  { ref: "ORD-000214", customer: "Adaeze Okafor", channel: "whatsapp", channelLabel: "WhatsApp", amount: "₦48,500", status: "Paid · transfer", tone: "paid" },
  { ref: "ORD-000213", customer: "Walk-in", channel: "pos", channelLabel: "Lekki store", amount: "₦12,000", status: "Paid · card", tone: "paid" },
  { ref: "ORD-000212", customer: "Tunde Bakare", channel: "website", channelLabel: "Website", amount: "₦86,200", status: "Awaiting transfer", tone: "waiting" },
  { ref: "INV-000042", customer: "Mainland Wholesale Ltd", channel: "invoice", channelLabel: "Invoice", amount: "₦340,000", status: "Part-paid", tone: "part" },
  { ref: "ORD-000211", customer: "Bisi Adeyemi", channel: "website", channelLabel: "Website", amount: "₦23,750", status: "Paid · Paystack", tone: "paid" },
];

export type ChatMessage = { role: "user" | "zuri"; text: string };

export const zuriExchange: ChatMessage[] = [
  { role: "user", text: "How much did the Lekki store sell last week?" },
  {
    role: "zuri",
    text: "₦1.84M across 63 orders, up 12% on the week before. The King duvet set was your best seller, and you have 6 left in Lekki.",
  },
];
