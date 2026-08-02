// Single source of truth for site-wide constants used in metadata, sitemap,
// robots.txt and structured data. Falls back to the production domain if
// NEXT_PUBLIC_SITE_URL isn't set (e.g. in local dev or a preview deploy,
// set this env var so canonical URLs / OG tags point at the right host).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://nolubabalorixana.com";

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
  "Creating smarter systems for modern businesses through AI, administration, customer support, workflow automation, and digital innovation.";
