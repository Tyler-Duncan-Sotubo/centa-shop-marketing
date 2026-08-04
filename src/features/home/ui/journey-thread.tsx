"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// A single SVG path runs down the page, drawing in as the visitor scrolls —
// visually threading every feature section together instead of each one
// sitting in isolation. Renders on top of the section stack (z-0, sections
// use z-10+) rather than inside any one section, so it survives across
// section boundaries without each section needing to know about its
// neighbours.
export default function JourneyThread({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!targetRef.current) return;
    const el = targetRef.current;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [targetRef]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 20%", "end 80%"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  // A gentle S-curve so the line reads as organic rather than a ruler-straight
  // divider — drifts left/right across a narrow band roughly under the
  // section badges, staying subtle at typical content widths.
  const width = 40;
  const midX = width / 2;
  const amplitude = 16;
  const segments = 8;
  const points: string[] = [`M ${midX} 0`];
  for (let i = 1; i <= segments; i++) {
    const y = (height / segments) * i;
    const x = midX + (i % 2 === 0 ? amplitude : -amplitude) * 0.5;
    const prevY = (height / segments) * (i - 1);
    const cy = (prevY + y) / 2;
    points.push(`Q ${x} ${cy} ${midX} ${y}`);
  }
  const d = points.join(" ");

  if (!height) return null;

  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -z-1 hidden lg:block"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 8"
        className="text-primary/15"
      />
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-primary/70"
        style={{ pathLength }}
      />
    </svg>
  );
}

// Small pulsing node marker used at the top of each threaded section to
// mark it as a stop along the line — lightweight, no layout impact.
export function ThreadNode() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="relative mx-auto mb-2 hidden lg:flex size-3 items-center justify-center"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-primary/30"
        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative size-2 rounded-full bg-primary" />
    </div>
  );
}
