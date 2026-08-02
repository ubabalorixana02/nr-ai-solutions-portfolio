"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/faq";
import Reveal from "./Reveal";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="mx-auto max-w-2xl divide-y divide-rosePale">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${baseId}-button-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <Reveal key={faq.question} delay={Math.min(i * 0.05, 0.3)}>
            <div>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg text-heading">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-roseText transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-mid">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
