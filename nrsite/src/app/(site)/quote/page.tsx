import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell Nolubabalo Rixana about your project so she can prepare a quotation tailored to your needs.",
  alternates: { canonical: `${SITE_URL}/quote` },
};

export default function QuotePage() {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="section-tag text-center">Start a Project</p>
          <h1 className="section-title text-center">
            Request a <em>Quote</em>
          </h1>
          <div className="divider mx-auto" />
          <p className="mx-auto mb-4 max-w-2xl text-center text-[0.95rem] leading-relaxed text-mid">
            Share a few details about what you need, and Nolubabalo will review your request and
            follow up with a tailored quotation.
          </p>
          <p className="mx-auto mb-12 max-w-xl text-center text-sm font-medium text-heading">
            Thank you for your enquiry in advance — once submitted, your request has been
            received and Nolubabalo will review the details and get back to you.
          </p>
        </Reveal>

        <QuoteForm />
      </div>
    </main>
  );
}
