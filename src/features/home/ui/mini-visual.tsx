"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

// Shared "screen" chrome — a soft glow + rounded frame, matching the hero
// dashboard treatment, so every section's visual reads as one system
// instead of ten different styles.
export function VisualFrame({
  children,
  tint = "primary",
}: {
  children: React.ReactNode;
  tint?: "primary" | "emerald" | "amber" | "violet" | "rose" | "sky";
}) {
  const glow: Record<string, string> = {
    primary: "from-primary/15",
    emerald: "from-emerald-400/15",
    amber: "from-amber-400/15",
    violet: "from-violet-400/15",
    rose: "from-rose-400/15",
    sky: "from-sky-400/15",
  };
  return (
    <div className="relative">
      <div
        className={`absolute -inset-4 md:-inset-6 rounded-3xl bg-gradient-to-br ${glow[tint]} via-transparent to-transparent blur-2xl -z-1`}
        aria-hidden
      />
      <div className="relative rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 p-5 md:p-6 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

// A generic animated stat row — icon, label, value, small trend chip.
// Reused across sections (Sales, Finance, Analytics, Marketing...) with
// different data so the "tech" feel is consistent without being identical.
export function StatRow({
  icon: Icon,
  label,
  value,
  trend,
  delay = 0,
}: {
  icon: IconType;
  label: string;
  value: string;
  trend?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex items-center justify-between border-b border-gray-50 dark:border-gray-800 py-3 last:border-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
    >
      <span className="flex items-center gap-2.5 text-base text-slate-500 dark:text-slate-400">
        <span className="flex items-center justify-center size-8 rounded-lg bg-primary/8 text-primary">
          <Icon className="size-4" />
        </span>
        {label}
      </span>
      <span className="flex items-center gap-2">
        <span className="text-base font-semibold text-slate-700 dark:text-slate-200 tabular-nums">
          {value}
        </span>
        {trend && (
          <span className="text-sm font-medium text-emerald-500">
            {trend}
          </span>
        )}
      </span>
    </motion.div>
  );
}

// Animated horizontal bar — for simple "distribution" style visuals
// (channel split, category breakdown, campaign performance).
export function AnimatedBar({
  label,
  percent,
  color = "var(--color-primary)",
  delay = 0,
}: {
  label: string;
  percent: number;
  color?: string;
  delay?: number;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-1.5">
        <span>{label}</span>
        <span className="font-medium tabular-nums">{percent}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.7, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
