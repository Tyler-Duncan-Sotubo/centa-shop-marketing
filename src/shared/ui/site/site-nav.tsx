"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, SIGNUP_URL, LOGIN_URL } from "@/shared/config/site";
import { Logo } from "./logo";

/**
 * Fixed over every page's navy header: transparent at the top, solid navy
 * once the page scrolls (or the mobile menu opens) so it stays legible over
 * white sections.
 */
export function SiteNav() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color] duration-300",
        solid
          ? "border-b border-white/10 bg-navy/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="SalesCenta home" className="shrink-0">
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={cn(
                "text-[14px] transition-colors",
                pathname === l.href
                  ? "text-white"
                  : "text-white/65 hover:text-white",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <Link
            href={LOGIN_URL}
            className="hidden text-[14px] text-white/65 transition-colors hover:text-white sm:inline"
          >
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpenOn(open ? null : pathname)}
            className="-mr-2 flex size-11 items-center justify-center text-white/80 hover:text-white lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy px-5 pb-6 pt-2 lg:hidden">
          <ul>
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpenOn(null)}
                  className={cn(
                    "block py-3 text-base",
                    pathname === l.href ? "text-white" : "text-white/75",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={LOGIN_URL}
                onClick={() => setOpenOn(null)}
                className="block py-3 text-base text-white/75"
              >
                Sign in
              </Link>
            </li>
          </ul>
          <Link
            href={SIGNUP_URL}
            className="mt-3 flex h-12 items-center justify-center rounded-full bg-white text-base font-semibold text-navy"
          >
            Start free trial
          </Link>
        </div>
      )}
    </header>
  );
}
