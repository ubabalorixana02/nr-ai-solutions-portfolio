import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Request",
  description: "How to view, correct, or delete your personal data, or withdraw consent.",
  alternates: { canonical: `${SITE_URL}/data-request` },
};

const requestTypes = [
  { title: "View your data", body: "Request a copy of any personal information held about you." },
  { title: "Correct your data", body: "Ask for inaccurate or outdated information to be corrected." },
  { title: "Delete your data", body: "Request that your personal information be permanently deleted." },
  { title: "Withdraw consent", body: "Withdraw consent for any processing that relies on it." },
  { title: "Unsubscribe", body: "Unsubscribe from any future newsletter or mailing list." },
  { title: "Removal from mailing lists", body: "Request removal from any mailing or contact list entirely." },
];

export default function DataRequestPage() {
  return (
    <LegalPageLayout
      title="Data Request"
      lastUpdated="28 July 2026"
      intro={
        <p>
          In line with the rights described in the{" "}
          <a href="/privacy-policy">Privacy Policy</a>, you can request any of the
          following at any time.
        </p>
      }
    >
      <section>
        <div className="grid gap-4 sm:grid-cols-2">
          {requestTypes.map((r) => (
            <div key={r.title} className="card px-5 py-4">
              <h3 className="mt-0 text-sm font-semibold text-heading">{r.title}</h3>
              <p className="mb-0 text-sm text-mid">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>How to Submit a Request</h2>
        <p>
          Email <a href="mailto:ubabalorixana02@gmail.com">ubabalorixana02@gmail.com</a>{" "}
          with the subject line "Data Request," stating which of the above you'd like and
          any details that help identify your submission (e.g. the name/email you used
          when contacting the site, or the approximate date of a testimonial submission).
        </p>
      </section>

      <section>
        <h2>What Happens Next</h2>
        <p>
          Requests are responded to within a reasonable timeframe, generally within 30
          days as guided by POPIA. Where a request can't be fulfilled in full (for
          example, if data is held by a third-party service like Google rather than
          directly by this site), you'll be told why, and pointed to the right place to
          follow up if applicable.
        </p>
      </section>

      <section>
        <h2>Complaints</h2>
        <p>
          If you're not satisfied with how a request is handled, you have the right to
          lodge a complaint with the{" "}
          <a href="https://inforegulator.org.za" target="_blank" rel="noopener">
            Information Regulator of South Africa
          </a>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
