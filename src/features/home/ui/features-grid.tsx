import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { IconType } from "react-icons";
import {
  HiOutlineTemplate,
  HiOutlineTag,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineSparkles,
} from "react-icons/hi";

interface Feature {
  icon: IconType;
  title: string;
  desc: string;
  color: string;
  href?: string;
}

const features: Feature[] = [
  {
    icon: BsWhatsapp,
    title: "WhatsApp-native checkout",
    desc: "Let customers browse, ask questions, and check out right inside WhatsApp — no separate app to learn.",
    color: "#25D366",
  },
  {
    icon: HiOutlineTemplate,
    title: "A real branded storefront",
    desc: "Customise your homepage, sections, and SEO with a live page builder — your own site, your own domain, priced in Naira.",
    color: "#e37400",
  },
  {
    icon: HiOutlineTag,
    title: "Marketing that runs itself",
    desc: "Discount codes, email and SMS campaigns, and automatic follow-ups for abandoned carts — fewer sales slip away.",
    color: "#7c3aed",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Staff roles & permissions",
    desc: "Bring your team in with proper access control — manager, sales, inventory, and support roles built in.",
    color: "#635bff",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real analytics, not guesswork",
    desc: "Track revenue, orders, and store performance, plus GA4, Meta Pixel, TikTok Pixel, and more.",
    color: "#00c3f7",
  },
  {
    icon: HiOutlineSparkles,
    title: "Zuri, your AI assistant",
    desc: "Ask about your sales, stock, and payments in plain language — and get step-by-step help using the app.",
    color: "#f43f5e",
    href: "/zuri",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-7.5">
      {features.map((item) => {
        const ItemIcon = item.icon;
        return (
          <div
            key={item.title}
            className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center"
          >
            <div className="flex items-center justify-center size-18 mx-auto rounded-full bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800">
              <ItemIcon className="w-8 h-8" style={{ color: item.color }} />
            </div>

            <div className="mt-6">
              <Link
                href={item.href ?? "#"}
                className="text-xl font-medium hover:text-primary duration-500 ease-in-out"
              >
                {item.title}
              </Link>
              <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
