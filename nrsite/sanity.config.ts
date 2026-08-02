/**
 * Sanity Studio configuration — this is what powers the editor UI at
 * /studio in this Next.js app. Schema types live in src/sanity/schemaTypes.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  name: "nr-ai-solutions",
  title: "The NR Journal",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool(),
    // Vision lets you run raw GROQ queries from within the Studio — handy
    // for testing queries before putting them in code. Safe to remove if
    // you'd rather editors not see it.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
