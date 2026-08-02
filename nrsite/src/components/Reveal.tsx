"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Fades + slides content up as it scrolls into view. Respects
 * prefers-reduced-motion by skipping the animation entirely (renders content
 * at its final, visible state immediately) rather than just shortening it —
 * some vestibular conditions are triggered by movement itself, not just its
 * duration.
 *
 * Polymorphic via `as` — defaults to a <div>, but pass as="li" when wrapping
 * a list item so it doesn't insert an invalid <div> between <ol>/<ul> and
 * <li> (which breaks list semantics for screen readers).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
