"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import logoFull from "../../public/brand/logo-full.png";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative grid min-h-[90vh] grid-cols-1 items-center gap-10 overflow-hidden bg-surface px-6 pt-16 md:grid-cols-2 md:px-12">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-tag">South Africa-based · Supporting clients internationally</p>
        <h1 className="mt-3 font-display text-4xl uppercase leading-tight text-heading md:text-6xl">
          {COMPANY_TAGLINE}
        </h1>
        <p className="mt-3 max-w-lg font-display text-xl text-roseText md:text-2xl">
          The operational support behind ambitious businesses.
        </p>
        <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mid">
          Administrative support. Customer experience. Recruitment coordination. Smarter workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/consultation" className="btn-solid">Work With Us</Link>
          <Link href="/#services" className="btn-ghost">Explore Services</Link>
        </div>
      </motion.div>

      <motion.div
        className="relative flex items-center justify-center"
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Soft glow behind the logo for depth — purely decorative */}
        <div
          aria-hidden="true"
          className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-rose/30 to-navy/20 blur-3xl md:h-96 md:w-96"
        />

        {/* One subtle accent ring — the logo already has its own arc built
            in, so a single slow-rotating ring adds depth without competing
            with it. */}
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="h-[24rem] w-[24rem] rounded-full border border-dashed border-rose/25 md:h-[29rem] md:w-[29rem]"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Fixed-light medallion behind the logo — its navy ink would
            blend into a dark page background otherwise, same issue as the
            footer chip above. This one stays light in both themes on
            purpose, like a printed seal.
            Sized larger than the logo box below (previously smaller, which
            let the logo overflow its backing and look cramped) so the full
            NR AI Solutions lockup has visible breathing room around it. */}
        <div
          aria-hidden="true"
          className="absolute h-72 w-72 rounded-full bg-[#FFF9F6] shadow-inner md:h-[21rem] md:w-[21rem]"
        />

        <Image
          src={logoFull}
          alt={`${COMPANY_NAME} logo`}
          priority
          className="relative h-64 w-64 object-contain drop-shadow-xl md:h-80 md:w-80"
        />
      </motion.div>
    </section>
  );
}
