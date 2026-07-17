"use client";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

interface FooterLink {
  route: string;
  title: string;
}

const footerLinks: FooterLink[] = [
  { route: "/page-terms", title: "Terms of Service" },
  { route: "/page-privacy", title: "Privacy Policy" },
];

const footerCompany: FooterLink[] = [
  { route: "/page-aboutus", title: "About us" },
  { route: "/page-pricing", title: "Pricing" },
  { route: "/contact-one", title: "Contact" },
];

const footerResources: FooterLink[] = [
  { route: "/learn", title: "Blog" },
  { route: "/developer", title: "Developer" },
];

const paymentLogos = [
  { src: "/images/payments/paystack.png", alt: "Paystack" },
  { src: "/images/payments/fincra.png", alt: "Fincra" },
  { src: "/images/payments/visa.png", alt: "Visa" },
  { src: "/images/payments/master-card.png", alt: "Mastercard" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-800 text-gray-200 dark:text-gray-200">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-15 px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-7.5">
                <div className="lg:col-span-3 md:col-span-12">
                  <Link
                    href="/"
                    className="inline-flex w-fit items-center rounded-lg bg-white px-3 py-2 focus:outline-none"
                  >
                    <Image
                      src="/salescenta-logo.png"
                      width={138}
                      height={26}
                      alt="SalesCenta"
                    />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    A commerce platform built for how Nigerian merchants
                    sell — WhatsApp checkout, bank transfer, and NGN pricing,
                    all built in from day one.
                  </p>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Company
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    {footerCompany.map((data) => (
                      <li key={data.route} className="mt-2.5 first:mt-0">
                        <Link
                          href={data.route}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                          {data.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Resources
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    {footerResources.map((data) => (
                      <li key={data.route} className="mt-2.5 first:mt-0">
                        <Link
                          href={data.route}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                          {data.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Legal
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    {footerLinks.map((data) => (
                      <li key={data.route} className="mt-2.5 first:mt-0">
                        <Link
                          href={data.route}
                          className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                        >
                          <MdKeyboardArrowRight className="text-xl me-1" />{" "}
                          {data.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-6">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Talk to us
                  </h5>
                  <p className="mt-6">
                    Reach us on WhatsApp for setup help or support.
                  </p>
                  <Link
                    href="/contact-one"
                    className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-md mt-4"
                  >
                    <Icon.MessageCircle className="size-4 me-2" /> WhatsApp us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7.5 px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container relative text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-start text-center">
              <p className="mb-0">
                © {new Date().getFullYear()} SalesCenta. All rights reserved.
              </p>
            </div>

            <ul className="list-none md:text-end text-center space-x-1 mt-6 md:mt-0">
              {paymentLogos.map((logo) => (
                <li key={logo.alt} className="inline">
                  <Image
                    width={35}
                    height={24}
                    src={logo.src}
                    className="max-h-6 inline"
                    title={logo.alt}
                    alt={logo.alt}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
