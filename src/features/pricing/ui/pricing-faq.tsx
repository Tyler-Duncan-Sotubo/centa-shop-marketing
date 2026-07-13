"use client";
import { useState } from "react";

const faqItems: { title: string; content: string }[] = [
  {
    title: "Which plan should I pick?",
    content:
      "Start with Free if you're just testing the waters. Move up as your product count and order volume grow — you can change plans anytime.",
  },
  {
    title: "What happens if I go over my plan's product limit?",
    content:
      "We'll notify you before anything is blocked. You can upgrade at any point, and your existing listings are never taken down.",
  },
  {
    title: "Is WhatsApp checkout available on every plan?",
    content:
      "Yes — WhatsApp-native checkout is included on every plan, including Free. It's not an add-on.",
  },
  {
    title: "Do you charge transaction fees on top of the plan price?",
    content:
      "Paystack's standard processing fees apply as usual, but we don't add our own markup on top of your plan. Stripe and Fincra support is coming soon.",
  },
  {
    title: "Can I switch between monthly and yearly billing?",
    content:
      "Yes, anytime from your billing settings. Switching to yearly applies the discount from your next billing cycle.",
  },
  {
    title: "What happens to my store if I downgrade?",
    content:
      "Your storefront and orders stay exactly as they are. Only features tied to the higher plan become unavailable until you upgrade again.",
  },
  {
    title: "Is there a setup fee?",
    content:
      "No setup fee on self-serve plans. Enterprise includes a guided, free migration if you're moving from another platform.",
  },
  {
    title: "Can I cancel anytime?",
    content:
      "Yes, no lock-in contracts. Cancel anytime from your billing settings and you won't be billed again.",
  },
  {
    title: "Which plan includes staff accounts and roles?",
    content:
      "Every paid plan supports inviting your team with role-based permissions — manager, sales, inventory, support, and more.",
  },
  {
    title: "What plan do I need for discounts and SMS campaigns?",
    content:
      "Discount codes, loyalty, and SMS campaigns are available from the Growth plan up. Email campaigns start at Starter.",
  },
  {
    title: "Can I sell from more than one location?",
    content:
      "Multi-location inventory, POS, and bundles are available on Growth and above, so you can track stock across more than one store or warehouse.",
  },
  {
    title: "Do you connect to accounting tools like Zoho?",
    content:
      "Yes — Zoho Books and Invoices sync is available on Pro and Enterprise plans.",
  },
  {
    title: "Can developers build on top of SalesCenta?",
    content:
      "Yes — API access and webhooks are available on Pro and Enterprise plans, so you can connect your own tools and workflows.",
  },
  {
    title: "What plan includes abandoned cart recovery?",
    content:
      "Abandoned cart recovery is available on Pro and Enterprise plans, so you can automatically follow up on carts customers leave behind.",
  },
  {
    title: "What analytics do I get, and on which plan?",
    content:
      "Every plan includes basic order and revenue tracking. Deep analytics, revenue reports, and pixel integrations like Google Analytics and Meta Pixel are available from Growth up.",
  },
];

function AccordionColumn({
  items,
  activeIndex,
  onToggle,
}: {
  items: { title: string; content: string; index: number }[];
  activeIndex: number;
  onToggle: (index: number) => void;
}) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.title}
          className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
        >
          <h2 className="text-base font-semibold">
            <button
              type="button"
              onClick={() => onToggle(item.index)}
              className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                activeIndex === item.index
                  ? "bg-gray-50 dark:bg-slate-800 text-primary"
                  : ""
              }`}
              aria-expanded={activeIndex === item.index}
            >
              <span>{item.title}</span>
              <svg
                className={`${
                  activeIndex === item.index ? "rotate-180" : "rotate-270"
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
          {activeIndex === item.index && (
            <div className="p-5">
              <p className="text-slate-400 dark:text-gray-400">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PricingFaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const indexed = faqItems.map((item, index) => ({ ...item, index }));
  const half = Math.ceil(indexed.length / 2);
  const leftColumn = indexed.slice(0, half);
  const rightColumn = indexed.slice(half);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7.5">
      <AccordionColumn
        items={leftColumn}
        activeIndex={activeIndex}
        onToggle={toggleAccordion}
      />
      <AccordionColumn
        items={rightColumn}
        activeIndex={activeIndex}
        onToggle={toggleAccordion}
      />
    </div>
  );
}
