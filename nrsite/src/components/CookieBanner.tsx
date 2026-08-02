"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Cookie } from "lucide-react";
import { COOKIE_CONSENT_KEY, getCookieConsent, type CookieConsentValue } from "@/lib/cookieConsent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only show if no choice has been recorded yet — checked client-side
    // on mount since localStorage isn't available during server rendering.
    if (getCookieConsent() === null) setVisible(true);
  }, []);

  const choose = (value: CookieConsentValue) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Cookie consent"
          initial={shouldReduceMotion ? undefined : { y: 100, opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[900] mx-auto max-w-xl rounded-2xl border border-rosePale bg-card px-5 py-4 shadow-xl sm:inset-x-auto sm:right-6"
        >
          <div className="flex gap-3">
            <Cookie size={20} className="mt-0.5 shrink-0 text-rose" aria-hidden="true" />
            <div className="flex-1">
              <p className="text-sm text-heading">
                This site keeps cookies to a minimum — no analytics or marketing cookies
                are set. Embedded content (the contact form and booking calendar) may set
                its own cookies via Google.{" "}
                <Link href="/cookie-policy" className="text-roseText underline underline-offset-2">
                  Read the Cookie Policy
                </Link>
                .
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" onClick={() => choose("accepted")} className="btn-solid px-4 py-2 text-[0.7rem]">
                  Accept
                </button>
                <button type="button" onClick={() => choose("declined")} className="btn-ghost px-4 py-2 text-[0.7rem]">
                  Decline Optional Cookies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
