"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import logoMark from "../../public/brand/logo-mark.png";

const links = [
  { href: "/#about", label: "About", hash: "about" },
  { href: "/#services", label: "Services", hash: "services" },
  { href: "/#experience", label: "Experience", hash: "experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#certifications", label: "Certifications", hash: "certifications" },
  { href: "/blog", label: "Journal" },
  { href: "/consultation", label: "Consultation" },
  { href: "/resources", label: "Resources" },
  { href: "/#contact", label: "Contact", hash: "contact" },
];

const sectionIds = links.filter((l) => l.hash).map((l) => l.hash as string);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlights the nav link for whichever homepage section is currently
  // in the viewport, so the nav reflects where you actually are on the
  // page — not just which link you last clicked.
  useEffect(() => {
    if (!isHome) return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveHash(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (l: (typeof links)[number]) => {
    if (l.hash) return isHome && activeHash === l.hash;
    return pathname === l.href || pathname.startsWith(`${l.href}/`);
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between bg-cream/90 px-6 py-4 backdrop-blur transition-shadow md:px-12 ${
        scrolled ? "shadow-[0_2px_20px_rgba(22,58,112,0.08)]" : ""
      }`}
    >
      <Link href="/" className="flex items-center" aria-label="Nolubabalo Rixana — Home">
        <motion.span
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF9F6]"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={logoMark} alt="" priority className="h-8 w-8 object-contain" />
        </motion.span>
      </Link>

      <ul className="hidden items-center gap-6 lg:flex">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={isActive(l) ? "page" : undefined}
              className={`group relative py-1 text-[0.68rem] uppercase tracking-[0.14em] transition hover:text-roseText ${
                isActive(l) ? "text-roseText" : "text-mid"
              }`}
            >
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-roseText transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  isActive(l) ? "scale-x-100" : ""
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-3 lg:flex">
        <ThemeToggle className="flex h-9 w-9 items-center justify-center rounded-full text-heading transition hover:bg-surface" />
        <Link href="/#contact" className="rounded-full bg-navy px-5 py-2 text-[0.7rem] uppercase tracking-wider text-white transition hover:bg-roseDeep">
          Let&apos;s Connect
        </Link>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <ThemeToggle className="flex h-9 w-9 items-center justify-center rounded-full text-heading transition hover:bg-surface" />
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-nav-menu"
            initial={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full flex w-full flex-col gap-1 overflow-hidden bg-cream px-6 py-2 shadow-lg lg:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="py-2">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l) ? "page" : undefined}
                  className={`block text-sm uppercase tracking-wide transition hover:text-roseText ${
                    isActive(l) ? "text-roseText" : "text-mid"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
