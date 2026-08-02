import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import logoMark from "../../public/brand/logo-mark.png";
import { SITE_ROLES } from "@/lib/site";

export default function Footer() {
  return (
    <div className="relative">
      {/* Wave divider — fill matches the current page background (theme-
          aware) so it reads as a seamless transition into the navy footer
          below, in both light and dark mode. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[40px] w-full fill-cream"
      >
        <path d="M0,32 C240,60 480,0 720,16 C960,32 1200,56 1440,24 L1440,60 L0,60 Z" />
      </svg>

      <footer className="bg-navy px-6 pb-12 pt-2 text-blushPale md:px-12">
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                {/* Logo sits on a light chip — its navy ink would be invisible
                    directly on this navy background. */}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF9F6]">
                  <Image src={logoMark} alt="" className="h-8 w-8 object-contain" />
                </span>
                <p className="font-display text-2xl text-white">Nolubabalo Rixana</p>
              </div>
              <p className="mt-2 text-sm text-blushPale/80">
                {SITE_ROLES.slice(0, 2).join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link href="/blog" className="hover:text-white">The Productivity Journal</Link></li>
                <li><Link href="/consultation" className="hover:text-white">Book a Consultation</Link></li>
                <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Legal</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
                <li><Link href="/legal" className="hover:text-white">All Policies</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Nolubabalo Rixana. All rights reserved.</p>
            <a href="#home" className="hover:text-white">Back to Top ↑</a>
          </div>
        </Reveal>
      </footer>
    </div>
  );
}
