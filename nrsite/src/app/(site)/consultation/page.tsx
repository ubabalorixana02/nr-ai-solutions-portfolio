import type { Metadata } from "next";
import ConsultationForm from "@/components/ConsultationForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Let's discuss your business goals — book a discovery call, business consultation, project scoping session, website consultation, or workflow review.",
  alternates: { canonical: `${SITE_URL}/consultation` },
};

export default function ConsultationPage() {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="section-tag text-center">Let&apos;s Talk</p>
        <h1 className="section-title text-center">
          Let&apos;s Discuss Your <em>Business Goals</em>
        </h1>
        <div className="divider mx-auto" />
        <p className="mx-auto mb-12 max-w-2xl text-center text-[0.95rem] leading-relaxed text-mid">
          Whether you need administrative support, workflow improvements, customer support,
          HR assistance, lead generation or website assistance, let&apos;s connect.
        </p>

        <ConsultationForm />
      </div>
    </main>
  );
}
