import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, Cookie, AlertTriangle, Accessibility, Database } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description: "All policies governing this website in one place.",
  alternates: { canonical: `${SITE_URL}/legal` },
};

const pages = [
  { href: "/privacy-policy", title: "Privacy Policy", desc: "What information is collected and how it's used.", icon: Shield },
  { href: "/terms", title: "Terms & Conditions", desc: "The terms governing use of this site and services booked through it.", icon: FileText },
  { href: "/cookie-policy", title: "Cookie Policy", desc: "What cookies this site uses, and how to control them.", icon: Cookie },
  { href: "/disclaimer", title: "Disclaimer", desc: "How to interpret the information on this site.", icon: AlertTriangle },
  { href: "/accessibility", title: "Accessibility Statement", desc: "This site's commitment to accessibility.", icon: Accessibility },
  { href: "/data-request", title: "Data Request", desc: "View, correct, or delete your personal data.", icon: Database },
];

export default function LegalIndexPage() {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="section-tag text-center">Legal</p>
          <h1 className="section-title text-center">Policies &amp; Statements</h1>
          <div className="divider mx-auto" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((p, i) => (
            <Reveal key={p.href} delay={Math.min(i * 0.05, 0.3)}>
              <Link href={p.href} className="card flex items-start gap-3 px-5 py-5">
                <p.icon size={20} className="mt-0.5 shrink-0 text-rose" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg text-heading">{p.title}</p>
                  <p className="mt-1 text-sm text-mid">{p.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
