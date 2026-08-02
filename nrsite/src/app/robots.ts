import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Nothing behind auth exists yet, but this is where a future client
      // portal (per the original blueprint) should be excluded once built.
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
