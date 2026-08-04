"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import SectionBadge from "@/shared/ui/section-badge";
import { HiOutlineDocumentText } from "react-icons/hi";

const lineItems = [
  { label: "Wholesale — bed sheets (x40)", amount: "₦1,200,000" },
  { label: "Wholesale — bath towels (x60)", amount: "₦840,000" },
  { label: "Delivery", amount: "₦45,000" },
];

const panelVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.4, ease: "easeOut" as const },
  }),
};

function InvoiceMockup() {
  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={panelVariants}
    >
      <div
        className="absolute -inset-4 md:-inset-6 rounded-3xl bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent blur-2xl -z-1"
        aria-hidden
      />
      <div className="relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 shadow-2xl shadow-primary/10 p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-400">
              Quote
            </p>
            <p className="text-lg font-semibold">QT-000042</p>
          </div>
          <span className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium px-3 py-1">
            Accepted
          </span>
        </div>

        <div className="space-y-3 mb-6">
          {lineItems.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={rowVariants}
              className="flex items-center justify-between text-sm border-b border-gray-50 dark:border-gray-800 pb-3 last:border-0"
            >
              <span className="text-slate-500 dark:text-slate-400">
                {item.label}
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-200 tabular-nums">
                {item.amount}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-between pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 0.4 }}
        >
          <span className="text-sm font-semibold">Total</span>
          <span className="text-xl font-bold text-primary tabular-nums">
            ₦2,085,000
          </span>
        </motion.div>

        <motion.button
          className="mt-6 w-full rounded-xl bg-primary text-white text-sm font-semibold py-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.4 }}
        >
          Convert to invoice
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function InvoicesQuotes() {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <SectionBadge icon={HiOutlineDocumentText} label="Invoicing" />
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Quotes and invoices, built for real deals
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Not every sale happens at checkout. Send a branded quote for a
            bulk order, get it accepted, and turn it into an invoice —
            without leaving the platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-10 md:mt-16 mt-8">
          <InvoiceMockup />

          <div className="lg:me-8">
            <h4 className="mb-4 text-2xl leading-normal font-medium">
              From wholesale quote to paid invoice
            </h4>
            <p className="text-slate-400">
              Built for merchants who sell beyond a single checkout button —
              bulk buyers, repeat customers, and deals that need a paper
              trail.
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex items-center">
                <BsCheckCircle className="text-primary text-base me-2" />{" "}
                Branded quotes with your own logo and terms
              </li>
              <li className="mb-1 flex items-center">
                <BsCheckCircle className="text-primary text-base me-2" /> One
                click to turn an accepted quote into an invoice
              </li>
              <li className="mb-1 flex items-center">
                <BsCheckCircle className="text-primary text-base me-2" />{" "}
                Track what&apos;s paid, partially paid, or outstanding
              </li>
            </ul>

            <div className="mt-4">
              <Link
                href="/page-aboutus"
                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
              >
                Find Out More <MdKeyboardArrowRight className="text-xl ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
