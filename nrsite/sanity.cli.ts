import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

// Used by the `sanity` CLI (e.g. `npm run sanity:deploy`) — separate from
// sanity.config.ts, which powers the embedded Studio route itself.
export default defineCliConfig({ api: { projectId, dataset } });
