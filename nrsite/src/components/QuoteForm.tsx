"use client";

import { FileText, Mail } from "lucide-react";

// Set after creating a dedicated Google Form for quote requests — same
// pattern as the contact form (see README "Contact & Consultation setup").
// A separate form from the general contact one, since it needs to collect
// project-specific fields (service, timeline, budget range, etc).
const GOOGLE_QUOTE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_QUOTE_FORM_URL;

const fieldsCollected = [
  "Full Name",
  "Business/Company Name",
  "Email Address",
  "Service Required",
  "Project Description",
  "Preferred Timeline",
  "Estimated Budget Range",
  "Preferred Contact Method",
  "Additional Information",
];

export default function QuoteForm() {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
      <div className="card px-6 py-7">
        <FileText size={22} className="text-rose" aria-hidden="true" />
        <h2 className="mt-3 font-display text-xl text-heading">What this form collects</h2>
        <p className="mt-2 text-sm leading-relaxed text-mid">
          This helps Nolubabalo understand your requirements before preparing a quotation. This
          is not a payment form — no payment is collected here.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-mid">
          {fieldsCollected.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="text-roseText" aria-hidden="true">•</span> {f}
            </li>
          ))}
        </ul>
      </div>

      {GOOGLE_QUOTE_FORM_URL ? (
        <div className="card overflow-hidden p-2">
          <iframe
            src={GOOGLE_QUOTE_FORM_URL}
            title="Request a quote"
            width="100%"
            height="900"
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>
      ) : (
        <div className="card flex flex-col items-center justify-center gap-3 px-8 py-16 text-center">
          <p className="font-display text-xl text-heading">Quote form coming soon</p>
          <p className="text-sm text-mid">
            In the meantime, email your requirements directly and I&apos;ll follow up personally.
          </p>
          <a href="mailto:ubabalorixana02@gmail.com" className="btn-solid mt-2">
            <Mail size={16} aria-hidden="true" /> Email Your Requirements
          </a>
        </div>
      )}
    </div>
  );
}
