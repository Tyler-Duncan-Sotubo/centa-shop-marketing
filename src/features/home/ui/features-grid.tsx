import Link from "next/link";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import {
  HiOutlineTemplate,
  HiOutlineTag,
  HiOutlineOfficeBuilding,
  HiOutlineChartBar,
  HiOutlineSparkles,
} from "react-icons/hi";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function CardShell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ── WhatsApp chat bubble mini-visual — a self-contained animated loop,
// no static screenshot needed. ─────────────────────────────────────
function WhatsAppMiniVisual() {
  return (
    <div className="relative h-40 rounded-xl bg-emerald-50 dark:bg-emerald-500/5 overflow-hidden">
      <motion.div
        className="absolute left-4 top-4 max-w-[75%] rounded-2xl rounded-bl-sm bg-white dark:bg-slate-800 shadow-sm px-3 py-2 text-xs text-slate-500"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        Hi, is this still available?
      </motion.div>
      <motion.div
        className="absolute right-4 top-16 max-w-[75%] rounded-2xl rounded-br-sm bg-[#25D366] text-white shadow-sm px-3 py-2 text-xs"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        Yes! Here&apos;s the link to checkout ↓
      </motion.div>
      <motion.div
        className="absolute right-4 top-27 flex items-center gap-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm px-3 py-2"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <span className="size-6 rounded bg-primary/10 flex items-center justify-center text-[10px] text-primary font-semibold">
          ₦
        </span>
        <span className="text-xs text-slate-600 dark:text-slate-300">
          Order NGN 50,000 — Pay now
        </span>
      </motion.div>
    </div>
  );
}

// ── Multi-location mini-visual — three animated location pins syncing
// to one stock count. ────────────────────────────────────────────────
function LocationsMiniVisual() {
  const locations = [
    { label: "Store 1", value: "142" },
    { label: "Store 2", value: "98" },
    { label: "Online", value: "215" },
  ];
  return (
    <div className="relative h-40 rounded-xl bg-primary/5 overflow-hidden flex items-center justify-center gap-4 px-4">
      {locations.map((loc, i) => (
        <motion.div
          key={loc.label}
          className="flex-1 rounded-xl bg-white dark:bg-slate-800 shadow-sm p-3 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
        >
          <div className="flex items-center justify-center size-8 mx-auto rounded-full bg-primary/10 mb-2">
            <HiOutlineOfficeBuilding className="w-4 h-4 text-primary" />
          </div>
          <p className="text-[10px] text-slate-400">{loc.label}</p>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {loc.value}
          </p>
        </motion.div>
      ))}
      <motion.div
        className="absolute inset-x-8 top-1/2 h-px bg-primary/20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}

interface SmallFeature {
  icon: typeof HiOutlineTemplate;
  title: string;
  desc: string;
  color: string;
  href?: string;
}

const smallFeatures: SmallFeature[] = [
  {
    icon: HiOutlineTemplate,
    title: "A real branded storefront",
    desc: "Your own site, your own domain, priced in Naira — customised with a live page builder.",
    color: "#e37400",
  },
  {
    icon: HiOutlineTag,
    title: "Marketing that runs itself",
    desc: "Discount codes, campaigns, and automatic abandoned-cart follow-ups.",
    color: "#7c3aed",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real analytics, not guesswork",
    desc: "Revenue, orders, and store performance, plus GA4, Meta Pixel, TikTok Pixel.",
    color: "#00c3f7",
  },
  {
    icon: HiOutlineSparkles,
    title: "Zuri, your AI assistant",
    desc: "Ask about sales, stock, and payments in plain language.",
    color: "#f43f5e",
    href: "/zuri",
  },
];

export default function FeaturesGrid() {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-5 mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={gridVariants}
    >
      {/* Hero card 1 — WhatsApp */}
      <CardShell>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-[#25D366]/10">
            <BsWhatsapp className="w-5 h-5 text-[#25D366]" />
          </div>
          <h4 className="text-lg font-semibold">WhatsApp-native checkout</h4>
        </div>
        <p className="text-slate-400 text-sm mb-5">
          Let customers browse, ask questions, and check out right inside
          WhatsApp — no separate app to learn.
        </p>
        <WhatsAppMiniVisual />
      </CardShell>

      {/* Hero card 2 — Multi-location */}
      <CardShell>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
            <HiOutlineOfficeBuilding className="w-5 h-5 text-primary" />
          </div>
          <h4 className="text-lg font-semibold">Multiple stores, one system</h4>
        </div>
        <p className="text-slate-400 text-sm mb-5">
          POS for every physical location, wholesale quotes for bulk buyers —
          stock stays accurate across all of it.
        </p>
        <LocationsMiniVisual />
      </CardShell>

      {/* Small supporting cards */}
      <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {smallFeatures.map((item) => {
          const ItemIcon = item.icon;
          return (
            <CardShell key={item.title} className="p-6">
              <div
                className="flex items-center justify-center size-11 rounded-full mb-4"
                style={{ backgroundColor: `${item.color}1a` }}
              >
                <ItemIcon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <Link
                href={item.href ?? "#"}
                className="text-base font-medium hover:text-primary duration-300"
              >
                {item.title}
              </Link>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
            </CardShell>
          );
        })}
      </div>
    </motion.div>
  );
}
