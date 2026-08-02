// Central place for Sanity env vars, with validation so a missing env var
// fails loudly at build time instead of silently fetching from the wrong
// project. Pre-filled with your actual project ID from the Sanity dashboard
// (org "Ubabalo Rixana", project "The NR Journal") as a fallback default —
// override via .env.local if you ever create a second Sanity project.

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2unp9b2z",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
