import { Target, Users, Sparkles, TrendingUp, Heart } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import founderPhoto from "../../public/founder/nolubabalo-rixana.png";
import { COMPANY_NAME, FOUNDER_NAME, FOUNDER_TITLE } from "@/lib/site";

// Lead founder quote, styled distinctly from the paragraphs below — kept
// separate from `paragraphs` (rather than being item 0) so it can carry
// its own pull-quote styling without changing how the rest render.
const founderQuote =
  "I built NR AI Solutions around a simple idea: businesses shouldn't have to choose between reliable human support and smarter technology.";

const paragraphs = [
  "NR AI Solutions helps growing businesses stay organised, responsive and efficient — combining administrative and operations support, customer support, recruitment coordination and practical automation into one dependable service.",
  "I am currently completing a Bachelor of Arts in Government, Administration and Development at the University of South Africa (UNISA), with majors in Administration and Development. I continue to strengthen my professional capabilities through training and certifications in Talent Acquisition, customer service, virtual assistance, workplace safety, Microsoft technologies and AI productivity.",
  "My experience spans administrative support, customer communication, correspondence, documentation and operational coordination. I enjoy identifying practical ways to improve workflows, using technology thoughtfully and ensuring that important tasks are handled with care, accuracy and professionalism.",
  "Outside of work, I enjoy nature, lifelong learning, and discovering new ways technology can empower people and businesses. I believe great systems create more time for what matters most—and that's exactly what I strive to build for every client.",
];

const highlights = [
  "Executive & Administrative Support",
  "Talent Acquisition",
  "Customer Support & CRM Systems",
  "AI Productivity & Prompt Engineering",
  "Google AI Essentials · AI Productivity & Responsible AI Training",
  "Continuous Learning & Attention to Detail",
  "Workflow Improvement & Problem Solving",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Meet the Founder</p>
        <h2 className="section-title">{FOUNDER_NAME}</h2>
        <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-roseText">
          {FOUNDER_TITLE}, {COMPANY_NAME}
        </p>
        <div className="divider" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="max-w-3xl font-display text-xl italic leading-snug text-heading md:text-2xl">
              &ldquo;{founderQuote}&rdquo;
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-6 max-w-3xl space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[0.95rem] leading-relaxed text-mid">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Authentic founder photograph — a soft offset card behind it for
            depth, matching the site's existing "light backing" pattern
            (see Hero/Footer logo chips) without reusing the logo's own
            circular motif. Ordered before the biography text on mobile
            (order-1) so the photo appears near the name/title rather than
            after the full bio; desktop keeps its side-by-side placement
            via md:order-2, unaffected by this. */}
        <Reveal className="relative order-1 mx-auto w-full max-w-xs md:order-2 md:mx-0 md:max-w-none">
          <div aria-hidden="true" className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl bg-rosePale md:block" />
          <Image
            src={founderPhoto}
            alt={`${FOUNDER_NAME}, ${FOUNDER_TITLE} at ${COMPANY_NAME}`}
            className="relative w-full rounded-3xl object-cover shadow-xl"
          />
        </Reveal>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h} as="li" delay={Math.min(i * 0.06, 0.3)} className="card flex items-center gap-3 px-5 py-4 text-sm text-heading">
            <span className="text-roseText" aria-hidden="true">✓</span> {h}
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <div className="card card-glow mx-auto mt-10 max-w-4xl overflow-hidden bg-surface px-8 py-10 md:px-12 md:py-12">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-rose/15">
              <Target size={26} className="text-roseText" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseText">Our Mission</p>
              <span className="mt-1 block h-0.5 w-10 bg-rose" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
            <p className="font-display text-2xl leading-snug text-heading md:text-[1.75rem]">
              <span className="italic text-roseText">NR AI Solutions</span> combines reliable
              human support with <span className="italic text-roseText">practical automation</span> to
              help businesses stay organised, responsive and efficient.
            </p>

            <div className="space-y-4 border-rosePale text-sm leading-relaxed text-mid md:border-l md:pl-10">
              <p>
                NR AI Solutions exists to help businesses embrace smarter ways of working —
                through reliable administrative support, AI-powered solutions, and thoughtful
                digital experiences.
              </p>
              <p>
                We believe technology should simplify work, not complicate it — creating more
                time for growth, creativity, and impact.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-rosePale pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "People First", desc: "We value relationships, trust, and clear communication." },
              { icon: Sparkles, title: "Smarter Work", desc: "NR AI Solutions uses automation and AI to save time and eliminate busywork." },
              { icon: TrendingUp, title: "Continuous Growth", desc: "We are committed to learning, adapting, and improving every single day." },
              { icon: Heart, title: "Meaningful Impact", desc: "We care about helping people and businesses achieve their goals." },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/15">
                  <pillar.icon size={20} className="text-roseText" aria-hidden="true" />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-heading">{pillar.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-mid">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
