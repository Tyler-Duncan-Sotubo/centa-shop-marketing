import Image from "next/image";
import {
  Globe,
  Store,
  FileText,
  Smartphone,
  Search,
  Sparkles,
  ArrowUp,
  Warehouse,
  ArrowLeftRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";
import {
  orders,
  zuriExchange,
  SAMPLE_STORE,
  type Channel,
  type ChatMessage,
} from "./sample-data";

/*
 * Product vignettes drawn in the admin's own vocabulary (Plus Jakarta Sans,
 * #30313d ink, #f6f9fc wash, hairline borders, brand blue for the one
 * selected thing) so every direction shows the real product look. The
 * frame around them is what changes between directions.
 */

const ui = "text-[#30313d]";

export function ChannelGlyph({
  channel,
  className,
}: {
  channel: Channel;
  className?: string;
}) {
  const base = "size-3.5";
  const icon =
    channel === "whatsapp" ? (
      <SiWhatsapp className={cn(base, "text-[#25d366]")} />
    ) : channel === "website" ? (
      <Globe className={base} />
    ) : channel === "pos" ? (
      <Store className={base} />
    ) : channel === "invoice" ? (
      <FileText className={base} />
    ) : (
      <Smartphone className={base} />
    );
  return (
    <span
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-[#ebeef1] bg-white text-[#687385]",
        className,
      )}
    >
      {icon}
    </span>
  );
}

const toneDot = {
  paid: "bg-[#1f9d55]",
  waiting: "bg-[#d97706]",
  part: "bg-[#0050a3]",
} as const;

/** The admin's Orders list, with every channel in one queue. */
export function OrdersPanel({
  rows = 5,
  className,
}: {
  rows?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        ui,
        "overflow-hidden rounded-xl border border-[#e3e8ee] bg-white text-left",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#ebeef1] px-4 py-3 sm:px-5">
        <div className="flex items-baseline gap-3">
          <span className="text-[15px] font-semibold">Orders</span>
          <span className="text-xs text-[#687385]">Today</span>
        </div>
        <div className="hidden items-center gap-2 rounded-md bg-[#f6f9fc] px-2.5 py-1.5 text-xs text-[#8792a2] sm:flex">
          <Search className="size-3.5" />
          Search orders
        </div>
      </div>
      <div className="flex gap-5 border-b border-[#ebeef1] px-4 text-xs sm:px-5">
        {["All", "Unpaid", "To fulfil"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "-mb-px py-2.5",
              i === 0
                ? "border-b-2 border-[#0050a3] font-semibold text-[#0050a3]"
                : "text-[#687385]",
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <ul>
        {orders.slice(0, rows).map((o) => (
          <li
            key={o.ref}
            className="flex items-center gap-3 border-b border-[#f0f2f5] px-4 py-3 last:border-0 sm:px-5"
          >
            <ChannelGlyph channel={o.channel} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] font-medium">
                {o.customer}
              </div>
              <div className="truncate text-[11px] text-[#8792a2]">
                {o.ref} · {o.channelLabel}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[13px] font-semibold tabular-nums">
                {o.amount}
              </div>
              <div className="flex items-center justify-end gap-1.5 text-[11px] text-[#687385]">
                <span className={cn("size-1.5 rounded-full", toneDot[o.tone])} />
                {o.status}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The exact message the backend pre-fills for a WhatsApp checkout. */
export function WhatsAppOrder({
  className,
  store = SAMPLE_STORE,
}: {
  className?: string;
  store?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-black/5 bg-[#efeae2] text-left shadow-[0_24px_48px_-24px_rgba(0,24,49,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2.5 bg-[#075e54] px-3.5 py-2.5 text-white">
        <span className="flex size-7 items-center justify-center rounded-full bg-white/15 text-[11px] font-semibold">
          {store.charAt(0)}
        </span>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold">{store}</div>
          <div className="text-[10px] text-white/70">Business account</div>
        </div>
      </div>
      <div className="space-y-2 p-3">
        <div className="ml-auto max-w-[92%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 text-[12px] leading-[1.5] text-[#111b21] shadow-sm">
          <p className="leading-[1.5]">
            Hello! I&apos;d like to order from {store}
            <br />
            Order ref: ORD-000214
            <br />
            King duvet set x1 — ₦48,500.00
            <br />
            Total: ₦48,500.00
            <br />
            Name: Adaeze Okafor
          </p>
          <div className="mt-1 text-right text-[10px] text-[#667781]">
            14:32 ✓✓
          </div>
        </div>
      </div>
    </div>
  );
}

/** A branded invoice, part-paid. */
export function InvoiceDoc({ className }: { className?: string }) {
  const lines = [
    { item: "King duvet set, white", qty: 10, total: "₦420,000" },
    { item: "Pillow pair, standard", qty: 20, total: "₦160,000" },
  ];
  return (
    <div
      className={cn(
        ui,
        "rounded-xl border border-[#e3e8ee] bg-white p-5 text-left sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#8792a2]">
            Invoice
          </div>
          <div className="mt-1 text-[15px] font-semibold">INV-000042</div>
        </div>
        <div className="text-right text-[11px] text-[#687385]">
          <div className="font-medium text-[#30313d]">Mainland Wholesale Ltd</div>
          <div>Due 22 Oct 2026</div>
        </div>
      </div>
      <div className="mt-5 border-t border-[#ebeef1]">
        {lines.map((l) => (
          <div
            key={l.item}
            className="flex items-center justify-between gap-3 border-b border-[#f0f2f5] py-2.5 text-[12px]"
          >
            <span className="min-w-0 truncate">{l.item}</span>
            <span className="text-[#8792a2] tabular-nums">× {l.qty}</span>
            <span className="w-20 text-right font-medium tabular-nums">
              {l.total}
            </span>
          </div>
        ))}
      </div>
      <dl className="mt-3 space-y-1.5 text-[12px]">
        <div className="flex justify-between">
          <dt className="text-[#687385]">Total</dt>
          <dd className="font-semibold tabular-nums">₦580,000</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-[#687385]">Paid by transfer, 8 Oct</dt>
          <dd className="tabular-nums text-[#1f9d55]">− ₦240,000</dd>
        </div>
        <div className="flex justify-between border-t border-[#ebeef1] pt-2 text-[13px]">
          <dt className="font-semibold">Balance due</dt>
          <dd className="font-semibold tabular-nums text-[#0050a3]">
            ₦340,000
          </dd>
        </div>
      </dl>
    </div>
  );
}

/** One product's stock across locations. */
export function StockByLocation({ className }: { className?: string }) {
  const rows = [
    { name: "Lekki store", qty: 6, low: true },
    { name: "Ikeja store", qty: 14 },
    { name: "Warehouse, Ojota", qty: 120 },
  ];
  return (
    <div
      className={cn(
        ui,
        "rounded-xl border border-[#e3e8ee] bg-white p-5 text-left sm:p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[15px] font-semibold">King duvet set, white</div>
          <div className="text-[11px] text-[#8792a2]">SKU IVL-DUV-K-WH</div>
        </div>
        <div className="text-right">
          <div className="text-[15px] font-semibold tabular-nums">140</div>
          <div className="text-[11px] text-[#8792a2]">on hand</div>
        </div>
      </div>
      <div className="mt-4 border-t border-[#ebeef1]">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center gap-3 border-b border-[#f0f2f5] py-2.5 text-[12px] last:border-0"
          >
            {r.name.startsWith("Warehouse") ? (
              <Warehouse className="size-3.5 text-[#8792a2]" />
            ) : (
              <Store className="size-3.5 text-[#8792a2]" />
            )}
            <span className="flex-1">{r.name}</span>
            {r.low && (
              <span className="text-[11px] text-[#d97706]">Low stock</span>
            )}
            <span className="w-10 text-right font-medium tabular-nums">
              {r.qty}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#f6f9fc] px-3 py-2.5 text-[12px]">
        <ArrowLeftRight className="size-3.5 text-[#0050a3]" />
        <span className="flex-1">
          Transfer 20 from Warehouse to Lekki store
        </span>
        <span className="text-[11px] text-[#687385]">In transit</span>
      </div>
    </div>
  );
}

/** Zuri, answering from the merchant's own data. */
export function ZuriChat({
  className,
  dark = false,
  messages = zuriExchange,
}: {
  className?: string;
  dark?: boolean;
  messages?: ChatMessage[];
}) {
  return (
    <div
      className={cn(
        "space-y-4 text-left",
        dark ? "text-white" : "text-[#30313d]",
        className,
      )}
    >
      {messages.map((m, i) =>
        m.role === "user" ? (
          <div
            key={i}
            className={cn(
              "ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5 text-[13px]",
              dark ? "bg-white/10" : "bg-[#f6f9fc]",
            )}
          >
            {m.text}
          </div>
        ) : (
          <div key={i} className="flex gap-3">
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full",
                dark ? "bg-white text-[#0050a3]" : "bg-[#0050a3] text-white",
              )}
            >
              <Sparkles className="size-3.5" />
            </span>
            <p
              className={cn(
                "text-[13px] leading-[1.6]",
                dark ? "text-white/85" : "text-[#30313d]",
              )}
            >
              {m.text}
            </p>
          </div>
        ),
      )}
      <div
        className={cn(
          "mt-6! flex items-center gap-2 rounded-full border px-4 py-2 text-[12px]",
          dark
            ? "border-white/15 text-white/50"
            : "border-[#e3e8ee] text-[#8792a2]",
        )}
      >
        <span className="flex-1">Ask anything…</span>
        <span
          className={cn(
            "flex size-6 items-center justify-center rounded-full",
            dark ? "bg-white/10" : "bg-[#f6f9fc]",
          )}
        >
          <ArrowUp className="size-3" />
        </span>
      </div>
    </div>
  );
}

/** A dashboard metric strip, as on the admin Overview. */
export function MetricStrip({ className }: { className?: string }) {
  const metrics = [
    { label: "Gross sales", value: "₦7.74M", delta: "+18.2%" },
    { label: "Orders", value: "214", delta: "+9.4%" },
    { label: "Avg. order value", value: "₦36.2K", delta: "+3.1%" },
  ];
  return (
    <div
      className={cn(
        ui,
        "grid grid-cols-3 divide-x divide-[#ebeef1] rounded-xl border border-[#e3e8ee] bg-white text-left",
        className,
      )}
    >
      {metrics.map((m) => (
        <div key={m.label} className="px-4 py-3.5 sm:px-5">
          <div className="text-[11px] text-[#687385]">{m.label}</div>
          <div className="mt-1 text-[17px] font-semibold tabular-nums sm:text-[19px]">
            {m.value}
          </div>
          <div className="text-[11px] text-[#1f9d55]">{m.delta}</div>
        </div>
      ))}
    </div>
  );
}

/** A browser window around a real storefront screenshot. */
export function BrowserShot({
  src,
  url,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  url: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-black/10 bg-white",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-black/5 bg-[#f6f7f9] px-3 py-2">
        <span className="flex gap-1">
          <span className="size-2 rounded-full bg-black/10" />
          <span className="size-2 rounded-full bg-black/10" />
          <span className="size-2 rounded-full bg-black/10" />
        </span>
        <span className="mx-auto truncate rounded bg-white px-3 py-0.5 text-[10px] text-[#687385]">
          {url}
        </span>
      </div>
      <div className={cn("relative aspect-[16/9]", imgClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/**
 * A real SalesCenta POS screen in an iPad bezel. The screens are cropped
 * from the App Store shots, which cut the iPad off at the bottom, so the
 * frame is open at the bottom: sit it flush on its container's lower edge.
 */
export function IpadShot({
  screen = "checkout",
  className,
}: {
  screen?: "sell" | "checkout" | "offline" | "close-day" | "locations";
  className?: string;
}) {
  const alts = {
    sell: "SalesCenta POS: tapping products into the cart",
    checkout: "SalesCenta POS checkout, taking cash and working out the change",
    offline: "SalesCenta POS still taking sales while offline",
    "close-day": "SalesCenta POS end-of-day totals by payment method",
    locations: "Switching store location in SalesCenta POS",
  };
  return (
    <div
      className={cn(
        "rounded-t-[24px] bg-[#0d0f12] p-[8px] pb-0 sm:rounded-t-[30px] sm:p-[11px] sm:pb-0",
        className,
      )}
    >
      <div className="relative aspect-[1600/1055] overflow-hidden rounded-t-[16px] bg-white sm:rounded-t-[20px]">
        <Image
          src={`/images/pos/pos-${screen}.webp`}
          alt={alts[screen]}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/** The real app mockups (framed iPhone renders, transparent background). */
export function PhoneShot({
  which = "dashboard",
  className,
}: {
  which?: "dashboard" | "products";
  className?: string;
}) {
  return (
    <Image
      src={
        which === "dashboard"
          ? "/images/app/mockup-dashboard.webp"
          : "/images/app/mockup-products.webp"
      }
      alt={
        which === "dashboard"
          ? "The SalesCenta app dashboard"
          : "The product list in the SalesCenta app"
      }
      width={640}
      height={1323}
      className={cn("h-auto", className)}
    />
  );
}
