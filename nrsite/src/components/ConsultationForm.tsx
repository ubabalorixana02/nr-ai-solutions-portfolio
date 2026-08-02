import { Clock, Briefcase, Check, Globe, RefreshCw, CalendarDays, Mail } from "lucide-react";
import { consultationOptions } from "@/lib/validation";
import Reveal from "./Reveal";

// Set after creating a Google Calendar "Appointment schedule" — see README
// "Contact & Consultation setup" for exact steps. Public/shareable link, so
// NEXT_PUBLIC_ is correct here (not a secret).
const CALENDAR_BOOKING_URL = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL;

const optionDetails: Record<(typeof consultationOptions)[number], { icon: typeof Clock; blurb: string }> = {
  "30 Minute Discovery Call": { icon: Clock, blurb: "A short call to see if we're a good fit." },
  "60 Minute Business Consultation": { icon: Briefcase, blurb: "A deeper look at your operations and where support helps most." },
  "Project Consultation": { icon: Check, blurb: "Scope out a specific project before we start." },
  "Website Consultation": { icon: Globe, blurb: "Talk through Wix support, updates, or a new build." },
  "Workflow Review": { icon: RefreshCw, blurb: "Walk through a process that's costing you time." },
};

export default function ConsultationForm() {
  return (
    <>
      <Reveal>
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {consultationOptions.map((option) => {
            const { icon: Icon, blurb } = optionDetails[option];
            return (
              <div key={option} className="card flex flex-col items-start gap-2 px-4 py-5 text-left">
                <Icon size={20} className="text-rose" aria-hidden="true" />
                <span className="font-display text-base text-heading">{option}</span>
                <span className="text-xs text-mid">{blurb}</span>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mb-6 max-w-xl text-center text-xs text-mid">
          Pick whichever fits best when you book below — there&apos;s a spot in the booking
          form to mention which one you&apos;re after and what&apos;s on your mind.
        </p>
      </Reveal>

      <Reveal>
        {CALENDAR_BOOKING_URL ? (
          <div className="card mx-auto max-w-2xl overflow-hidden p-2">
            <iframe
              src={CALENDAR_BOOKING_URL}
              title="Book a consultation"
              width="100%"
              height="700"
              className="rounded-xl"
            >
              Loading…
            </iframe>
          </div>
        ) : (
          <div className="card mx-auto flex max-w-xl flex-col items-center gap-3 px-8 py-16 text-center">
            <CalendarDays size={28} className="text-rose" aria-hidden="true" />
            <p className="font-display text-xl text-heading">Online booking coming soon</p>
            <p className="text-sm text-mid">
              In the meantime, email me directly and I&apos;ll find a time that works for you.
            </p>
            <a href="mailto:ubabalorixana02@gmail.com" className="btn-solid mt-2">
              <Mail size={16} aria-hidden="true" /> Email Me to Book
            </a>
          </div>
        )}
      </Reveal>
    </>
  );
}
