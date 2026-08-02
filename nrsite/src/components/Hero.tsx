"use client";

import { resumes } from "@/lib/documents";
import PdfLinkButton from "./PdfLinkButton";
import Link from "next/link";
import Image from "next/image";
import RotatingTitle from "./RotatingTitle";
import { motion, useReducedMotion } from "framer-motion";
import logoMark from "../../public/brand/logo-mark.png";
import { SITE_ROLES, SITE_DESCRIPTION } from "@/lib/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative grid min-h-[90vh] grid-cols-1 items-center gap-10 overflow-hidden bg-surface px-6 pt-16 md:grid-cols-2 md:px-12">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-tag">South Africa · Remote / Hybrid / On-site</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-heading md:text-6xl">
          Hello, I&apos;m <span className="text-roseText">Nolubabalo Rixana</span>
        </h1>
        <RotatingTitle titles={[...SITE_ROLES]} />
        {/* Single accessible source of truth for the rotating titles above,
            which are aria-hidden since they're a purely decorative flourish. */}
        <span className="sr-only">{SITE_ROLES.join(" · ")}</span>
        <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mid">{SITE_DESCRIPTION}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <PdfLinkButton file={resumes[0].file} name={resumes[0].name} className="btn-solid">
            ⬇ {resumes[0].label}
          </PdfLinkButton>
          <PdfLinkButton file={resumes[1].file} name={resumes[1].name} className="btn-ghost">
            📄 {resumes[1].label}
          </PdfLinkButton>
          <Link href="/#contact" className="btn-ghost">Hire Me</Link>
          <Link href="/consultation" className="btn-ghost">Book Consultation</Link>
          <Link href="/projects" className="btn-ghost">View Projects</Link>
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
            purpose, like a printed seal. */}
        <div
          aria-hidden="true"
          className="absolute h-60 w-60 rounded-full bg-[#FFF9F6] shadow-inner md:h-72 md:w-72"
        />

        <Image
          src={logoMark}
          alt="Nolubabalo Rixana — NR monogram logo"
          priority
          className="relative h-64 w-64 object-contain drop-shadow-xl md:h-80 md:w-80"
        />

        {/* Floating status badge — a small fixed-light chip (like the
            medallion above), so it stays legible regardless of theme rather
            than trying to track the page background. */}
        <motion.div
          className="absolute bottom-6 left-0 flex items-center gap-2 rounded-full bg-[#FFF9F6] px-4 py-2.5 text-xs font-medium text-navy shadow-lg md:bottom-10 md:left-4"
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for new projects
        </motion.div>
      </motion.div>
    </section>
  );
}
