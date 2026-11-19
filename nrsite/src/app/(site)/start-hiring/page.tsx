import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Mail,

  BriefcaseBusiness,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE_URL, COMPANY_NAME, FOUNDER_NAME, FOUNDER_TITLE } from "@/lib/site";
import founderPhoto from "../../../../public/founder/nolubabalo-rixana.png";

export const metadata: Metadata = {
  title: "Start Hiring | Employer Hiring Brief",
  description:
    "Start your recruitment enquiry with NR AI Solutions. Download the Employer Hiring Brief or complete the online form to discuss recruitment administration and coordination support.",
  alternates: { canonical: `${SITE_URL}/start-hiring` },
};

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfpK1AoYcxg6YaYKTqd7Gi95NUnCptxKjcYeOfGbpe9BMNsYg/viewform?usp=header";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your company details, vacancy requirements and the recruitment support you're looking for.",
  },
  {
    number: "02",
    title: "We review your enquiry",
    description:
      "We'll review the information and assess how our recruitment administration and coordination services may assist.",
  },
  {
    number: "03",
    title: "Discuss the next steps",
    description:
      "We'll contact you to discuss the proposed scope, service fees, timelines and suitable next steps.",
  },
];

const supportAreas = [
  "Candidate sourcing administration",
  "CV and application screening support",
  "Candidate communication and follow-ups",
  "Interview scheduling and coordination",
  "Recruitment trackers and ATS administration",
  "Onboarding administration",
];

export default function StartHiringPage() {
  return (
    <main id="main-content" className="px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-tag">NR AI Solutions · Recruitment Support</p>
            <h1 className="section-title mt-3">
              Let's make your next hire a <em>well-organised process.</em>
            </h1>
            <div className="divider mx-auto" />
            <p className="mx-auto max-w-2xl text-[0.95rem] leading-relaxed text-mid">
              Every successful recruitment process starts with understanding
              the role, your team and the support you need. Tell us about your
              hiring requirements and let's explore how we can help.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#hiring-brief" className="btn-solid">
                Complete Your Hiring Brief
              </a>
              <Link href="/recruitment" className="btn-ghost">
                Explore Recruitment Services
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Employer options */}
        <Reveal>
          <section id="hiring-brief" className="mt-20 scroll-mt-24">
            <div className="text-center">
              <p className="section-tag">Start Here</p>
              <h2 className="section-title">
                Choose how you'd like to <em>share your requirements.</em>
              </h2>
              <div className="divider mx-auto" />
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-mid">
                Use the printable Employer Hiring Brief or complete the online
                version. Both options help us understand your vacancy and
                recruitment support needs.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="card card-glow flex flex-col px-7 py-8 md:px-9 md:py-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose/15">
                  <FileText size={27} className="text-roseText" aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-roseText">
                  Option 01 · Printable document
                </p>
                <h3 className="mt-2 font-display text-2xl text-heading">
                  Download the Employer Hiring Brief
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mid">
                  Prefer to complete a document at your own pace? Download our
                  branded hiring brief, fill in the relevant sections and
                  email it to our team.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-mid">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-roseText" />
                    Printable A4 PDF
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-roseText" />
                    Company and vacancy details
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-roseText" />
                    Candidate requirements and hiring timeline
                  </li>
                </ul>
                <a
                  href="/documents/NR_AI_Solutions_Employer_Hiring_Brief.pdf"
                  download
                  className="btn-solid mt-8 inline-flex items-center justify-center gap-2"
                >
                  <FileText size={17} aria-hidden="true" />
                  Download Hiring Brief
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <p className="mt-3 text-center text-xs text-mid/70">
                  Email your completed brief to{" "}
                  <a
                    href="mailto:nolubabalo@nraisolutions.co.za"
                    className="text-roseText underline underline-offset-4"
                  >
                    nolubabalo@nraisolutions.co.za
                  </a>
                </p>
              </div>

              <div className="card card-glow flex flex-col border border-rose/30 bg-surface px-7 py-8 md:px-9 md:py-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose/15">
                  <ClipboardList size={27} className="text-roseText" aria-hidden="true" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-roseText">
                  Option 02 · Online form
                </p>
                <h3 className="mt-2 font-display text-2xl text-heading">
                  Complete the Online Hiring Brief
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mid">
                  Prefer an online process? Submit your company and vacancy
                  information through our Employer Hiring Brief form.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-mid">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-roseText" />
                    Convenient online submission
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-roseText" />
                    Structured vacancy information
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-roseText" />
                    Direct enquiry to NR AI Solutions
                  </li>
                </ul>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid mt-8 inline-flex items-center justify-center gap-2"
                >
                  Open Online Hiring Brief
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <p className="mt-3 text-center text-xs text-mid/70">
                  Your submission will help us understand your requirements.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* What we can support */}
        <Reveal>
          <section className="mt-20">
            <div className="text-center">
              <p className="section-tag">How We Can Assist</p>
              <h2 className="section-title">
                Practical support throughout your <em>hiring process.</em>
              </h2>
              <div className="divider mx-auto" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportAreas.map((area, index) => (
                <Reveal
                  key={area}
                  as="div"
                  delay={Math.min(index * 0.05, 0.25)}
                  className="card flex items-center gap-3 px-5 py-4 text-sm text-heading"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-roseText"
                    aria-hidden="true"
                  />
                  {area}
                </Reveal>
              ))}
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-mid/70">
              The exact support provided will depend on your requirements and
              the scope agreed with NR AI Solutions.
            </p>
          </section>
        </Reveal>

        {/* Process */}
        <Reveal>
          <section className="mt-20">
            <div className="text-center">
              <p className="section-tag">What Happens Next</p>
              <h2 className="section-title">
                A clear process, <em>from enquiry onwards.</em>
              </h2>
              <div className="divider mx-auto" />
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={Math.min(index * 0.08, 0.2)}
                  className="card px-6 py-7"
                >
                  <span className="font-display text-3xl text-roseText/70">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mid">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Founder feature */}
        <Reveal>
          <section className="card card-glow mt-20 overflow-hidden px-6 py-8 md:px-10 md:py-10">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_220px]">
              <div>
                <p className="section-tag">A Personal Approach</p>
                <h2 className="mt-2 font-display text-2xl leading-snug text-heading md:text-3xl">
                  Professional coordination. <em className="text-roseText">Thoughtful support.</em>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-mid">
                  {COMPANY_NAME} works with businesses to bring structure,
                  communication and dependable administrative support to
                  recruitment activities. Every enquiry begins with listening
                  to what your team needs.
                </p>
                <p className="mt-4 text-sm font-semibold text-heading">
                  {FOUNDER_NAME}
                </p>
                <p className="text-xs text-mid">{FOUNDER_TITLE}</p>
              </div>
              <div className="relative mx-auto w-full max-w-[190px]">
                <div
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 h-full w-full rounded-3xl bg-rosePale"
                />
                <Image
                  src={founderPhoto}
                  alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE}`}
                  className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Responsibility and privacy */}
        <Reveal>
          <section className="mx-auto mt-16 max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/15">
              <ShieldCheck size={23} className="text-roseText" aria-hidden="true" />
            </div>
            <h2 className="mt-4 font-display text-xl text-heading">
              Clear roles. Responsible recruitment support.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mid">
              NR AI Solutions provides recruitment administration and
              coordination support. Your business retains responsibility for
              candidate selection, final hiring decisions, employment offers
              and employment relationships. An enquiry or brief submission
              does not guarantee placement or create a service agreement.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-mid/70">
              Please do not include sensitive candidate personal information
              in your initial enquiry. Any further information will be
              discussed as appropriate to the agreed scope of support.
            </p>
          </section>
        </Reveal>

        {/* Final CTA */}
        <Reveal>
          <section className="card card-glow mx-auto mt-16 max-w-3xl px-7 py-9 text-center md:px-12 md:py-11">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/15">
              <BriefcaseBusiness size={23} className="text-roseText" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-2xl text-heading md:text-3xl">
              Ready to tell us about your vacancy?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-mid">
              Start with the Employer Hiring Brief. We'll review your
              requirements and be in touch to discuss how we can support you.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#hiring-brief" className="btn-solid">
                Start Your Hiring Enquiry
              </a>
              <a
                href="mailto:nolubabalo@nraisolutions.co.za"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <Mail size={16} aria-hidden="true" />
                Email Us
              </a>
            </div>
            <Link
              href="/recruitment"
              className="mt-6 inline-flex items-center gap-2 text-xs text-roseText underline underline-offset-4"
            >
              Back to Recruitment Services
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
