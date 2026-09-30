import Link from "next/link";
import { ClipboardList, Headphones, Users, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

// The four primary business pillars (approved Phase 4B positioning).
// `supporting` is a short, representative list — not exhaustive — kept
// brief so four cards stay visually balanced rather than becoming a wall
// of text.
const pillars = [
  {
    number: "01",
    title: "Administrative & Operations Support",
    desc: "Reliable support behind the scenes.",
    supporting: "Executive assistance, calendar & inbox support, documentation, records management.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Customer Support",
    desc: "Professional communication that keeps customers informed and cared for.",
    supporting: "Customer email support, inbox management, follow-up coordination.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "Recruitment & Talent Support",
    desc: "A smoother journey from vacancy to onboarding.",
    supporting: "Candidate sourcing, CV screening, interview scheduling, ATS administration.",
    icon: Users,
    href: "/recruitment",
  },
  {
    number: "04",
    title: "Automation & AI Solutions",
    desc: "Less repetitive work. More room to grow.",
    supporting: "Workflow automation, AI-assisted processes, practical AI implementation.",
    icon: Sparkles,
  },
];

// Legacy/adjacent services — kept available, deliberately de-emphasized so
// they no longer compete visually with the four primary pillars above.
// No routes or functionality depend on these labels (confirmed: none of
// the service cards link anywhere except the CTA below), so nothing is
// being removed — just re-weighted.
const alsoAvailable = ["Lead Generation", "Wix Website Support", "Resume & LinkedIn Optimisation"];

export default function Services() {
  return (
    <section id="services" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Our Services</p>
        <h2 className="section-title">Services</h2>
        <div className="divider" />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((s, i) => (
          <Reveal key={s.title} delay={Math.min(i * 0.05, 0.35)} className="card card-glow group px-6 py-7">
            <div className="flex items-center gap-3">
              <span className="font-display text-sm text-roseText/70" aria-hidden="true">{s.number}</span>
              <s.icon
                size={26}
                className="text-rose transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-3 font-display text-xl text-heading">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mid">{s.desc}</p>
            <p className="mt-3 text-xs leading-relaxed text-mid/70">{s.supporting}</p>
            {"href" in s && s.href && (
              <Link href={s.href} className="mt-3 inline-block text-xs font-medium text-roseText hover:underline">
                Learn more →
              </Link>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-mid/70">
          Also available: {alsoAvailable.join(" · ")}
        </p>
      </Reveal>

      <Reveal>
        <div className="card card-glow mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 px-8 py-8 text-center">
          <p className="font-display text-xl text-heading">Ready to get started?</p>
          <p className="max-w-md text-sm text-mid">
            Tell us a bit about your project and we&apos;ll prepare a tailored quotation.
          </p>
          <Link href="/quote" className="btn-solid mt-1">Request a Quote</Link>
        </div>
      </Reveal>
    </section>
  );
}
