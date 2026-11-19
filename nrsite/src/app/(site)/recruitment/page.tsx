import type { Metadata } from "next";
import Link from "next/link";
import {
  UserSearch,
  ClipboardCheck,
  MessageCircle,
  CalendarClock,
  ListChecks,
  Database,
  Users,
  UserCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recruitment & Talent Support",
  description:
    "Practical recruitment administration and coordination support from NR AI Solutions, from candidate screening and scheduling through onboarding.",
  alternates: { canonical: `${SITE_URL}/recruitment` },
};

const services = [
  {
    title: "Candidate Sourcing Support",
    desc: "Help organise and support candidate sourcing activities based on the client's requirements.",
    icon: UserSearch,
  },
  {
    title: "CV & Application Screening",
    desc: "Administrative screening against client-provided criteria.",
    icon: ClipboardCheck,
  },
  {
    title: "Candidate Communication",
    desc: "Professional candidate updates, follow-ups and coordination.",
    icon: MessageCircle,
  },
  {
    title: "Interview Scheduling",
    desc: "Coordinate interview times and communication between candidates and hiring teams.",
    icon: CalendarClock,
  },
  {
    title: "Recruitment Trackers",
    desc: "Maintain organised candidate pipelines, statuses and recruitment records.",
    icon: ListChecks,
  },
  {
    title: "ATS Administration",
    desc: "Support data entry, updates and administrative workflow within existing ATS platforms.",
    icon: Database,
  },
  {
    title: "Candidate Pipeline Management",
    desc: "Keep recruitment stages and candidate information organised.",
    icon: Users,
  },
  {
    title: "Onboarding Administration",
    desc: "Support the administrative side of moving selected candidates into onboarding.",
    icon: UserCheck,
  },
];

const process = [
  { number: "01", title: "Vacancy", desc: "Role requirements and recruitment administration setup." },
  { number: "02", title: "Applications", desc: "Organise incoming applications and candidate information." },
  { number: "03", title: "Screening", desc: "Support screening against agreed client criteria." },
  { number: "04", title: "Shortlist", desc: "Maintain candidate records and prepare information for the hiring team." },
  { number: "05", title: "Interview", desc: "Coordinate interview scheduling and candidate communication." },
  { number: "06", title: "Onboarding", desc: "Support the administrative transition after selection." },
];

const whoThisSupports = [
  "Small businesses hiring as they grow",
  "Founders managing recruitment alongside operations",
  "Recruitment agencies needing administrative capacity",
  "HR teams needing additional coordination support",
  "Remote teams managing distributed hiring processes",
];

export default function RecruitmentPage() {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <Reveal>
          <p className="section-tag text-center">Recruitment &amp; Talent Support</p>
          <h1 className="section-title text-center">
            Keep your recruitment process <em>moving</em>.
          </h1>
          <div className="divider mx-auto" />
          <p className="mx-auto mb-4 max-w-2xl text-center text-[0.95rem] leading-relaxed text-mid">
            Practical recruitment administration and coordination that helps your team stay
            organised from vacancy to onboarding.
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-center text-xs leading-relaxed text-mid/70">
            NR AI Solutions provides recruitment administration and coordination support —
            helping your team stay organised through the hiring process. Hiring decisions,
            offers, and employment relationships remain with your business throughout.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/start-hiring" className="btn-solid">Start Hiring</Link>
            <Link href="/consultation" className="btn-ghost">Work With Us</Link>
            <Link href="/quote" className="btn-ghost">Request a Quote</Link>
          </div>
        </Reveal>

        {/* Services */}
        <Reveal>
          <div className="mt-20">
            <p className="section-tag text-center">What&apos;s Included</p>
            <h2 className="section-title text-center">
              Recruitment <em>Support Services</em>
            </h2>
            <div className="divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.05, 0.35)} className="card card-glow group px-6 py-7">
              <s.icon
                size={24}
                className="text-rose transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mt-3 font-display text-lg text-heading">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mid">{s.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-mid/70">
            Recruitment support is administrative and coordination-based — final candidate
            decisions and hiring authority remain with your team at every stage.
          </p>
        </Reveal>

        {/* Process */}
        <Reveal>
          <div className="mt-20">
            <p className="section-tag text-center">How It Works</p>
            <h2 className="section-title text-center">
              Vacancy to <em>Onboarding</em>
            </h2>
            <div className="divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {process.map((step, i) => (
            <Reveal key={step.number} delay={Math.min(i * 0.05, 0.35)} className="card px-4 py-5 text-center">
              <span className="font-display text-sm text-roseText/70" aria-hidden="true">{step.number}</span>
              <h3 className="mt-1 font-display text-base text-heading">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-mid">{step.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-mid/70">
            Your team retains final hiring decisions and offers at every step — NR AI Solutions
            keeps the process organised and moving.
          </p>
        </Reveal>

        {/* Who this supports */}
        <Reveal>
          <div className="mt-20">
            <p className="section-tag text-center">Who This Supports</p>
            <h2 className="section-title text-center">
              Built for Growing <em>Teams</em>
            </h2>
            <div className="divider mx-auto" />
          </div>
        </Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {whoThisSupports.map((item, i) => (
            <Reveal key={item} as="li" delay={Math.min(i * 0.06, 0.3)} className="card flex items-center gap-3 px-5 py-4 text-sm text-heading">
              <span className="text-roseText" aria-hidden="true">✓</span> {item}
            </Reveal>
          ))}
        </ul>

        {/* Positioning */}
        <Reveal>
          <div className="card card-glow mx-auto mt-20 max-w-3xl px-8 py-10 text-center md:px-12">
            <p className="font-display text-2xl leading-snug text-heading md:text-[1.75rem]">
              Recruitment support without adding{" "}
              <span className="italic text-roseText">another full-time admin workload</span>.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mid">
              Organised records, timely candidate communication and clear coordination — so your
              recruitment process stays responsive and on track, without pulling your team away
              from the work only they can do.
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="card card-glow mx-auto mt-20 flex max-w-2xl flex-col items-center gap-3 px-8 py-8 text-center">
            <p className="font-display text-xl text-heading">Need recruitment support?</p>
            <p className="max-w-md text-sm text-mid">
              Tell us what your hiring process needs, and we&apos;ll discuss where NR AI
              Solutions can support your team.
            </p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
              <Link href="/start-hiring" className="btn-solid">Start Hiring</Link>
              <Link href="/consultation" className="btn-ghost">Work With Us</Link>
              <Link href="/quote" className="btn-ghost">Request a Quote</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
