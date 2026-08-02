"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Wraps card content with a subtle mouse-tracked 3D tilt — capped to a few
 * degrees so it reads as "premium desk object," not a gimmick. Disabled
 * entirely under prefers-reduced-motion. Nested INSIDE a Reveal wrapper
 * (not merged with it) since Reveal already animates this element's
 * transform for scroll-entrance — keeping them as separate nested elements
 * avoids fighting over the same transform property.
 */
export default function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  // Capped at ~5 degrees — enough to feel alive, not enough to feel like a
  // toy or make card text hard to read while hovering.
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((e.clientX - bounds.left) / bounds.width - 0.5);
    y.set((e.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
