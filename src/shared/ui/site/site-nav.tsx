"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SIGNUP_URL, LOGIN_URL } from "@/shared/config/site";
import { companyMenu, resourcesMenu, type MenuLink } from "@/shared/config/nav-menu";
import { featureGroups, type FeatureEntry } from "@/features/feature-pages/catalog";
import { Logo } from "./logo";

type MenuKey = "product" | "resources" | "company";

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

/**
 * Fixed over every page's navy header: transparent at the top, solid navy
 * once the page scrolls or a menu opens. Product, Resources and Company
 * open as panels on hover or click; on mobile they fold into the sheet.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menus belong to the page they were opened on, so navigating closes them.
  const [menu, setMenu] = useState<{ key: MenuKey; on: string } | null>(null);
  const [sheetOn, setSheetOn] = useState<string | null>(null);
  const openKey = menu && menu.on === pathname ? menu.key : null;
  const sheetOpen = sheetOn === pathname;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openKey) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openKey]);

  const open = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu({ key, on: pathname });
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };
  const toggle = (key: MenuKey) => (openKey === key ? setMenu(null) : open(key));

  const solid = scrolled || !!openKey || sheetOpen;

  return (
    <header
      onPointerLeave={closeSoon}
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color] duration-300",
        solid ? "border-b border-white/10 bg-navy/95 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="SalesCenta home" className="shrink-0">
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Trigger label="Product" k="product" openKey={openKey} onOpen={open} onToggle={toggle} />
          <Link
            href="/page-pricing"
            onPointerEnter={closeSoon}
            aria-current={pathname === "/page-pricing" ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 text-[14px] transition-colors",
              pathname === "/page-pricing" ? "text-white" : "text-white/70 hover:text-white",
            )}
          >
            Pricing
          </Link>
          <Trigger label="Resources" k="resources" openKey={openKey} onOpen={open} onToggle={toggle} />
          <Trigger label="Company" k="company" openKey={openKey} onOpen={open} onToggle={toggle} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <Link href={LOGIN_URL} className="hidden text-[14px] text-white/70 transition-colors hover:text-white sm:inline">
            Sign in
          </Link>
          <Link
            href={SIGNUP_URL}
            className="hidden h-10 items-center rounded-full bg-white px-4 text-[14px] font-semibold text-navy transition-colors hover:bg-white/90 sm:inline-flex"
          >
            Start free trial
          </Link>
          <button
            type="button"
            aria-label={sheetOpen ? "Close menu" : "Open menu"}
            aria-expanded={sheetOpen}
            onClick={() => setSheetOn(sheetOpen ? null : pathname)}
            className="-mr-2 flex size-11 items-center justify-center text-white/80 hover:text-white lg:hidden"
          >
            {sheetOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {openKey && (
          <div
            id={`menu-${openKey}`}
            onPointerEnter={() => open(openKey)}
            className="absolute inset-x-5 top-full hidden pt-2 md:inset-x-8 lg:block"
          >
            {openKey === "product" ? (
              <ProductPanel onNavigate={() => setMenu(null)} />
            ) : (
              <SmallPanel
                items={openKey === "resources" ? resourcesMenu : companyMenu}
                align={openKey === "resources" ? "left-[46%]" : "left-[56%]"}
                onNavigate={() => setMenu(null)}
              />
            )}
          </div>
        )}
      </div>

      {sheetOpen && <MobileSheet onNavigate={() => setSheetOn(null)} />}
    </header>
  );
}

function Trigger({
  label,
  k,
  openKey,
  onOpen,
  onToggle,
}: {
  label: string;
  k: MenuKey;
  openKey: MenuKey | null;
  onOpen: (k: MenuKey) => void;
  onToggle: (k: MenuKey) => void;
}) {
  const active = openKey === k;
  return (
    <button
      type="button"
      aria-expanded={active}
      aria-controls={`menu-${k}`}
      // Hover opens for a mouse only; touch and keyboard use the click.
      onPointerEnter={(e) => e.pointerType === "mouse" && onOpen(k)}
      onClick={() => onToggle(k)}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-4 py-2 text-[14px] transition-colors",
        active ? "text-white" : "text-white/70 hover:text-white",
      )}
    >
      {label}
      <ChevronDown className={cn("size-3.5 transition-transform", active && "rotate-180")} />
    </button>
  );
}

const panel =
  "rounded-2xl bg-white p-3 text-ink shadow-[0_30px_80px_-20px_rgba(2,11,26,0.5)] ring-1 ring-black/5";

function MenuItem({
  item,
  onNavigate,
}: {
  item: MenuLink | FeatureEntry;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      {...external(item.href)}
      onClick={onNavigate}
      className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-mist"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white">
        <item.icon className="size-[18px] text-primary" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-[14px] font-semibold">
          {item.name}
          {"isNew" in item && item.isNew && (
            <span className="text-[11px] font-semibold text-primary">New</span>
          )}
        </span>
        <span className="mt-0.5 block text-[13px] leading-[1.45] text-copy">{item.blurb}</span>
      </span>
    </Link>
  );
}

function ProductPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className={cn(panel, "mx-auto max-w-[1040px] p-0")}>
      <div className="grid grid-cols-3 gap-2 p-4">
        {featureGroups.map((g) => (
          <div key={g.title}>
            <div className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a94a3]">
              {g.title}
            </div>
            {g.items.map((f) => (
              <MenuItem key={f.slug} item={f} onNavigate={onNavigate} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-b-2xl border-t border-line bg-mist px-7 py-4 text-[14px]">
        <span className="text-copy">One platform for your store, your till and your stock.</span>
        <Link href="/features" onClick={onNavigate} className="inline-flex items-center gap-1.5 font-semibold text-primary">
          See all features <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

function SmallPanel({
  items,
  align,
  onNavigate,
}: {
  items: MenuLink[];
  align: string;
  onNavigate: () => void;
}) {
  return (
    <div className={cn(panel, "absolute w-[360px] -translate-x-1/2", align)}>
      {items.map((i) => (
        <MenuItem key={i.name} item={i} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

function MobileSheet({ onNavigate }: { onNavigate: () => void }) {
  const group = "group border-b border-white/10";
  const summary =
    "flex cursor-pointer list-none items-center justify-between py-4 text-base text-white [&::-webkit-details-marker]:hidden";
  const sub = "block py-2.5 text-[15px] text-white/70";
  return (
    <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 pb-8 lg:hidden">
      <details className={group}>
        <summary className={summary}>
          Product <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
        </summary>
        <div className="pb-4">
          {featureGroups.map((g) => (
            <div key={g.title} className="mt-2">
              <div className="pb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">{g.title}</div>
              {g.items.map((f) => (
                <Link key={f.slug} href={f.href} onClick={onNavigate} className={sub}>
                  {f.name}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/features" onClick={onNavigate} className={cn(sub, "font-semibold text-white")}>
            See all features
          </Link>
        </div>
      </details>
      <Link href="/page-pricing" onClick={onNavigate} className="block border-b border-white/10 py-4 text-base text-white">
        Pricing
      </Link>
      {[
        { title: "Resources", items: resourcesMenu },
        { title: "Company", items: companyMenu },
      ].map((s) => (
        <details key={s.title} className={group}>
          <summary className={summary}>
            {s.title} <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="pb-4">
            {s.items.map((i) => (
              <Link key={i.name} href={i.href} {...external(i.href)} onClick={onNavigate} className={sub}>
                {i.name}
              </Link>
            ))}
          </div>
        </details>
      ))}
      <Link href={LOGIN_URL} onClick={onNavigate} className="block py-4 text-base text-white/75">
        Sign in
      </Link>
      <Link
        href={SIGNUP_URL}
        onClick={onNavigate}
        className="mt-2 flex h-12 items-center justify-center rounded-full bg-white text-base font-semibold text-navy"
      >
        Start free trial
      </Link>
    </div>
  );
}
