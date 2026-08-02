import Reveal from "./Reveal";

const toolGroups = [
  { label: "AI", items: ["ChatGPT", "Google Gemini", "Claude", "Microsoft Copilot"] },
  { label: "Automation", items: ["n8n", "Zapier", "Power Automate"] },
  { label: "Business", items: ["Microsoft 365", "Excel", "PowerPoint", "Outlook", "Google Workspace"] },
  { label: "Analytics", items: ["Power BI", "Microsoft Fabric"] },
  { label: "Development", items: ["HTML", "CSS", "JavaScript", "Wix Studio", "GitHub", "Netlify"] },
  { label: "Design", items: ["Canva", "Figma"] },
];

export default function SkillsTools() {
  return (
    <section id="tools" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Tools & Technologies</p>
        <h2 className="section-title">
          Skills & <em>Tools</em>
        </h2>
        <div className="divider" />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((g, i) => (
          <Reveal key={g.label} delay={Math.min(i * 0.06, 0.3)} className="card px-6 py-6">
            <h3 className="text-xs uppercase tracking-widest text-roseText">{g.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="rounded-full bg-rosePale px-3 py-1 text-xs text-roseText">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
