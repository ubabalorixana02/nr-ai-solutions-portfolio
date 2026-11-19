import type { Metadata } from "next";
import { certificates } from "@/lib/documents";
import PdfLinkButton from "@/components/PdfLinkButton";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certificates & Training",
  description: "Professional training, certifications and learning resources.",
  alternates: { canonical: `${SITE_URL}/resources` },
};

export default function ResourcesPage() {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <p className="section-tag">Professional Resources</p>
      <h1 className="section-title">Certificates & Training</h1>
      <div className="divider" />
      <p className="mb-10 max-w-xl text-sm text-mid">
        Explore selected professional certifications and training completed
        to support our administrative, customer service, recruitment and
        technology services.
      </p>

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
