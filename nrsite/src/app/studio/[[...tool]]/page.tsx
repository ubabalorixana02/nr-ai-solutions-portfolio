"use client";

/**
 * Catch-all route that mounts the Sanity Studio editor at /studio.
 * This route is intentionally outside the (site) route group, so it does
 * NOT get the marketing site's Navbar/Footer/Tailwind styling — Studio
 * needs full-viewport control and its own styling to render correctly.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
