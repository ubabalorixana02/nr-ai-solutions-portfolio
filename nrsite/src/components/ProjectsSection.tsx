import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Selected Work</p>
        <h2 className="section-title">
          Featured <em>Projects</em>
        </h2>
        <div className="divider" />
        <p className="max-w-xl text-[0.92rem] leading-relaxed text-mid">
          A selection of AI-powered tools and workflow demonstrations showing how NR AI
          Solutions approaches administration, customer support and productivity.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.07, 0.35)}>
            <TiltCard className="card card-glow group flex flex-col overflow-hidden">
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-rose to-roseDeep">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-4xl text-white transition-transform duration-300 group-hover:scale-110">
                    {p.emoji}
                  </span>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[0.6rem] uppercase tracking-wider text-roseText">
                  {p.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                <span className="text-[0.65rem] uppercase tracking-widest text-roseText">{p.category}</span>
                <h3 className="font-display text-xl text-heading">{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-mid">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-rosePale px-2.5 py-1 text-[0.65rem] text-roseText">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="rounded-full bg-roseDeep px-4 py-2 text-[0.68rem] uppercase tracking-wider text-white transition hover:bg-navy"
                  >
                    View Case Study
                  </Link>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener"
                      className="rounded-full border border-rose px-4 py-2 text-[0.68rem] uppercase tracking-wider text-roseText transition hover:bg-roseDeep hover:text-white hover:border-roseDeep"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.downloadUrl && (
                    <a
                      href={p.downloadUrl}
                      download
                      className="rounded-full border border-rose px-4 py-2 text-[0.68rem] uppercase tracking-wider text-roseText transition hover:bg-roseDeep hover:text-white hover:border-roseDeep"
                    >
                      {p.downloadLabel ?? "Download"}
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
