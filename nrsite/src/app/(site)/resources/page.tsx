import type { Metadata } from "next";
import { resumes, certificates } from "@/lib/documents";
import PdfLinkButton from "@/components/PdfLinkButton";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download centre for resume and certificates — view-only PDF access.",
  alternates: { canonical: `${SITE_URL}/resources` },
};

export default function ResourcesPage() {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <p className="section-tag">Download Centre</p>
      <h1 className="section-title">Resources</h1>
      <div className="divider" />
      <p className="mb-10 max-w-xl text-sm text-mid">
        All documents open in a secure, view-only viewer — perfect for a quick review before
        reaching out.
      </p>

      <h2 className="mb-4 font-display text-2xl text-heading">Resume</h2>
      <div className="mb-12 flex flex-wrap gap-4">
        {resumes.map((r) => (
          <PdfLinkButton
            key={r.file}
            file={r.file}
            name={r.name}
            ariaLabel={r.label}
            className="btn-ghost"
          >
            📄 {r.label}
          </PdfLinkButton>
        ))}
      </div>

      <h2 className="mb-4 font-display text-2xl text-heading">Certificates</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <div key={c.name} className="card flex items-center justify-between gap-3 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-heading">{c.name}</p>
              <p className="text-xs text-mid">{c.issuer}</p>
            </div>
            <PdfLinkButton
              file={c.file}
              name={c.name}
              ariaLabel={`View ${c.name} certificate`}
              className="shrink-0 rounded-full border border-rose px-3 py-1.5 text-[0.65rem] uppercase tracking-wide text-roseText transition hover:bg-roseDeep hover:text-white hover:border-roseDeep"
            >
              View
            </PdfLinkButton>
          </div>
        ))}
      </div>
    </main>
  );
}
