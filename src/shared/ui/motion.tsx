"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Fades + slides a block up as it scrolls into view. Use for section
 * headers, standalone blocks — anything that isn't part of a grid that
 * should stagger together (use FadeInStagger + StaggerItem for those). */
export function FadeInUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariants}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a grid/list of items so children (wrapped in StaggerItem) reveal
 * one after another instead of all at once. */
export function FadeInStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

/** A single item inside FadeInStagger — also works standalone with its
 * own viewport trigger if not nested in a stagger container. */
export function StaggerItem({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
