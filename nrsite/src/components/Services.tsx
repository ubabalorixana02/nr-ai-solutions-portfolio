import { Briefcase, ClipboardList, Headphones, Users, TrendingUp, Sparkles, Workflow, Globe, FileText } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  { title: "Executive Assistance", desc: "Calendar, inbox, travel and reporting support.", icon: Briefcase },
  { title: "Administrative Support", desc: "Formatting, data entry and office administration.", icon: ClipboardList },
  { title: "Customer Support", desc: "Email, live chat, CRM and ticket management.", icon: Headphones },
  { title: "HR Assistance", desc: "Interview scheduling, ATS and employee records.", icon: Users },
  { title: "Lead Generation", desc: "LinkedIn prospecting, B2B research and contact lists.", icon: TrendingUp },
  { title: "AI Productivity", desc: "Prompt engineering, workflow planning and AI adoption.", icon: Sparkles },
  { title: "Workflow Automation", desc: "Business process and email/task automation with n8n.", icon: Workflow },
  { title: "Wix Website Support", desc: "Landing pages, CMS updates and maintenance.", icon: Globe },
  { title: "Resume & LinkedIn Optimisation", desc: "ATS optimisation and cover letters.", icon: FileText },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">What I Offer</p>
        <h2 className="section-title">
          My <em>Services</em>
        </h2>
        <div className="divider" />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={Math.min(i * 0.05, 0.35)} className="card card-glow group px-6 py-7">
            <s.icon
              size={26}
              className="text-rose transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110"
              aria-hidden="true"
            />
            <h3 className="mt-3 font-display text-xl text-heading">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mid">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
