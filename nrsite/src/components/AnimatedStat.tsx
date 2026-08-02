"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts up from 0 to the numeric part of `value` when scrolled into view.
 * Handles values like "5+", "20+", "100%" by animating the number and
 * re-appending whatever suffix followed it.
 */
export default function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : "0");

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView || target === null || shouldReduceMotion) {
      if (shouldReduceMotion) setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target) + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, suffix, shouldReduceMotion, value]);

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card flex flex-col items-center justify-center px-4 py-8 text-center"
    >
      <span ref={ref} className="font-display text-3xl text-rose">
        {display}
      </span>
      <span className="mt-1 text-xs uppercase tracking-wide text-mid">{label}</span>
    </motion.div>
  );
}
