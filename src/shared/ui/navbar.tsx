"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

const navLinks = [
  { href: "/page-aboutus", label: "About" },
  { href: "/page-pricing", label: "Pricing & Features" },
  { href: "/showcase", label: "Showcase" },
  { href: "/learn", label: "Learn" },
  { href: "/contact-one", label: "Contact" },
];

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const pathname = usePathname();

  // Internal content admin has its own chrome — no marketing nav.
  if (pathname?.startsWith("/admin")) return null;

  useEffect(() => {
    function windowScroll() {
      const navbar = document.getElementById("topnav");
      if (!navbar) return;
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  const toggleMenu = () => setIsMenu((open) => !open);

  return (
    <nav
      id="topnav"
      className="defaultscroll !bg-white dark:!bg-slate-900 shadow-sm dark:shadow-gray-800"
    >
      <div className="container relative !flex !items-center !justify-between h-16">
        <Link href="/" className="!static !float-none flex items-center shrink-0">
          <Image
            src="/salescenta-logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="block"
            priority
          />
        </Link>

        <ul className="hidden lg:flex list-none items-center gap-1 mb-0">
          {navLinks.map((link) => (
            <li key={link.href} className={pathname === link.href ? "active" : ""}>
              <Link
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-slate-700 hover:text-primary dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ul className="buy-button hidden lg:block list-none space-x-1 mb-0 !static !float-none">
            <li className="inline mb-0">
              <Link
                href="https://app.salescenta.com/signup"
                className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center rounded-full bg-primary hover:bg-primary-700 border border-primary hover:border-primary-700 text-white"
              >
                Start free trial
              </Link>
            </li>
          </ul>

          <div className="menu-extras !static lg:hidden">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={(event) => {
                  event.preventDefault();
                  toggleMenu();
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
            isMenu ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsMenu(false)}
        />

        {/* Right-side drawer */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[80vw] transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-slate-900 lg:hidden ${
            isMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-gray-800">
            <span className="font-semibold text-slate-900 dark:text-white">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenu(false)}
              className="rounded-full p-1.5 text-slate-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col px-2 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenu(false)}
                  className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-slate-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-100 px-5 py-4 dark:border-gray-800">
            <Link
              href="https://app.salescenta.com/signup"
              onClick={() => setIsMenu(false)}
              className="block w-full rounded-full bg-primary py-2.5 text-center font-semibold tracking-wide text-white transition-colors duration-500 hover:bg-primary-700"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
