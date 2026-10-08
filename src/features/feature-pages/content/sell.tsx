import {
  BadgePercent,
  CalendarClock,
  CalendarDays,
  ChartLine,
  CirclePause,
  Coins,
  CreditCard,
  Earth,
  FileText,
  Globe,
  Landmark,
  Layers,
  MailCheck,
  MapPin,
  Newspaper,
  Receipt,
  Search,
  Store,
  Truck,
  UserPlus,
  Users,
  Wallet,
  WandSparkles,
} from "lucide-react";
import { BrowserShot, IpadShot, WhatsAppOrder } from "@/shared/ui/product/product-ui";
import {
  CurrencyPrice,
  CurrencySettings,
  ForeignCheckout,
  StorefrontEditor,
  WalletCard,
} from "@/shared/ui/product/commerce-mockups";
import {
  BookingCalendar,
  ServiceMenu,
  VariantMatrix,
} from "@/shared/ui/product/operations-mockups";
import { PhoneScreen, Toast } from "@/shared/ui/product/kit";
import type { FeatureContent } from "../ui/feature-page";

export const onlineStore: FeatureContent = {
  slug: "online-store",
  meta: {
    title: "Online store",
    description:
      "A storefront you edit yourself, with checkout by card, bank transfer or WhatsApp. No developer needed.",
  },
  hero: {
    title: "Your own online store, live in minutes.",
    sub: "A storefront you edit yourself, with checkout by card, bank transfer or WhatsApp. No developer, and no plugins to stitch together.",
    visual: (
      <div className="relative">
        <BrowserShot src="/showcase/demo.png" url="demo.salescenta.com" alt="A SalesCenta storefront" />
        <StorefrontEditor className="relative -mt-16 ml-auto w-[88%] sm:-mt-24 sm:w-[78%]" />
      </div>
    ),
  },
  spotlights: [
    {
      label: "Edit it yourself",
      title: "Change your homepage without a developer.",
      body: "Reorder your homepage sections, build a hero slideshow, write your announcement bar and menus, and set your logo and brand colour. Save a draft, and publish when it's ready.",
      points: ["Sections you can reorder", "Hero slideshow", "Announcement bar and menus", "Logo and brand colour"],
      visual: <StorefrontEditor className="mx-auto max-w-[460px]" />,
    },
    {
      label: "WhatsApp checkout",
      title: "Let customers finish the sale on WhatsApp.",
      body: "Customers tap Order via WhatsApp, give just their name, phone and delivery method, and land in your chat with the order already written out. The items are held for 48 hours while you agree payment, then released if the order isn't confirmed.",
      points: ["Order written out for them", "Stock held for 48 hours", "No email or card form", "Record payment when it lands"],
      visual: (
        <div className="relative mx-auto max-w-[340px]">
          <Toast className="absolute -top-4 right-0">Items held for 48 hours</Toast>
          <WhatsAppOrder className="mt-6" />
        </div>
      ),
    },
    {
      label: "Product pages",
      title: "Product pages that do the selling.",
      body: "Photos and a video for every product, colour swatches and sizes from one set of options, reviews from real buyers, and descriptions you can draft with AI.",
      points: ["Photo and video gallery", "Colour swatches and sizes", "Product reviews", "AI descriptions"],
      visual: <VariantMatrix className="mx-auto max-w-[460px]" />,
    },
  ],
  capabilities: [
    { icon: CreditCard, title: "Card and transfer checkout", body: "Paystack takes cards and transfers, or customers pay straight into your bank account." },
    { icon: Truck, title: "Delivery and pickup", body: "Delivery fees by area or weight, free delivery over an amount, and pickup points." },
    { icon: BadgePercent, title: "Discount codes", body: "Codes customers enter at checkout, for a sale or a single customer." },
    { icon: Layers, title: "Collections", body: "Group products into collections for your menus and homepage." },
    { icon: Newspaper, title: "A blog", body: "Post launches and stories on your own site, good for search." },
    { icon: Earth, title: "Prices in visitors' currencies", body: "Shoppers abroad can see and pay in USD, GBP, EUR or CAD." },
    { icon: ChartLine, title: "Ad pixels and analytics", body: "Google Analytics, Meta Pixel and TikTok Pixel, set up from your settings." },
    { icon: Globe, title: "Your own domain", body: "On Enterprise we connect a domain you own, or set one up for you." },
    { icon: WandSparkles, title: "AI content tools", body: "Draft product descriptions with AI, then edit them in your own words." },
  ],
  faqs: [
    { q: "Do I need a designer to set up my store?", a: "No. Your store comes with a storefront you can edit yourself. On Enterprise we build it for you." },
    { q: "Can customers pay online?", a: "Yes. Turn on Paystack for cards and transfers, show your bank details for direct transfer, or offer WhatsApp checkout. You can use all three." },
    { q: "Can I use my own domain?", a: "Custom domains are part of Enterprise, where we connect a domain you own or set one up for you during onboarding." },
  ],
  related: ["payments", "orders", "marketing"],
};

export const pos: FeatureContent = {
  slug: "pos",
  meta: {
    title: "Point of sale",
    description:
      "The SalesCenta POS app for iPad: tap products into the cart, take cash, card machine or transfer, and keep selling offline.",
  },
  hero: {
    title: "Sell faster at the counter.",
    sub: "The SalesCenta POS app runs on iPad. Tap products into the cart, take cash, card machine or transfer, and every sale lands in the same orders and stock as your website.",
    frame: "flush",
    visual: <IpadShot screen="sell" />,
  },
  spotlights: [
    {
      label: "Checkout",
      title: "Cash, card machine or transfer.",
      body: "Pick how the customer is paying and the change is worked out for you. Your bank details show up for transfers, and you can add a note or a customer to any sale.",
      points: ["Change worked out", "Bank details for transfers", "Discounts and VAT", "Add a customer"],
      frame: "flush",
      dark: true,
      visual: <IpadShot screen="checkout" />,
    },
    {
      label: "Offline",
      title: "Keeps selling when the internet drops.",
      body: "Sales are saved on the iPad and sync when you're back online, so a bad connection never stops the queue.",
      frame: "flush",
      visual: <IpadShot screen="offline" />,
    },
    {
      label: "End of day",
      title: "Close the day in one look.",
      body: "Today's total split by cash, POS machine and transfer, with completed, pending and cancelled sales, and every order searchable by number, customer or address.",
      frame: "flush",
      dark: true,
      visual: <IpadShot screen="close-day" />,
    },
  ],
  capabilities: [
    { icon: CirclePause, title: "Park a sale", body: "Hold a cart, serve the next customer, and pick it up again later." },
    { icon: MapPin, title: "Every store and location", body: "Switch store or location from the till; stock comes off the right shelf." },
    { icon: MailCheck, title: "Email receipts", body: "Send the customer a receipt by email at checkout." },
    { icon: Search, title: "Find any product", body: "Search the catalogue or browse by collection, with prices and stock on every tile." },
    { icon: UserPlus, title: "Customers at the till", body: "Attach a customer to a sale so it shows in their history." },
    { icon: Layers, title: "One stock count", body: "Walk-in sales draw from the same stock as your website and WhatsApp orders." },
  ],
  faqs: [
    { q: "Which devices does the POS app run on?", a: "The SalesCenta POS app runs on iPad, in landscape." },
    { q: "Does it work without internet?", a: "Yes. Sales are saved on the iPad while you're offline and sync once the connection is back." },
    { q: "Can I take card payments?", a: "Take card payments on your own POS machine and record them as card at checkout, alongside cash and transfer." },
  ],
  related: ["inventory", "orders", "payments"],
};

export const bookings: FeatureContent = {
  slug: "bookings",
  meta: {
    title: "Bookings",
    description:
      "Services, staff calendars and appointments for salons, studios, tutors, clinics and event spaces, built into SalesCenta.",
  },
  hero: {
    title: "Sell your time, not just your stock.",
    sub: "Salons, studios, tutors, clinics and event spaces: set up your services and staff, and let customers book a slot from your store.",
    visual: <BookingCalendar />,
  },
  spotlights: [
    {
      label: "Service menu",
      title: "Build your service menu.",
      body: "Price, duration and category for every service, plus add-ons customers can tack on. Choose which services can be booked straight away and which come through as an enquiry first.",
      points: ["Prices and durations", "Categories", "Add-ons", "Book now or enquire"],
      visual: <ServiceMenu className="mx-auto max-w-[460px]" />,
    },
    {
      label: "Staff calendars",
      title: "Every staff member gets a calendar.",
      body: "Assign each person the services they deliver, set their weekly hours and block off days they're out. If two customers go for the same slot with the same person, only the first one gets it.",
      points: ["Weekly working hours", "Days off", "No double bookings", "Walk-ins added by hand"],
      visual: <BookingCalendar className="mx-auto max-w-[480px]" />,
    },
    {
      label: "From booking to WhatsApp",
      title: "Bookings land in your chat.",
      body: "A customer picks a service, a staff member and a time, and goes straight to your WhatsApp to sort out payment. You're alerted the moment a booking comes in, and a recorded deposit becomes a proper order and payment.",
      frame: "flush",
      visual: (
        <PhoneScreen
          screen="bookings"
          alt="The booking schedule in the SalesCenta app"
          className="mx-auto w-[260px]"
        />
      ),
    },
  ],
  capabilities: [
    { icon: CalendarDays, title: "Calendar view", body: "See who's free and when across your whole team." },
    { icon: Store, title: "Per store", body: "Each store gets its own services, staff and schedule." },
    { icon: CalendarClock, title: "Walk-ins", body: "Add an appointment yourself from the dashboard or the app." },
    { icon: Coins, title: "Deposits", body: "Record a deposit when it's paid; it becomes an order and a payment." },
    { icon: MailCheck, title: "Verified customers", body: "Customers confirm their email when they book, so details are real." },
    { icon: Users, title: "Staff and add-ons", body: "Match services to the people who deliver them, with optional extras." },
  ],
  faqs: [
    { q: "Do customers pay when they book?", a: "Not online yet. Customers sort out payment with you on WhatsApp, and you record the deposit or payment when it lands." },
    { q: "Can I run more than one location?", a: "Yes. Bookings are set up per store, so each location can have its own services, staff and schedule." },
    { q: "Which plan do I need?", a: "Bookings is included from the Starter plan up." },
  ],
  related: ["online-store", "payments", "mobile-app"],
};

export const sellAbroad: FeatureContent = {
  slug: "sell-abroad",
  meta: {
    title: "Sell abroad",
    description:
      "Let shoppers abroad see your prices and pay by card in US dollars, pounds, euros or Canadian dollars. You keep pricing in naira.",
  },
  hero: {
    title: "Sell to customers abroad. Get paid in naira.",
    sub: "Shoppers abroad can see your prices and pay by card in US dollars, pounds, euros or Canadian dollars. You keep pricing in naira, and your share is paid out to your bank.",
    visual: <CurrencyPrice className="mx-auto max-w-[400px]" />,
  },
  spotlights: [
    {
      label: "Their currency",
      title: "Prices in their currency, ending in .99.",
      body: "Turn on visitors' currencies in your store settings and pick USD, GBP, EUR or CAD. Your naira prices are converted with a small margin to cover exchange costs, then rounded up to a clean .99 price.",
      points: ["US dollars", "British pounds", "Euros", "Canadian dollars"],
      visual: <CurrencySettings className="mx-auto max-w-[440px]" />,
    },
    {
      label: "Card checkout",
      title: "They pay by card. SalesCenta handles the rest.",
      body: "Overseas shoppers check out by card in their own currency, and SalesCenta sells on your behalf. You don't need a foreign bank account or a payment provider of your own abroad.",
      visual: <ForeignCheckout className="mx-auto max-w-[400px]" />,
    },
    {
      label: "Your wallet",
      title: "Your share lands in your wallet.",
      body: "Each order shows its naira amount and what the shopper paid. Your share is held for 14 days after the order is fulfilled, then paid out to the bank account you already use.",
      visual: <WalletCard className="mx-auto max-w-[440px]" />,
    },
  ],
  capabilities: [
    { icon: Earth, title: "Four currencies", body: "USD, GBP, EUR and CAD, chosen per store." },
    { icon: Coins, title: "Naira prices stay", body: "You set and earn on naira; conversion happens at checkout." },
    { icon: Receipt, title: "Clear orders", body: "Orders are recorded in naira, with the shopper's currency and amount alongside." },
    { icon: Wallet, title: "One payout page", body: "Local Paystack payouts and your international wallet, side by side." },
    { icon: Landmark, title: "Paid to your bank", body: "Payouts go to the bank account you already verified." },
    { icon: FileText, title: "Opt in per store", body: "Only the stores you choose show other currencies." },
  ],
  faqs: [
    { q: "Which currencies can shoppers pay in?", a: "US dollars, British pounds, euros and Canadian dollars. Nigerian shoppers keep paying in naira through Paystack." },
    { q: "How are prices converted?", a: "From your naira price, with a small margin to cover exchange costs, then rounded up to a price ending in .99." },
    { q: "When do I get paid?", a: "Your share of each order is held for 14 days after it's fulfilled, then paid out to your bank account." },
  ],
  related: ["payments", "online-store", "orders"],
};
