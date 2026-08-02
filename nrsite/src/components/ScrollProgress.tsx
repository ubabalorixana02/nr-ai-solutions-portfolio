"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// A thin progress bar pinned under the nav, filling as you scroll down the
// page. Framer's useScroll + useSpring do the actual math — this is just
// wiring, not a custom scroll listener.
export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  // Reduced motion doesn't mean "no progress bar" here — a static fill is
  // useful information, not just decoration. Only the spring smoothing is
  // skipped.
  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-navy to-rose"
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
    />
  );
}
