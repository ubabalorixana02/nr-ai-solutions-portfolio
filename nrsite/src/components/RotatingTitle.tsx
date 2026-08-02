"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function RotatingTitle({ titles }: { titles: string[] }) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If the person prefers reduced motion, don't run the interval at all —
    // just show the first title and stop there.
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [titles.length, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p className="mt-3 text-lg font-medium text-heading/80" aria-hidden="false">
        {titles[0]}
      </p>
    );
  }

  return (
    <div className="mt-3 h-7 overflow-hidden text-lg font-medium text-heading/80" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.p
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {titles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
