import Reveal from "./Reveal";

// Same factual roles/dates/responsibilities as before — nothing invented,
// nothing removed. Presentation changed from a CV-style vertical timeline
// with connecting dots to plain stacked cards, consistent with how the
// rest of the site (Services, Certifications, Technology & Platforms)
// already presents grouped items. The personal stat cards previously shown
// alongside this timeline have been removed per Phase 5D — that data isn't
// company-level and isn't reproduced elsewhere.
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

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12">
      <p className="section-tag">Founder Experience</p>
      <h2 className="section-title">Experience Behind the Work</h2>
      <div className="divider" />

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-mid">
        NR AI Solutions is founder-led, built on practical, hands-on experience across
        administration, customer support, digital services and related professional work —
        the same foundation the business draws on today.
      </p>

      <ol className="mx-auto max-w-3xl space-y-5">
        {timeline.map((t, i) => (
          <Reveal key={t.role} as="li" delay={i * 0.08} className="card px-6 py-6">
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
    </section>
  );
}
