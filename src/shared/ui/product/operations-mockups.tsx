import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowUpRight,
  Gift,
  Mail,
  Printer,
  ShoppingCart,
  SlidersHorizontal,
  Tag,
  Undo2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { faint, MiniButton, muted, Panel, Row, rule, Status, Tabs } from "./kit";

/** A product's options and the variants they make. */
export function VariantMatrix({ className }: { className?: string }) {
  const colours = [
    { name: "Green", hex: "#2f6b4f" },
    { name: "Cream", hex: "#e9dfc9" },
    { name: "Black", hex: "#1d1f24" },
  ];
  const variants = [
    { name: "S / Green", price: "₦28,500", stock: 12 },
    { name: "M / Green", price: "₦28,500", stock: 4 },
    { name: "S / Cream", price: "₦28,500", stock: 9 },
    { name: "M / Black", price: "₦30,000", stock: 0 },
  ];
  return (
    <Panel title="Belt wrap dress" meta="4 of 9 variants" className={className}>
      <div className={cn("space-y-3 border-b px-5 py-4", rule)}>
        <div className="flex items-center gap-3">
          <span className={cn("w-12 text-[11px]", muted)}>Size</span>
          {["S", "M", "L"].map((s) => (
            <span key={s} className="rounded-md bg-[#f6f9fc] px-2.5 py-1 text-[11px] font-medium">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className={cn("w-12 text-[11px]", muted)}>Colour</span>
          {colours.map((c) => (
            <span key={c.name} className="flex items-center gap-1.5 text-[11px]">
              <span className="size-3.5 rounded-full ring-1 ring-black/10" style={{ background: c.hex }} />
              {c.name}
            </span>
          ))}
        </div>
      </div>
      {variants.map((v) => (
        <Row key={v.name}>
          <span className="flex-1 text-[13px]">{v.name}</span>
          <span className="w-16 text-right text-[12px] tabular-nums">{v.price}</span>
          <span className="w-20 text-right">
            {v.stock === 0 ? (
              <Status tone="grey">Sold out</Status>
            ) : v.stock < 5 ? (
              <Status tone="amber">{v.stock} left</Status>
            ) : (
              <span className="text-[12px] tabular-nums">{v.stock} in stock</span>
            )}
          </span>
        </Row>
      ))}
    </Panel>
  );
}

/** Deterministic bar widths, so the barcode renders the same every time. */
const widths = [3, 1, 1, 2, 1, 3, 2, 1, 1, 1, 3, 1, 2, 2, 1, 1, 3, 1, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 1, 2, 1, 2, 1, 1, 3, 2, 1, 1];
/** Even entries are bars, odd ones the gaps between them. */
const bars = widths.reduce<{ x: number; w: number; bar: boolean }[]>((acc, w, i) => {
  const prev = acc[acc.length - 1];
  const x = prev ? prev.x + prev.w + 0.9 : 0;
  return [...acc, { x, w: w * 1.1, bar: i % 2 === 0 }];
}, []);

/** A printed variant label, and the two ways to print it. */
export function BarcodeLabel({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="mx-auto w-[260px] rounded-lg border border-[#e3e8ee] bg-white p-4 text-center text-[#30313d] shadow-[0_24px_60px_-36px_rgba(0,24,49,0.35)]">
        <div className="text-[12px] font-semibold">Belt wrap dress</div>
        <div className={cn("text-[11px]", muted)}>S / Green · ₦28,500</div>
        <svg viewBox="0 0 120 40" className="mx-auto mt-3 h-14 w-full" aria-hidden>
          {bars.map((b, i) =>
            b.bar ? <rect key={i} x={b.x} y={0} width={b.w} height={40} fill="#111" /> : null,
          )}
        </svg>
        <div className="mt-1 font-mono text-[11px] tracking-[0.2em]">2004 1180 3321</div>
      </div>
      <Panel bodyClassName="divide-y divide-[#f0f2f5]">
        {[
          { name: "Thermal label printer", detail: "One label per page, sized for Zebra, TSC or Xprinter", on: true },
          { name: "Regular printer", detail: "A sheet of labels to cut apart by hand" },
        ].map((o) => (
          <div key={o.name} className="flex items-center gap-3 px-5 py-3">
            <Printer className={cn("size-4", o.on ? "text-[#0050a3]" : muted)} />
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-medium">{o.name}</div>
              <div className={cn("text-[11px]", faint)}>{o.detail}</div>
            </div>
          </div>
        ))}
      </Panel>
    </div>
  );
}

/** A product's stock movements, every one with a reason. */
export function StockMovements({ className }: { className?: string }) {
  const rows = [
    { icon: ArrowUpRight, what: "Sale", where: "POS · Lekki store", qty: "−1" },
    { icon: ArrowLeftRight, what: "Transfer in", where: "From Warehouse to Lekki store", qty: "+20" },
    { icon: Undo2, what: "Return", where: "ORD-000198 · Lekki store", qty: "+1" },
    { icon: SlidersHorizontal, what: "Adjustment", where: "Stock take · Ikeja store", qty: "−2" },
    { icon: ArrowDownLeft, what: "Received", where: "Warehouse, Ojota", qty: "+60" },
  ];
  return (
    <Panel title="Stock movements" meta="King duvet set, white" className={className}>
      {rows.map((r) => (
        <Row key={r.what + r.where}>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[#ebeef1]">
            <r.icon className={cn("size-3.5", muted)} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{r.what}</div>
            <div className={cn("truncate text-[11px]", faint)}>{r.where}</div>
          </div>
          <span className={cn("text-[13px] font-semibold tabular-nums", r.qty.startsWith("+") ? "text-[#1f9d55]" : "")}>
            {r.qty}
          </span>
        </Row>
      ))}
    </Panel>
  );
}

/** One customer's record: group, spend, loyalty and recent orders. */
export function CustomerCard({ className }: { className?: string }) {
  return (
    <Panel className={className}>
      <div className={cn("flex items-center gap-3 border-b px-5 py-4", rule)}>
        <span className="flex size-10 items-center justify-center rounded-full bg-[#e6eef7] text-[13px] font-semibold text-[#0050a3]">
          AO
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[14px] font-semibold">Adaeze Okafor</div>
          <div className={cn("text-[11px]", faint)}>Customer since March · Lagos</div>
        </div>
      </div>
      <div className={cn("grid grid-cols-3 divide-x border-b divide-[#ebeef1]", rule)}>
        {[
          ["Orders", "14"],
          ["Spent", "₦612K"],
          ["Points", "1,240"],
        ].map(([k, v]) => (
          <div key={k} className="px-5 py-3">
            <div className={cn("text-[11px]", muted)}>{k}</div>
            <div className="mt-0.5 text-[16px] font-semibold tabular-nums">{v}</div>
          </div>
        ))}
      </div>
      {[
        ["ORD-000214", "WhatsApp", "₦48,500"],
        ["ORD-000188", "Website", "₦36,000"],
      ].map(([ref, ch, amt]) => (
        <Row key={ref}>
          <span className="flex-1 text-[12px]">
            {ref} <span className={faint}>· {ch}</span>
          </span>
          <span className="text-[12px] font-medium tabular-nums">{amt}</span>
        </Row>
      ))}
    </Panel>
  );
}

/** A discount code and the loyalty rule beside it. */
export function DiscountLoyalty({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      <Panel title="Discount" meta={<Status tone="green">Active</Status>} bodyClassName="p-5">
        <div className="flex items-center gap-3">
          <Tag className="size-4 text-[#0050a3]" />
          <span className="font-mono text-[15px] font-semibold tracking-[0.06em]">EASTER15</span>
        </div>
        <div className={cn("mt-2 text-[12px]", muted)}>15% off orders over ₦30,000 · ends 21 Apr</div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#eef1f5]">
          <div className="h-full w-[48%] rounded-full bg-[#0050a3]" />
        </div>
        <div className={cn("mt-2 text-[11px]", faint)}>Used 48 of 100 times</div>
      </Panel>
      <Panel title="Loyalty points" meta={<Status tone="green">On</Status>} bodyClassName="p-5">
        <div className="flex items-center gap-3 text-[13px]">
          <Gift className="size-4 text-[#0050a3]" />
          Customers earn 1 point for every ₦100 spent
        </div>
        <div className={cn("mt-2 pl-7 text-[12px]", muted)}>100 points take ₦1,000 off a later order</div>
      </Panel>
    </div>
  );
}

/** A sent campaign and how it did. */
export function CampaignCard({ className }: { className?: string }) {
  return (
    <Panel title="Campaigns" meta="612 credits left" className={className}>
      <Tabs items={["All", "Sent", "Drafts"]} />
      {[
        { name: "New arrivals for Easter", ch: "Email", sent: "1,284", opened: "34%", tone: "green" as const, status: "Sent 2 Apr" },
        { name: "We're open on Sallah day", ch: "Email", sent: "860", opened: "41%", tone: "green" as const, status: "Sent 30 Mar" },
        { name: "Weekend flash sale", ch: "Email", sent: "1,302", opened: "—", tone: "grey" as const, status: "Draft" },
      ].map((c) => (
        <Row key={c.name}>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[#ebeef1]">
            <Mail className={cn("size-3.5", muted)} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13px] font-medium">{c.name}</div>
            <div className={cn("text-[11px]", faint)}>
              {c.ch} · {c.sent} recipients{c.opened !== "—" ? ` · ${c.opened} opened` : ""}
            </div>
          </div>
          <Status tone={c.tone}>{c.status}</Status>
        </Row>
      ))}
    </Panel>
  );
}

/** Carts customers left, and the reminder that went out. */
export function AbandonedCarts({ className }: { className?: string }) {
  return (
    <Panel title="Abandoned carts" meta="Last 7 days" className={className}>
      {[
        { who: "Kemi Adebayo", items: "2 items", value: "₦57,000", status: "Reminder sent", tone: "blue" as const },
        { who: "Ifeanyi Obi", items: "1 item", value: "₦18,500", status: "Recovered", tone: "green" as const },
        { who: "Zainab Musa", items: "3 items", value: "₦92,400", status: "Reminder sent", tone: "blue" as const },
      ].map((c) => (
        <Row key={c.who}>
          <ShoppingCart className={cn("size-4 shrink-0", muted)} />
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{c.who}</div>
            <div className={cn("text-[11px]", faint)}>{c.items}</div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-semibold tabular-nums">{c.value}</div>
            <Status tone={c.tone}>{c.status}</Status>
          </div>
        </Row>
      ))}
    </Panel>
  );
}

/** A salon's service menu with durations, prices and add-ons. */
export function ServiceMenu({ className }: { className?: string }) {
  const services = [
    { name: "Knotless braids", time: "4 hrs", price: "₦45,000", addon: "Add-on: beads +₦5,000", instant: true },
    { name: "Silk press", time: "2 hrs", price: "₦20,000", addon: "Add-on: trim +₦3,000", instant: true },
    { name: "Bridal hair and make-up", time: "5 hrs", price: "From ₦150,000", addon: "Enquiry first", instant: false },
  ];
  return (
    <Panel title="Services" meta="Hair" className={className}>
      {services.map((s) => (
        <Row key={s.name}>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{s.name}</div>
            <div className={cn("text-[11px]", faint)}>
              {s.time} · {s.addon}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[13px] font-semibold tabular-nums">{s.price}</div>
            <Status tone={s.instant ? "green" : "amber"}>{s.instant ? "Book online" : "Enquiry"}</Status>
          </div>
        </Row>
      ))}
    </Panel>
  );
}

/** A day's schedule across three staff calendars. */
export function BookingCalendar({ className }: { className?: string }) {
  const hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00"];
  const staff = [
    { name: "Amaka", bookings: [{ start: 0, len: 2, what: "Silk press", who: "Ruth A." }, { start: 3, len: 3, what: "Knotless braids", who: "Joy O." }] },
    { name: "Tolu", bookings: [{ start: 1, len: 1, what: "Trim", who: "Walk-in" }, { start: 2.5, len: 2, what: "Silk press", who: "Ada N." }] },
    { name: "Bisi", bookings: [{ start: 0, len: 4, what: "Knotless braids", who: "Funmi K." }] },
  ];
  const H = 40;
  return (
    <Panel title="Schedule" meta="Thu 15 Oct" className={className}>
      <div className="grid grid-cols-[44px_repeat(3,1fr)]">
        <div className={cn("border-b", rule)} />
        {staff.map((s) => (
          <div key={s.name} className={cn("border-b border-l px-3 py-2 text-[12px] font-semibold", rule)}>
            {s.name}
          </div>
        ))}
        <div>
          {hours.map((h) => (
            <div key={h} style={{ height: H }} className={cn("pr-2 pt-1 text-right text-[10px]", faint)}>
              {h}
            </div>
          ))}
        </div>
        {staff.map((s) => (
          <div key={s.name} className={cn("relative border-l", rule)} style={{ height: H * hours.length }}>
            {hours.map((h, i) => (
              <div key={h} className="absolute inset-x-0 border-t border-[#f0f2f5]" style={{ top: i * H }} />
            ))}
            {s.bookings.map((b) => (
              <div
                key={b.what + b.start}
                className="absolute inset-x-1.5 rounded-md border-l-2 border-[#0050a3] bg-[#e6eef7] px-2 py-1"
                style={{ top: b.start * H + 2, height: b.len * H - 4 }}
              >
                <div className="truncate text-[11px] font-semibold text-[#0050a3]">{b.what}</div>
                <div className="truncate text-[10px] text-[#4f5b6b]">{b.who}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Panel>
  );
}

/** Sales by channel, in brand-blue shades. */
export function ChannelChart({ className }: { className?: string }) {
  const rows = [
    { name: "Website", value: "₦2.91M", pct: 100 },
    { name: "Walk-in (POS)", value: "₦2.24M", pct: 77 },
    { name: "WhatsApp", value: "₦1.38M", pct: 47 },
    { name: "Instagram", value: "₦0.86M", pct: 30 },
    { name: "Wholesale invoices", value: "₦0.35M", pct: 12 },
  ];
  const shades = ["#0050a3", "#1f6cc0", "#4a8bd6", "#7eade6", "#b3cff0"];
  return (
    <Panel title="Sales by channel" meta="Last 30 days" className={className} bodyClassName="p-5 space-y-3.5">
      {rows.map((r, i) => (
        <div key={r.name}>
          <div className="flex items-center justify-between text-[12px]">
            <span>{r.name}</span>
            <span className="font-semibold tabular-nums">{r.value}</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#eef1f5]">
            <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: shades[i] }} />
          </div>
        </div>
      ))}
    </Panel>
  );
}

/** Expenses by category and supplier, with a cost spread over a period. */
export function ExpenseList({ className }: { className?: string }) {
  return (
    <Panel title="Expenses" meta="October" className={className}>
      {[
        { what: "Shop rent", cat: "Rent · spread over 12 months", amt: "₦150,000" },
        { what: "Diesel", cat: "Operations · Total Energies", amt: "₦85,000" },
        { what: "Instagram ads", cat: "Marketing", amt: "₦60,000" },
        { what: "Packaging", cat: "Supplies · PackRight Ltd", amt: "₦42,500" },
      ].map((e) => (
        <Row key={e.what}>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{e.what}</div>
            <div className={cn("truncate text-[11px]", faint)}>{e.cat}</div>
          </div>
          <span className="text-[13px] font-semibold tabular-nums">{e.amt}</span>
        </Row>
      ))}
      <div className={cn("flex justify-between border-t bg-[#f6f9fc] px-5 py-3 text-[13px]", rule)}>
        <span className={muted}>Total this month</span>
        <span className="font-semibold tabular-nums">₦337,500</span>
      </div>
    </Panel>
  );
}

/** The team, each person with a role. */
export function TeamRoles({ className }: { className?: string }) {
  return (
    <Panel title="Team" meta={<MiniButton>Invite</MiniButton>} className={className}>
      {[
        { name: "Femi Lawal", email: "femi@ivorylane.ng", role: "Owner" },
        { name: "Amaka Eze", email: "amaka@ivorylane.ng", role: "Manager" },
        { name: "Kunle Ade", email: "kunle@ivorylane.ng", role: "Accountant" },
        { name: "Bisi Ojo", email: "bisi@ivorylane.ng", role: "Sales" },
      ].map((p) => (
        <Row key={p.name}>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#f6f9fc] text-[11px] font-semibold text-[#4f5b6b]">
            {p.name
              .split(" ")
              .map((s) => s[0])
              .join("")}
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-medium">{p.name}</div>
            <div className={cn("truncate text-[11px]", faint)}>{p.email}</div>
          </div>
          <span className="rounded-md border border-[#e3e8ee] px-2 py-1 text-[11px] font-medium">{p.role}</span>
        </Row>
      ))}
    </Panel>
  );
}
