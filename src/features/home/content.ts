/*
 * Home page copy. The headline, tagline, problems and steps are the brand's
 * own lines from the SalesCenta social carousel.
 */

export const hero = {
  eyebrow: "Commerce. Finally connected.",
  title: "Sell online, in store and on WhatsApp.",
  titleTail: "All from one place.",
  sub: "Your own store link, a POS for the counter, invoices for wholesale buyers and one stock count across every location. Built for how Nigeria pays.",
};

export const problems = [
  { title: "Orders scattered across DMs", fix: "Every order lands in one queue, wherever it started." },
  { title: "Confirming transfers from screenshots", fix: "Payments are recorded against the order they belong to." },
  { title: "Guessing what's left in stock", fix: "One count per location, updated with every sale." },
];

export const chapters = [
  {
    key: "online",
    href: "/features/online-store",
    index: "01",
    label: "Sell online",
    title: "Your own online store, live in minutes.",
    body: "Edit your homepage, collections and SEO without a developer. Customers pay by card or transfer on the site, or send the order straight to your WhatsApp with one tap.",
    points: ["No developer needed", "WhatsApp checkout", "Discounts and bundles", "SEO built in"],
  },
  {
    key: "store",
    href: "/features/pos",
    index: "02",
    label: "Sell in store",
    title: "Sell faster at the counter.",
    body: "Tap products into the cart and check out in seconds. Take cash, card machine or transfer and the change is worked out for you. If the internet drops, sales are saved on the iPad and sync when you're back online.",
    points: ["Cash, card machine or transfer", "Works offline", "Park a sale, serve the next customer", "Close the day in one look"],
  },
  {
    key: "paid",
    href: "/features/invoices",
    index: "03",
    label: "Get paid",
    title: "Quotes, invoices and transfers, tracked to the naira.",
    body: "Send a wholesale buyer a quote, turn it into a branded invoice, and record part-payments as they come in. Every Paystack payment and bank transfer lands against the right order.",
    points: ["Quotes to invoices", "Part-payments", "Paystack and bank transfer", "Payments received"],
  },
  {
    key: "run",
    href: "/features/inventory",
    index: "04",
    label: "Run the business",
    title: "One stock count across every shop and warehouse.",
    body: "See what's on the shelf at each location, move stock between them with a paper trail, and give staff the access their role needs and nothing more.",
    points: ["Stock by location", "Transfers and dispatch", "Staff roles", "Sales analytics"],
  },
] as const;

export type Chapter = (typeof chapters)[number];

export const steps = [
  { title: "Sign up free", body: "Create your account in a couple of minutes." },
  { title: "Add products", body: "Photos, prices and sizes. Or import from Shopify." },
  { title: "Share your link", body: "Post it on Instagram and WhatsApp and start taking orders." },
];

export const faqs = [
  {
    q: "Do I need a designer to set up my store?",
    a: "No. Your store comes with a storefront you can edit yourself. On Enterprise we build it for you.",
  },
  {
    q: "How does WhatsApp checkout work?",
    a: "Customers add items on your site and send the order to your WhatsApp with one tap. The order lands in your dashboard at the same time, so nothing gets lost in the chat.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes, on Enterprise. Connect a domain you already own, or we set one up for you during onboarding.",
  },
  {
    q: "What happens when my trial ends?",
    a: "Pick a plan to keep selling. Your products, orders and settings stay exactly where you left them.",
  },
  {
    q: "Can you move my store from Shopify?",
    a: "Yes. Import your products from a Shopify CSV, or go Enterprise and we migrate the whole store for you.",
  },
];
