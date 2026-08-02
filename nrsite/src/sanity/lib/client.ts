import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // The CDN serves cached, slightly-stale content and is faster/cheaper —
  // fine for a blog where a minute of staleness after publishing doesn't
  // matter. Reads always go live-through in development so you see edits
  // immediately while writing.
  useCdn: process.env.NODE_ENV === "production",
  // Only needed if your dataset is private (Sanity's default for new
  // datasets is usually public read access, but double check under
  // Project > API in the Sanity dashboard). If your blog posts aren't
  // showing up, this is the first thing to check — see README.
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "published",
});
