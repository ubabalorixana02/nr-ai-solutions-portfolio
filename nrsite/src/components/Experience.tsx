import Reveal from "./Reveal";
import AnimatedStat from "./AnimatedStat";

const timeline = [
  {
    role: "Administrative Assistant",
    org: "Mithayam Holdings (Pty) Ltd",
    period: "May 2020 – Present",
    points: [
      "Manage executive calendars, appointments and meeting schedules.",
      "Coordinate professional correspondence with customers, suppliers and stakeholders.",
      "Prepare reports, presentations and business documentation.",
    ],
  },
  {
    role: "Community Support Assistant (Volunteer)",
    org: "Ayakha Foundation",
    period: "April 2022 – Present",
    points: [
      "Coordinated community outreach initiatives and administrative activities.",
      "Maintained participant records and documentation.",
      "Organised meetings and community programmes.",
    ],
  },
  {
    role: "Freelance Digital Services Assistant",
    org: "Self-Employed",
    period: "Ongoing",
    points: [
      "Delivered virtual administrative support to individual clients.",
      "Conducted internet research, data collection and website updates.",
      "Assisted clients with administrative workflows using AI productivity tools.",
    ],
  },
];

const stats = [
  { value: "5+", label: "AI Applications Built" },
  { value: "20+", label: "Professional Certifications" },
  { value: "10+", label: "Digital Platforms" },
  { value: "100%", label: "Remote Ready" },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12">
      <p className="section-tag">Career Journey</p>
      <h2 className="section-title">
        Experience & <em>Why Work With Me</em>
      </h2>
      <div className="divider" />

      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
        <ol className="space-y-6 border-l-2 border-rosePale pl-6">
          {timeline.map((t, i) => (
            <Reveal key={t.role} as="li" delay={i * 0.08} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-rose" />
              <p className="text-xs uppercase tracking-wider text-roseText">{t.period}</p>
              <h3 className="font-display text-xl text-heading">{t.role}</h3>
              <p className="text-sm font-medium text-mid">{t.org}</p>
              <ul className="mt-2 space-y-1 text-sm text-mid">
                {t.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
