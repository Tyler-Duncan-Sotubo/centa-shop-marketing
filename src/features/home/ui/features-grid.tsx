import Link from "next/link";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { IconType } from "react-icons";
import {
  HiOutlineTemplate,
  HiOutlineTag,
  HiOutlineOfficeBuilding,
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
    icon: HiOutlineOfficeBuilding,
    title: "Multiple stores, one system",
    desc: "POS for every physical location, wholesale quotes for bulk buyers, and stock that stays accurate across all of it — no separate tools to reconcile.",
    color: "#635bff",
  },
  {
    icon: HiOutlineTag,
    title: "Marketing that runs itself",
    desc: "Discount codes, email and SMS campaigns, and automatic follow-ups for abandoned carts — fewer sales slip away.",
    color: "#7c3aed",
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

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function FeaturesGrid() {
  return (
    <motion.div
      className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-7.5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={gridVariants}
    >
      {features.map((item) => {
        const ItemIcon = item.icon;
        return (
          <motion.div
            key={item.title}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center"
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
          </motion.div>
        );
      })}
    </motion.div>
  );
}
