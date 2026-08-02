import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Separate from lib/client.ts on purpose: that one is safe to use anywhere
// (read-only, optionally uses a Viewer-permission token). This one requires
// a Create/Editor-permission token and can WRITE to your dataset — the
// `import "server-only"` line makes it a build error if this ever gets
// imported into a Client Component by accident, which would otherwise leak
// the write token to every visitor's browser.
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // writes must never go through the read-only CDN cache
  token: process.env.SANITY_API_WRITE_TOKEN,
});
