import { projects, getProject, getAdjacentProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  const url = `${SITE_URL}/projects/${project.slug}`;
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Case Study | Nolubabalo Rixana`,
      description: project.summary,
      url,
      type: "article",
      ...(project.image && { images: [{ url: `${SITE_URL}${project.image}` }] }),
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/projects" className="text-xs uppercase tracking-widest text-roseText">
          ← All Projects
        </Link>

        <p className="section-tag mt-6">{project.category}</p>
        <h1 className="mt-1 font-display text-4xl text-heading md:text-5xl">{project.title}</h1>
        <div className="divider" />

        {project.image && (
          <Reveal>
            <div className="mb-10 overflow-hidden rounded-2xl border border-rosePale">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1600}
                height={900}
                className="w-full object-cover object-top"
                priority
              />
            </div>
          </Reveal>
        )}

        <section className="mb-8">
          <h2 className="mb-2 text-xs uppercase tracking-widest text-roseText">Challenge</h2>
          <p className="leading-relaxed text-mid">{project.challenge}</p>
        </section>

        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-roseText">Solution</h2>
            <p className="leading-relaxed text-mid">{project.solution}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-roseText">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full border border-rosePale bg-card px-3 py-1.5 text-xs text-roseText">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <h2 className="mb-3 text-xs uppercase tracking-widest text-roseText">Features</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <div key={f} className="card flex items-start gap-2 px-4 py-3 text-sm text-heading">
                  <span className="font-semibold text-roseText" aria-hidden="true">✓</span> {f}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-roseText">Results</h2>
            <p className="leading-relaxed text-mid">{project.results}</p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-10">
            <h2 className="mb-2 text-xs uppercase tracking-widest text-roseText">Lessons Learned</h2>
            <p className="leading-relaxed text-mid">{project.lessons}</p>
          </section>
        </Reveal>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener" className="btn-solid">
              View Live Demo
            </a>
          )}
          {project.downloadUrl && (
            <a href={project.downloadUrl} download className="btn-solid">
              {project.downloadLabel ?? "Download"}
            </a>
          )}
          <Link href="/#contact" className="btn-ghost">
            Discuss a Similar Project
          </Link>
        </div>

        {(prev || next) && (
          <nav aria-label="More case studies" className="mt-14 grid gap-3 border-t border-rosePale pt-8 sm:grid-cols-2">
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="card group flex items-center gap-3 px-5 py-4"
              >
                <ArrowLeft size={16} className="shrink-0 text-roseText transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-mid">Previous</p>
                  <p className="font-display text-lg text-heading">{prev.title}</p>
                </div>
              </Link>
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="card group flex items-center justify-end gap-3 px-5 py-4 text-right sm:col-start-2"
              >
                <div>
                  <p className="text-[0.65rem] uppercase tracking-widest text-mid">Next</p>
                  <p className="font-display text-lg text-heading">{next.title}</p>
                </div>
                <ArrowRight size={16} className="shrink-0 text-roseText transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}
