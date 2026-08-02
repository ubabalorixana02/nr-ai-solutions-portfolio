import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about services, remote work, consultations, working hours, and long-term projects.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="section-tag text-center">Questions</p>
          <h1 className="section-title text-center">
            Frequently Asked <em>Questions</em>
          </h1>
          <div className="divider mx-auto" />
        </Reveal>

        <FaqAccordion />

        <Reveal>
          <p className="mt-12 text-center text-sm text-mid">
            Still have a question?{" "}
            <a href="/#contact" className="text-roseText underline underline-offset-2">
              Get in touch
            </a>{" "}
            or{" "}
            <a href="/consultation" className="text-roseText underline underline-offset-2">
              book a consultation
            </a>
            .
          </p>
        </Reveal>
      </div>
    </main>
  );
}
