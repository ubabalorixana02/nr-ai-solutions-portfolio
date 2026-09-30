import { Sparkles, Workflow, Briefcase, BarChart3, Code2, Palette } from "lucide-react";
import Reveal from "./Reveal";

// Text-only by design: no third-party logo assets exist in this project for
// these platforms, and fabricating or scraping brand marks isn't an option —
// see Phase 5B notes. Each category is tied back to the actual service
// pillar it supports, rather than presented as a personal skills list.
const toolGroups = [
  {
    label: "AI",
    icon: Sparkles,
    blurb: "Practical AI support across day-to-day operations.",
    items: ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot"],
  },
  {
    label: "Automation",
    icon: Workflow,
    blurb: "Workflow automation that reduces manual, repetitive work.",
    items: ["n8n", "Zapier", "Power Automate"],
  },
  {
    label: "Business & Administration",
    icon: Briefcase,
    blurb: "Core administrative and productivity tooling.",
    items: ["Microsoft 365", "Excel", "PowerPoint", "Outlook", "Google Workspace"],
  },
  {
    label: "Analytics",
    icon: BarChart3,
    blurb: "Reporting and data visibility to support better decisions.",
    items: ["Power BI", "Microsoft Fabric"],
  },
  {
    label: "Development",
    icon: Code2,
    blurb: "Website builds and lightweight technical delivery.",
    items: ["HTML", "CSS", "JavaScript", "Wix Studio", "GitHub", "Netlify"],
  },
  {
    label: "Design",
    icon: Palette,
    blurb: "Clean, on-brand visual assets, delivered quickly.",
    items: ["Canva", "Figma"],
  },
];

export default function SkillsTools() {
  return (
    <section id="tools" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Capabilities</p>
        <h2 className="section-title">
          Technology &amp; <em>Platforms</em>
        </h2>
        <div className="divider" />
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-mid">
          The platforms behind NR AI Solutions&apos; administrative, customer support,
          recruitment and automation work — chosen for reliability, not novelty.
        </p>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((g, i) => (
          <Reveal key={g.label} delay={Math.min(i * 0.06, 0.3)} className="card px-6 py-7">
            <g.icon size={22} className="text-rose" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg text-heading">{g.label}</h3>
            <p className="mt-1 text-xs leading-relaxed text-mid">{g.blurb}</p>
            <p className="mt-4 border-t border-rosePale pt-3 text-xs leading-relaxed text-mid/80">
              {g.items.join(" · ")}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
