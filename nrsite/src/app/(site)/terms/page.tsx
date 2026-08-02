import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of this website and services booked through it.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function Terms() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="28 July 2026"
      intro={
        <p>
          These terms govern your use of this website and any services booked through it.
          By using the site, you agree to them.
        </p>
      }
    >
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these Terms &amp;
          Conditions. If you don't agree with any part of them, please don't use the site.
        </p>
      </section>

      <section>
        <h2>2. Website Purpose</h2>
        <p>
          This website exists to showcase the professional experience, projects, and
          services of Nolubabalo Rixana, and to let visitors get in touch, book a
          consultation, and read the blog.
        </p>
      </section>

      <section>
        <h2>3. Services Offered</h2>
        <p>
          Services described on this site — including executive assistance, administrative
          support, customer support, HR assistance, lead generation, AI productivity
          support, workflow automation, Wix website support, and resume/LinkedIn
          optimisation — are offered on a client-by-client basis. Descriptions on this site
          are general in nature; the specific scope, deliverables, and terms of any
          engagement are agreed separately and directly with the client before work begins.
        </p>
      </section>

      <section>
        <h2>4. Intellectual Property &amp; Copyright</h2>
        <p>
          All content on this site — including text, the logo, design, project case
          studies, and blog posts — is the property of Nolubabalo Rixana unless otherwise
          stated, and is protected by copyright. You may not reproduce, redistribute, or
          repurpose this content for commercial use without prior written permission.
        </p>
        <p>
          Certificates, resumes, and other documents made available for viewing on this
          site remain the property of their respective issuing organisations and/or
          Nolubabalo Rixana, and are provided for review purposes only.
        </p>
      </section>

      <section>
        <h2>5. Consultation Bookings</h2>
        <p>
          Booking a consultation through this site (via the embedded Google Calendar
          scheduler) reserves a time slot for an initial conversation. It does not, by
          itself, constitute a contract for paid services — any paid engagement is agreed
          separately following the consultation. Bookings may be rescheduled or cancelled
          in line with the options provided by the booking tool.
        </p>
      </section>

      <section>
        <h2>6. Client Responsibilities</h2>
        <p>
          If you engage services through this site, you agree to provide accurate
          information, respond to reasonable requests for information needed to complete
          the work, and use any advice, deliverables, or automation provided responsibly
          and in line with applicable law.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          This website and its content are provided "as is." While reasonable care is
          taken to keep information accurate and up to date, no guarantee is made that the
          site will be error-free, uninterrupted, or fit for any particular purpose. To the
          fullest extent permitted by law, Nolubabalo Rixana is not liable for any indirect,
          incidental, or consequential loss arising from use of this site.
        </p>
      </section>

      <section>
        <h2>8. AI Service Disclaimer</h2>
        <p>
          Some projects showcased on this site (e.g. Clementia, the AI Productivity
          Assistant) involve AI-powered automation. Where any AI-assisted feature is
          offered as part of a service, its output is a tool to support — not replace —
          professional human judgment, and should not be relied upon as legal, financial,
          medical, or other professional advice. See the{" "}
          <a href="/disclaimer">Disclaimer</a> page for more detail.
        </p>
      </section>

      <section>
        <h2>9. External Links</h2>
        <p>
          This site links to external websites (project demos, LinkedIn, third-party
          tools). These are provided for convenience; Nolubabalo Rixana does not control
          and is not responsible for the content, availability, or practices of external
          sites.
        </p>
      </section>

      <section>
        <h2>10. Payments (Future Services)</h2>
        <p>
          This site does not currently process payments directly. If paid services or
          products are introduced through the site in future (e.g. via a payment
          processor), the applicable pricing, refund, and payment terms will be clearly
          stated at that time, and this section will be updated accordingly.
        </p>
      </section>

      <section>
        <h2>11. Website Availability</h2>
        <p>
          Reasonable effort is made to keep this site available and functioning correctly,
          but no guarantee is made of uninterrupted access. The site may be temporarily
          unavailable for maintenance, updates, or reasons outside of reasonable control.
        </p>
      </section>

      <section>
        <h2>12. Changes to Services</h2>
        <p>
          Services, pricing structures, and offerings described on this site may change or
          be discontinued at any time without prior notice. Any active client engagement is
          governed by the terms agreed at the time of that engagement, regardless of later
          changes to this site.
        </p>
      </section>

      <section>
        <h2>13. Governing Law</h2>
        <p>
          These Terms &amp; Conditions are governed by the laws of the Republic of South
          Africa. Any disputes arising from use of this site or services booked through it
          will be subject to the jurisdiction of the South African courts.
        </p>
      </section>

      <section>
        <h2>14. Contact Information</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <a href="mailto:ubabalorixana02@gmail.com">ubabalorixana02@gmail.com</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
