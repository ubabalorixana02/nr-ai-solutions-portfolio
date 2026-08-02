import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important context on how to interpret the information on this website.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function Disclaimer() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated="28 July 2026">
      <section>
        <h2>General Information Only</h2>
        <p>
          Everything on this website — service descriptions, blog articles, project case
          studies — is provided for general informational purposes only. It is not a
          substitute for advice tailored to your specific situation.
        </p>
      </section>

      <section>
        <h2>Blog Content Is Educational</h2>
        <p>
          Articles published in The Productivity Journal reflect personal experience,
          opinion, and general best practice at the time of writing. They are educational
          in nature and should not be treated as formal guidance for your specific
          business or circumstances.
        </p>
      </section>

      <section>
        <h2>AI Recommendations Are Not Professional Advice</h2>
        <p>
          Where this site or any service described on it involves AI-generated
          suggestions, automation, or output (for example, from projects like Clementia or
          the AI Productivity Assistant), that output should not be treated as a
          substitute for professional legal, financial, medical, or business advice.
          Always consult an appropriately qualified professional before making decisions
          based on AI-generated content.
        </p>
      </section>

      <section>
        <h2>Portfolio Projects Demonstrate Skills</h2>
        <p>
          The projects featured on this site (Clementia, AI Productivity Assistant, Smart
          Chief Assist, Smart People Pro, PredictPlay Bets, and the English Learning
          Platform) are built to demonstrate technical and administrative skill. They are
          not production guarantees of what a commissioned project for your business would
          look like — actual outcomes for a real engagement depend on your specific
          requirements, agreed separately.
        </p>
      </section>

      <section>
        <h2>Results May Vary</h2>
        <p>
          Any results, efficiency gains, or outcomes referenced on this site (in service
          descriptions, testimonials, or case studies) reflect specific circumstances and
          are not guaranteed to be typical or repeatable for every client or business.
        </p>
      </section>

      <section>
        <h2>External Websites</h2>
        <p>
          This site links to external websites, including live project demos and
          third-party platforms. These are not controlled by Nolubabalo Rixana, and no
          responsibility is taken for their content, security, or availability.
        </p>
      </section>

      <section>
        <h2>Do Your Own Due Diligence</h2>
        <p>
          Before making any business, financial, or professional decision based on
          information found on this site, you should independently verify it and, where
          appropriate, seek advice from a qualified professional in the relevant field.
        </p>
      </section>
    </LegalPageLayout>
  );
}
