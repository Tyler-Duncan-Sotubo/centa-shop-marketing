import {
  Banknote,
  Check,
  Copy,
  CreditCard,
  Earth,
  GripVertical,
  Landmark,
  MapPin,
  PackageCheck,
  Repeat,
  Truck,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";
import { SAMPLE_STORE } from "./sample-data";
import {
  faint,
  MiniButton,
  muted,
  Panel,
  Row,
  rule,
  Status,
  Tabs,
  Toggle,
} from "./kit";

/** The storefront customiser: homepage sections in order, then publish. */
export function StorefrontEditor({ className }: { className?: string }) {
  const sections = [
    { name: "Announcement bar", detail: "Free delivery in Lagos over ₦50,000", on: true },
    { name: "Hero slideshow", detail: "3 slides", on: true },
    { name: "New arrivals", detail: "Collection · 8 products", on: true },
    { name: "Shop by category", detail: "6 categories", on: true },
    { name: "Best sellers", detail: "Collection · 8 products", on: false },
  ];
  return (
    <Panel
      title="Homepage"
      meta={<Status tone="green">Live</Status>}
      className={className}
    >
      {sections.map((s) => (
        <Row key={s.name}>
          <GripVertical className={cn("size-4", faint)} />
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{s.name}</div>
            <div className={cn("truncate text-[11px]", faint)}>{s.detail}</div>
          </div>
          <Toggle on={s.on} />
        </Row>
      ))}
      <div className={cn("flex items-center justify-between gap-3 border-t bg-[#f6f9fc] px-5 py-3", rule)}>
        <span className={cn("text-[11px]", muted)}>Last published today, 09:41</span>
        <div className="flex gap-2">
          <MiniButton>Save draft</MiniButton>
          <MiniButton primary>Publish</MiniButton>
        </div>
      </div>
    </Panel>
  );
}

/** Checkout's payment step, as a shopper sees it. */
export function PaymentOptions({ className }: { className?: string }) {
  const options = [
    { icon: CreditCard, name: "Card or bank transfer", detail: "Pay securely with Paystack", selected: true },
    { icon: Landmark, name: "Bank transfer", detail: `Pay into ${SAMPLE_STORE}'s account` },
    { icon: SiWhatsapp, name: "Order via WhatsApp", detail: "Finish the order in a chat with the store" },
  ];
  return (
    <Panel title="Payment" className={className} bodyClassName="p-4 space-y-2.5">
      {options.map((o) => (
        <div
          key={o.name}
          className={cn(
            "flex items-center gap-3 rounded-lg border px-4 py-3",
            o.selected ? "border-[#0050a3] bg-[#f3f7fc]" : "border-[#e3e8ee]",
          )}
        >
          <span
            className={cn(
              "flex size-4 shrink-0 items-center justify-center rounded-full border",
              o.selected ? "border-[#0050a3]" : "border-[#c4cad3]",
            )}
          >
            {o.selected && <span className="size-2 rounded-full bg-[#0050a3]" />}
          </span>
          <o.icon className={cn("size-4 shrink-0", o.name.includes("WhatsApp") ? "text-[#25d366]" : muted)} />
          <div className="min-w-0">
            <div className="text-[13px] font-medium">{o.name}</div>
            <div className={cn("text-[11px]", faint)}>{o.detail}</div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between px-1 pt-2 text-[13px]">
        <span className={muted}>Total</span>
        <span className="font-semibold tabular-nums">₦86,200</span>
      </div>
      <div className="flex h-10 items-center justify-center rounded-lg bg-[#0050a3] text-[13px] font-medium text-white">
        Place order
      </div>
    </Panel>
  );
}

/** Payments received, with a transfer waiting to be confirmed. */
export function PaymentsReceived({
  className,
  invoice = false,
}: {
  className?: string;
  /** Show the part-payments of one invoice instead of a day's mix. */
  invoice?: boolean;
}) {
  const rows = invoice
    ? [
        { ref: "INV-000042 · Deposit", who: "Mainland Wholesale Ltd", how: "Bank transfer", amount: "₦240,000", pending: false },
        { ref: "INV-000042 · Part-payment", who: "Mainland Wholesale Ltd", how: "Bank transfer", amount: "₦200,000", pending: true },
        { ref: "INV-000042 · Balance", who: "Due 22 Oct", how: "Not paid yet", amount: "₦140,000", pending: false, due: true },
      ]
    : [
        { ref: "ORD-000212", who: "Tunde Bakare", how: "Bank transfer", amount: "₦86,200", pending: true },
        { ref: "ORD-000214", who: "Adaeze Okafor", how: "Bank transfer", amount: "₦48,500", pending: false },
        { ref: "ORD-000211", who: "Bisi Adeyemi", how: "Paystack", amount: "₦23,750", pending: false },
        { ref: "ORD-000213", who: "Walk-in", how: "POS machine", amount: "₦12,000", pending: false },
      ];
  return (
    <Panel title="Payments received" meta="This week" className={className}>
      {rows.map((r) => (
        <Row key={r.ref}>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-medium">{r.who}</div>
            <div className={cn("truncate text-[11px]", faint)}>
              {r.ref} · {r.how}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-semibold tabular-nums">{r.amount}</div>
            {"due" in r && r.due ? (
              <Status tone="grey">Outstanding</Status>
            ) : r.pending ? (
              <Status tone="amber">Customer says sent</Status>
            ) : (
              <Status tone="green">Confirmed</Status>
            )}
          </div>
          {r.pending && <MiniButton primary>Confirm</MiniButton>}
        </Row>
      ))}
    </Panel>
  );
}

/** A one-off payment link, ready to share. */
export function PaymentLinkCard({ className }: { className?: string }) {
  return (
    <Panel title="Payment link" meta={<Status tone="amber">Waiting for payment</Status>} className={className} bodyClassName="p-5">
      <div className={cn("text-[12px]", muted)}>Deposit for custom aso-ebi order</div>
      <div className="mt-1 text-[28px] font-semibold tracking-[-0.02em] tabular-nums">₦25,000</div>
      <div className={cn("mt-4 flex items-center gap-2 rounded-lg border px-3 py-2.5 text-[12px]", rule)}>
        <span className="flex-1 truncate text-[#4f5b6b]">…/pay/8kq2zx</span>
        <Copy className={cn("size-3.5", muted)} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <MiniButton>Copy link</MiniButton>
        <MiniButton primary>
          <SiWhatsapp className="mr-1.5 size-3.5" /> Share
        </MiniButton>
      </div>
    </Panel>
  );
}

/** The Payout page: Paystack payouts and the international wallet. */
export function WalletCard({ className }: { className?: string }) {
  const entries = [
    { ref: "ORD-000231", paid: "€84.99", amount: "₦118,800", tone: "amber" as const, status: "Held until 21 Oct" },
    { ref: "ORD-000219", paid: "£61.99", amount: "₦112,860", tone: "green" as const, status: "Ready" },
    { ref: "ORD-000207", paid: "$109.99", amount: "₦156,420", tone: "green" as const, status: "Ready" },
  ];
  return (
    <Panel title="Payout" className={className}>
      <Tabs items={["Local", "International"]} active={1} />
      <div className={cn("grid grid-cols-2 divide-x border-b", rule, "divide-[#ebeef1]")}>
        <div className="px-5 py-4">
          <div className={cn("text-[11px]", muted)}>Ready to pay out</div>
          <div className="mt-1 text-[20px] font-semibold tabular-nums">₦269,280</div>
        </div>
        <div className="px-5 py-4">
          <div className={cn("text-[11px]", muted)}>On hold</div>
          <div className="mt-1 text-[20px] font-semibold tabular-nums">₦118,800</div>
        </div>
      </div>
      {entries.map((e) => (
        <Row key={e.ref}>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{e.ref}</div>
            <div className={cn("text-[11px]", faint)}>Shopper paid {e.paid}</div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-semibold tabular-nums">{e.amount}</div>
            <Status tone={e.tone}>{e.status}</Status>
          </div>
        </Row>
      ))}
      <div className={cn("border-t bg-[#f6f9fc] px-5 py-3 text-[11px]", rule, muted)}>
        Paid out to GTBank ••••4821
      </div>
    </Panel>
  );
}

/** One product's price, as shoppers in each currency see it. */
export function CurrencyPrice({ className }: { className?: string }) {
  const currencies = ["NGN", "USD", "GBP", "EUR", "CAD"];
  return (
    <Panel className={className} bodyClassName="p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[14px] font-semibold">Adire silk kaftan</div>
          <div className={cn("text-[11px]", faint)}>{SAMPLE_STORE}</div>
        </div>
        <Earth className={cn("size-4", muted)} />
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {currencies.map((c) => (
          <span
            key={c}
            className={cn(
              "rounded-md px-2.5 py-1 text-[11px] font-medium",
              c === "EUR" ? "bg-[#0050a3] text-white" : "bg-[#f6f9fc] text-[#4f5b6b]",
            )}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-[32px] font-semibold tracking-[-0.02em] tabular-nums">€84.99</span>
        <span className={cn("text-[12px]", muted)}>₦120,000 in your store</span>
      </div>
      <div className="mt-4 flex h-10 items-center justify-center rounded-lg bg-[#0050a3] text-[13px] font-medium text-white">
        Pay €84.99 by card
      </div>
    </Panel>
  );
}

/** Store settings: the visitors'-currencies switch and the four currencies. */
export function CurrencySettings({ className }: { className?: string }) {
  const currencies = [
    { code: "USD", name: "US dollar", on: true },
    { code: "GBP", name: "British pound", on: true },
    { code: "EUR", name: "Euro", on: true },
    { code: "CAD", name: "Canadian dollar", on: false },
  ];
  return (
    <Panel title="Store settings" meta="Currency" className={className}>
      <div className={cn("flex items-center justify-between gap-4 border-b px-5 py-4", rule)}>
        <div>
          <div className="text-[13px] font-medium">Show prices in visitors&apos; currencies</div>
          <div className={cn("text-[11px]", faint)}>Shoppers abroad see and pay in their currency</div>
        </div>
        <Toggle />
      </div>
      <div className="grid grid-cols-2 gap-2 p-5">
        {currencies.map((c) => (
          <span
            key={c.code}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-3 py-2.5 text-[12px]",
              c.on ? "border-[#0050a3] bg-[#f3f7fc]" : "border-[#e3e8ee]",
            )}
          >
            <span
              className={cn(
                "flex size-4 items-center justify-center rounded border",
                c.on ? "border-[#0050a3] bg-[#0050a3] text-white" : "border-[#c4cad3]",
              )}
            >
              {c.on && <Check className="size-3" />}
            </span>
            <span className="font-medium">{c.code}</span>
            <span className={cn("hidden sm:inline", faint)}>{c.name}</span>
          </span>
        ))}
      </div>
      <div className={cn("border-t bg-[#f6f9fc] px-5 py-3 text-[11px]", rule, muted)}>
        ₦120,000 shows as €84.99, rounded up to .99
      </div>
    </Panel>
  );
}

/** A shopper abroad paying by card in their own currency. */
export function ForeignCheckout({ className }: { className?: string }) {
  return (
    <Panel title="Checkout" meta="Paying in EUR" className={className} bodyClassName="p-5">
      {[
        ["Adire silk kaftan × 1", "€84.99"],
        ["Delivery", "€24.99"],
      ].map(([k, v]) => (
        <div key={k} className="flex justify-between py-1 text-[12px]">
          <span className={muted}>{k}</span>
          <span className="tabular-nums">{v}</span>
        </div>
      ))}
      <div className={cn("mt-2 flex justify-between border-t pt-3 text-[14px] font-semibold", rule)}>
        <span>Total</span>
        <span className="tabular-nums">€109.98</span>
      </div>
      <div className="mt-5 space-y-2">
        <div className={cn("flex items-center gap-2 rounded-lg border px-3 py-2.5 text-[12px]", rule)}>
          <CreditCard className={cn("size-4", muted)} />
          <span className="flex-1 tracking-[0.12em]">•••• •••• •••• 4242</span>
          <span className={faint}>12 / 28</span>
        </div>
      </div>
      <div className="mt-4 flex h-10 items-center justify-center rounded-lg bg-[#0050a3] text-[13px] font-medium text-white">
        Pay €109.98
      </div>
    </Panel>
  );
}

/** Quote requests from the storefront, by stage. */
export function QuoteList({ className }: { className?: string }) {
  const rows = [
    { who: "Mainland Wholesale Ltd", items: "30 items", when: "Today", tone: "blue" as const, status: "New" },
    { who: "Abuja Suites", items: "120 items", when: "Yesterday", tone: "amber" as const, status: "In progress" },
    { who: "Tinuola Events", items: "45 items", when: "3 Oct", tone: "green" as const, status: "Converted" },
  ];
  return (
    <Panel title="Quotes" className={className}>
      <Tabs items={["New", "In progress", "Converted", "Archived"]} />
      {rows.map((r) => (
        <Row key={r.who}>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-medium">{r.who}</div>
            <div className={cn("text-[11px]", faint)}>
              {r.items} · {r.when}
            </div>
          </div>
          <Status tone={r.tone}>{r.status}</Status>
        </Row>
      ))}
    </Panel>
  );
}

/** The sales-channel picker on a manually created order. */
export function ChannelPicker({ className }: { className?: string }) {
  const channels = ["Walk-in", "WhatsApp", "Instagram", "Facebook", "TikTok", "Jumia", "Konga", "Amazon", "Glovo", "Chowdeck"];
  return (
    <Panel title="New order" meta="Step 1 of 3" className={className} bodyClassName="p-5">
      <div className={cn("text-[12px] font-medium", muted)}>Where did this order come from?</div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {channels.map((c) => (
          <span
            key={c}
            className={cn(
              "flex items-center justify-between rounded-lg border px-3 py-2 text-[12px]",
              c === "Instagram" ? "border-[#0050a3] bg-[#f3f7fc] font-medium text-[#0050a3]" : "border-[#e3e8ee]",
            )}
          >
            {c}
            {c === "Instagram" && <Check className="size-3.5" />}
          </span>
        ))}
      </div>
    </Panel>
  );
}

/** Delivery options a shopper picks from at checkout. */
export function ShippingOptions({ className }: { className?: string }) {
  const options = [
    { icon: Truck, name: "Lagos delivery", detail: "₦3,000 · free over ₦50,000" },
    { icon: Truck, name: "Outside Lagos", detail: "By weight: ₦5,500 up to 2 kg, ₦8,000 up to 5 kg" },
    { icon: MapPin, name: "Pick up in Lekki", detail: "Free · ready the next working day" },
  ];
  return (
    <Panel title="Delivery options" meta="Shown at checkout" className={className}>
      {options.map((o) => (
        <Row key={o.name}>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#ebeef1]">
            <o.icon className={cn("size-4", muted)} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{o.name}</div>
            <div className={cn("text-[11px]", faint)}>{o.detail}</div>
          </div>
          <Toggle />
        </Row>
      ))}
    </Panel>
  );
}

/** A return, decided item by item: where it goes, and what the customer gets. */
export function ReturnCard({ className }: { className?: string }) {
  const items = [
    { name: "Belt wrap dress, S, green", where: "Restock to Lekki store", what: "Refund ₦28,500", icon: Banknote },
    { name: "Linen trousers, M", where: "Restock to Warehouse", what: "Exchange for size L", icon: Repeat },
  ];
  return (
    <Panel title="Return for ORD-000198" meta="2 items" className={className}>
      {items.map((i) => (
        <div key={i.name} className="border-b border-[#f0f2f5] px-5 py-4 last:border-0">
          <div className="text-[13px] font-medium">{i.name}</div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <span className="flex items-center gap-1.5 rounded-lg bg-[#f6f9fc] px-3 py-2 text-[11px]">
              <PackageCheck className="size-3.5 text-[#0050a3]" />
              {i.where}
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-[#f6f9fc] px-3 py-2 text-[11px]">
              <i.icon className="size-3.5 text-[#1f9d55]" />
              {i.what}
            </span>
          </div>
        </div>
      ))}
    </Panel>
  );
}
