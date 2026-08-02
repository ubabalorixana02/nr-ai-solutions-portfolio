"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// Next.js re-mounts template.tsx (unlike layout.tsx) on every route change
// within this group, which is exactly what's needed to re-trigger an
// entrance animation per page. Kept deliberately simple — a quick fade,
// not a slide or scale — so it reads as "smooth," not as a loading delay
// on every single click.
export default function SiteTemplate({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
