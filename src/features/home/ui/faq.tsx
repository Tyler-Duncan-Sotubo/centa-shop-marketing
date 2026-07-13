"use client";
import { useState } from "react";

const faqItems: { title: string; content: string }[] = [
  {
    title: "How does it work?",
    content:
      "You sign up, we help set up your storefront and connect WhatsApp and payments, and you start listing products. Orders come in through your site or WhatsApp and land in one dashboard.",
  },
  {
    title: "Do I need a designer to set up my store?",
    content:
      "No. Your store comes with a ready storefront you can customise yourself, and for Enterprise plans we build it for you.",
  },
  {
    title: "What do I need to do to start selling?",
    content:
      "Add your products, connect a payment method (bank transfer, card, or POS), and share your store link — on WhatsApp, Instagram, or anywhere your customers already find you.",
  },
  {
    title: "What happens when I receive an order?",
    content:
      "You get notified instantly, the order and payment status show up in your dashboard, and you can message the customer directly on WhatsApp from there.",
  },
  {
    title: "Can I use my own domain?",
    content:
      "Yes — connect a domain you already own, or get one set up as part of onboarding on Enterprise plans.",
  },
  {
    title: "Do you support subscriptions or one-off migrations?",
    content:
      "Both. Pick a self-serve plan and set up your store yourself, or go Enterprise and we migrate your existing store — including from Shopify — for free.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="md:col-span-6">
      <div>
        {faqItems.map((item, index) => (
          <div
            key={item.title}
            className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
          >
            <h2 className="text-base font-semibold">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                  activeIndex === index
                    ? "bg-gray-50 dark:bg-slate-800 text-primary"
                    : ""
                }`}
                aria-expanded={activeIndex === index}
              >
                <span>{item.title}</span>
                <svg
                  className={`${
                    activeIndex === index ? "rotate-180" : "rotate-270"
                  } size-4 shrink-0`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            {activeIndex === index && (
              <div className="p-5">
                <p className="text-slate-400 dark:text-gray-400">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
