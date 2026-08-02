import { Target, Users, Sparkles, TrendingUp, Heart } from "lucide-react";
import Reveal from "./Reveal";

const paragraphs = [
  "Hi, I'm Nolubabalo Rixana—a detail-oriented Virtual Assistant, Administrative Professional, and AI Productivity Specialist with a passion for helping businesses simplify their operations and work more efficiently.",
  "I combine strong administrative expertise with modern AI tools and workflow automation to help entrepreneurs, startups, and growing businesses save time, improve productivity, and stay organised. Whether it's streamlining everyday tasks, designing websites, supporting customers, managing business operations, or creating intelligent AI solutions, I enjoy building systems that make work easier.",
  "Currently completing my Bachelor of Arts in Government, Administration and Development at the University of South Africa (UNISA), I continuously invest in expanding my knowledge through professional certifications in customer service, virtual assistance, workplace safety, Microsoft technologies, and AI productivity.",
  "What sets me apart is my curiosity and willingness to learn. I enjoy exploring emerging technologies, experimenting with automation tools, and turning ideas into practical solutions. Every project I work on is approached with professionalism, creativity, and a commitment to delivering meaningful results.",
  "Outside of work, I enjoy nature, lifelong learning, and discovering new ways technology can empower people and businesses. I believe great systems create more time for what matters most—and that's exactly what I strive to build for every client.",
];

const highlights = [
  "Executive & Administrative Support",
  "Customer Support & CRM Systems",
  "AI Productivity & Prompt Engineering",
  "Google AI Essentials · CAPACITI AI Skills Programme",
  "Continuous Learning & Attention to Detail",
  "Workflow Improvement & Problem Solving",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Get to Know Me</p>
        <h2 className="section-title">
          Who I <em>Am</em>
        </h2>
        <div className="divider" />
      </Reveal>

      <Reveal>
        <div className="max-w-3xl space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[0.95rem] leading-relaxed text-mid">
              {p}
            </p>
          ))}
        </div>
      </Reveal>

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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-roseText">My Mission</p>
              <span className="mt-1 block h-0.5 w-10 bg-rose" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
            <p className="font-display text-2xl leading-snug text-heading md:text-[1.75rem]">
              Empowering businesses through{" "}
              <span className="italic text-roseText">smart systems</span>,{" "}
              <span className="italic text-roseText">AI</span>, and{" "}
              <span className="italic text-roseText">meaningful human support</span>.
            </p>

            <div className="space-y-4 border-rosePale text-sm leading-relaxed text-mid md:border-l md:pl-10">
              <p>
                My mission is to help businesses embrace smarter ways of working through
                reliable administrative support, AI-powered solutions, and thoughtful digital
                experiences.
              </p>
              <p>
                I believe technology should simplify work, not complicate it — creating more
                time for growth, creativity, and impact.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-rosePale pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "People First", desc: "I value relationships, trust, and clear communication." },
              { icon: Sparkles, title: "Smarter Work", desc: "I use AI and automation to save time and eliminate busywork." },
              { icon: TrendingUp, title: "Continuous Growth", desc: "I am committed to learning, adapting, and improving every single day." },
              { icon: Heart, title: "Meaningful Impact", desc: "I care about helping people and businesses achieve their goals." },
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
