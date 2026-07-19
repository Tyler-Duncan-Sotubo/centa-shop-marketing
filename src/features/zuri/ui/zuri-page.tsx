"use client";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

import SectionBadge from "@/shared/ui/section-badge";

const capabilities: {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
}[] = [
  {
    icon: HiOutlineChartBar,
    title: "Ask about your business",
    desc: "“How much did I sell this week?” “Which products are low on stock?” “Have I been paid for order 97?” Zuri answers from your real numbers — never guesses.",
    color: "#00c3f7",
  },
  {
    icon: HiOutlineQuestionMarkCircle,
    title: "Get help doing anything",
    desc: "Ask “how do I add a tax rate?” or “how do I start an email campaign?” and Zuri gives verified step-by-step instructions for the exact screen you're on.",
    color: "#e37400",
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "On your phone and your desk",
    desc: "Zuri lives inside the SalesCenta app and dashboard, and knows which one you're using — so its directions always match what's in front of you.",
    color: "#7c3aed",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Your data stays yours",
    desc: "Zuri only sees your own store's data, respects your staff roles and permissions, and never shares information between businesses.",
    color: "#16a34a",
  },
];

const sampleChat: { role: "user" | "zuri"; text: string }[] = [
  { role: "user", text: "How many orders came in this week?" },
  {
    role: "zuri",
    text: "You had 34 orders this week totalling ₦1,240,000 — up 18% on last week. Your best day was Saturday with 11 orders.",
  },
  { role: "user", text: "Which products are low on stock?" },
  {
    role: "zuri",
    text: "3 products are running low: Belt Wrap Dress (S) has 4 left, LunaFlex Tote has 6, and Aviator Sunglasses has 2. Want the steps to restock them?",
  },
];

export default function ZuriPage() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative table w-full py-20 lg:py-30 overflow-hidden">
        <div className="container relative">
          <div className="relative grid md:grid-cols-12 grid-cols-1 items-center gap-7.5">
            <div className="md:col-span-6">
              <div className="md:me-6" data-aos="fade-up">
                <SectionBadge icon={HiOutlineSparkles} label="Meet Zuri" align="left" />
                <h1 className="font-bold capitalize lg:leading-normal leading-normal text-5xl lg:text-6xl mb-5 text-black dark:text-white">
                  Your business,{" "}
                  <span className="after:absolute after:inset-e-0 after:inset-s-0 after:bottom-3 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-primary/30 relative text-primary">
                    answered
                  </span>
                </h1>
                <p className="text-slate-400 text-lg max-w-xl">
                  Zuri is the AI assistant built into SalesCenta. Ask about
                  your sales, stock, and payments in plain language — or ask
                  how to do anything in the app — and get a straight answer
                  from your own data.
                </p>

                <div className="relative mt-8">
                  <Link
                    href="https://app.salescenta.com/signup"
                    className="py-4 px-5 mr-4 inline-block font-semibold tracking-wide border align-middle text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-xl me-2 hover:scale-105 transition-transform duration-300"
                  >
                    Try Zuri free{" "}
                    <FaArrowRight className="inline-block ml-2" />
                  </Link>
                  <Link
                    href="/page-pricing"
                    className="py-4 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-white hover:bg-primary/5 border-gray-200 dark:border-gray-800 dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-xl"
                  >
                    See pricing
                  </Link>
                </div>
              </div>
            </div>

            {/* Chat mockup */}
            <div className="md:col-span-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="max-w-md mx-auto rounded-2xl shadow-xl dark:shadow-gray-800 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <HiOutlineSparkles className="text-primary text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-black dark:text-white">
                      Zuri
                    </div>
                    <div className="text-xs text-slate-400">
                      Your store assistant
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  {sampleChat.map((m, i) => (
                    <div
                      key={i}
                      className={
                        m.role === "user"
                          ? "ms-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary text-white px-4 py-2.5 text-sm"
                          : "me-auto max-w-[90%] rounded-2xl rounded-bl-md bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2.5 text-sm"
                      }
                    >
                      {m.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <SectionBadge icon={HiOutlineSparkles} label="What Zuri does" />
            <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Like having an analyst on staff
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              No dashboards to learn, no reports to build. Just ask.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-7.5">
            {capabilities.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800"
                  data-aos="fade-up"
                >
                  <div className="shrink-0 flex items-center justify-center size-14 rounded-full bg-gray-50 dark:bg-slate-800">
                    <ItemIcon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative md:py-24 py-16">
        <div className="container relative text-center">
          <h2 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Stop digging through reports. Start asking.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Zuri is included with SalesCenta — no setup, no extra tools. Open
            the app and ask your first question.
          </p>
          <Link
            href="https://app.salescenta.com/signup"
            className="py-4 px-6 inline-block font-semibold tracking-wide border align-middle text-base text-center bg-primary hover:bg-primary-700 border-primary hover:border-primary-700 text-white rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Start your free trial <FaArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
