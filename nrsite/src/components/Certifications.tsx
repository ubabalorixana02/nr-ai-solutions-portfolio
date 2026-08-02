import { certificates } from "@/lib/documents";
import PdfLinkButton from "./PdfLinkButton";
import Reveal from "./Reveal";

export default function Certifications() {
  const featured = certificates.filter((c) => c.featured);
  const rest = certificates.filter((c) => !c.featured);

  return (
    <section id="certifications" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Qualifications</p>
        <h2 className="section-title">
          My <em>Certifications</em>
        </h2>
        <div className="divider" />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...featured, ...rest].map((c, i) => (
          <Reveal key={c.name} delay={Math.min(i * 0.03, 0.3)} className="card flex items-center justify-between gap-3 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl" aria-hidden="true">🏅</span>
              <div>
                <p className="text-sm font-medium text-heading">{c.name}</p>
                <p className="text-xs text-mid">{c.issuer}</p>
              </div>
            </div>
            <PdfLinkButton
              file={c.file}
              name={c.name}
              ariaLabel={`View ${c.name} certificate`}
              className="shrink-0 rounded-full border border-rose px-3 py-1.5 text-[0.65rem] uppercase tracking-wide text-roseText transition hover:bg-roseDeep hover:text-white hover:border-roseDeep"
            >
              View
            </PdfLinkButton>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
