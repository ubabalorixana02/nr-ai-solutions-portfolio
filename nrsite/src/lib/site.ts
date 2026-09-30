// Single source of truth for site-wide constants used in metadata, sitemap,
// robots.txt and structured data. Falls back to the production domain if
// NEXT_PUBLIC_SITE_URL isn't set (e.g. in local dev or a preview deploy,
// set this env var so canonical URLs / OG tags point at the right host).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://nolubabalorixana.com";

// Personal/founder identity — kept separate from the company identity
// below so the two are never conflated. Still consumed directly by several
// components (Navbar, Footer, Hero, PersonJsonLd, opengraph-image) that are
// out of scope for this phase, so this stays exactly as it was.
export const SITE_NAME = "Nolubabalo Rixana";

// The rotating role list shown in the Hero, and reused wherever the site
// needs to describe "what she does" (structured data, social share image)
// so these never drift out of sync with each other.
export const SITE_ROLES = [
  "Virtual Assistant",
  "AI Productivity Specialist",
  "Workflow Automation",
  "Customer Support",
  "HR Administration",
  "Lead Generation",
] as const;

export const SITE_DESCRIPTION =
  "NR AI Solutions provides administrative, customer support, recruitment coordination and practical automation solutions for growing businesses.";

// --- Company brand identity (NR AI Solutions) ---------------------------
// Added in Phase 4A.1. Deliberately separate from SITE_NAME/founder
// identity above so the company and founder can each be referenced
// independently across the site without one overwriting the other.

export const COMPANY_NAME = "NR AI Solutions";

export const COMPANY_TAGLINE = "Smart Support. Better Systems.";

export const FOUNDER_NAME = "Nolubabalo Rixana";

export const FOUNDER_TITLE = "Founder & Managing Director";

// Clean, company-level representation of the four primary service pillars.
// Not yet consumed anywhere — Services.tsx is out of scope for this phase.
// Prepared here as data for a later phase to wire up.
export const SERVICE_PILLARS = [
  { number: "01", title: "Administrative & Operations" },
  { number: "02", title: "Customer Support" },
  { number: "03", title: "Recruitment & Talent" },
  { number: "04", title: "Automation & AI" },
] as const;
