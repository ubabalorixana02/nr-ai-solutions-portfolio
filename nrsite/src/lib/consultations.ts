// Pricing/consultation-tier data — separate from validation.ts since these
// are no longer just form-option strings, they carry price/duration too.
// Single source of truth, consumed by ConsultationForm.tsx.
//
// `priceZAR` is the canonical price in South African Rand (whole Rand, no
// decimals) — this is the only source of truth for what a consultation
// costs. Any other currency shown in the UI (see src/lib/currency.ts) is a
// converted *estimate* derived from this number at display time; it never
// replaces or overwrites it.

export type ConsultationTier = {
  slug: string;
  label: string;
  minutes: number;
  priceZAR: number;
  description: string;
};

export const consultationTiers: ConsultationTier[] = [
  {
    slug: "quick",
    label: "20-Minute Quick Consultation",
    minutes: 20,
    priceZAR: 150,
    description:
      "A short consultation for discussing a specific question, requirement, or initial business need.",
  },
  {
    slug: "strategy",
    label: "30-Minute Strategy Consultation",
    minutes: 30,
    priceZAR: 250,
    description:
      "A focused session for discussing administration, customer support, websites, digital workflows, automation, or business-process challenges.",
  },
  {
    slug: "business-workflow",
    label: "60-Minute Business & Workflow Consultation",
    minutes: 60,
    priceZAR: 450,
    description:
      "A deeper consultation for reviewing processes, systems, workflow opportunities, digital solutions, website requirements, or administrative challenges.",
  },
];
