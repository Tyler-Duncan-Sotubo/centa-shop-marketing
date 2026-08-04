"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import PageHeroShell from "./page-hero-shell";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PageHero({
  title,
  subtext,
  align = "center",
  children,
}: {
  icon?: IconType;
  label?: string;
  title: React.ReactNode;
  subtext?: React.ReactNode;
  align?: "center" | "left";
  children?: React.ReactNode;
}) {
  return (
    <PageHeroShell>
      <div
        className={`grid grid-cols-1 pb-8 mt-10 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className={`md:text-6xl text-4xl leading-tight font-bold text-black dark:text-white ${
            align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"
          }`}
        >
          {title}
        </motion.h3>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className={`text-slate-400 text-xl mt-5 ${
              align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {subtext}
          </motion.p>
        )}
        {children}
      </div>
    </PageHeroShell>
  );
}
