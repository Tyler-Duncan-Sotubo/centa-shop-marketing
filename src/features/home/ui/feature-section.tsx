"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ThreadNode } from "./journey-thread";

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export type FeatureTag = { icon: IconType; label: string };

export default function FeatureSection({
  eyebrow,
  title,
  desc,
  tags,
  visual,
  href = "/page-aboutus",
  reverse = false,
  tone = "plain",
}: {
  eyebrow: string;
  title: string;
  desc: string;
  tags: FeatureTag[];
  visual: React.ReactNode;
  href?: string;
  reverse?: boolean;
  tone?: "plain" | "tint";
}) {
  return (
    <section
      className={`relative py-14 md:py-20 ${tone === "tint" ? "bg-gray-50/70 dark:bg-slate-800/40" : ""}`}
    >
      <div className="container relative">
        <ThreadNode />
        <div
          className={`grid md:grid-cols-2 items-center gap-10 ${reverse ? "" : ""}`}
        >
          <motion.div
            className={reverse ? "md:order-2" : ""}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={revealVariants}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              {eyebrow}
            </p>
            <h3 className="mb-3 md:text-2xl text-xl font-semibold leading-snug">
              {title}
            </h3>
            <p className="text-slate-400 text-sm md:text-base">{desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => {
                const TagIcon = tag.icon;
                return (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium px-3 py-1.5"
                  >
                    <TagIcon className="size-3.5" />
                    {tag.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-5">
              <Link
                href={href}
                className="relative inline-flex items-center font-semibold tracking-wide align-middle text-sm text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:inset-e-0 hover:after:inset-e-auto after:bottom-0 after:inset-s-0 after:duration-500 text-primary hover:text-primary after:bg-primary duration-500"
              >
                Find Out More <MdKeyboardArrowRight className="text-lg ms-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={reverse ? "md:order-1" : ""}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
