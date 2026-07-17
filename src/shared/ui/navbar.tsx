"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      <div className="container relative">
        <Link href="/" className="logo flex items-center h-16">
          <Image
            src="/salescenta-logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="block"
            priority
          />
        </Link>

        <div className="menu-extras">
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

        <ul className="buy-button list-none space-x-1 mb-0">
          <li className="inline mb-0">
            <Link
              href="https://app.salescenta.com/signup"
              className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle duration-500 text-base text-center rounded-full bg-primary hover:bg-primary-700 border border-primary hover:border-primary-700 text-white"
            >
              Start free trial
            </Link>
          </li>
        </ul>

        <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
          <ul className="navigation-menu">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                <Link href={link.href} className="sub-menu-item">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
