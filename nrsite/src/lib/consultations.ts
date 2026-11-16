// Consultation pricing — the single source of truth for both regions.
// South African clients are quoted in ZAR; international clients in USD.
// These are display prices. Payment processing is not yet enabled.

export type ConsultationTier = {
  slug: string;
  label: string;
  minutes: number;
  priceZAR: number;
  priceUSD: number;
  description: string;
};

export const consultationTiers: ConsultationTier[] = [
  {
    slug: "quick",
    label: "20-Minute Quick Consultation",
    minutes: 20,
    priceZAR: 250,
    priceUSD: 50,
    description:
      "A short consultation for discussing a specific question, requirement, or initial business need.",
  },
  {
    slug: "strategy",
    label: "30-Minute Strategy Consultation",
    minutes: 30,
    priceZAR: 450,
    priceUSD: 75,
    description:
      "A focused session for discussing administration, customer support, websites, digital workflows, automation, or business-process challenges.",
  },
  {
    slug: "business-workflow",
    label: "60-Minute Business & Workflow Consultation",
    minutes: 60,
    priceZAR: 750,
    priceUSD: 150,
    description:
      "A deeper consultation for reviewing processes, systems, workflow opportunities, digital solutions, website requirements, or administrative challenges.",
  },
];
