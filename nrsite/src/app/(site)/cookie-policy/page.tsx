import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies this website uses, why, and how to control them.",
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicy() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="28 July 2026"
      intro={<p>A short, plain-language explanation of cookies on this site — what they are, which ones are actually in use, and how to control them.</p>}
    >
      <section>
        <h2>1. What Cookies Are</h2>
        <p>
          Cookies are small text files a website can store on your device to remember
          information between visits — like whether you're logged in, or what you
          selected on a previous page. Some cookies are essential for a site to function;
          others are used for analytics or advertising.
        </p>
      </section>

      <section>
        <h2>2. Essential Cookies</h2>
        <p>
          This site does not currently set any essential cookies of its own. Your
          dark/light mode preference is remembered using your browser's local storage
          instead of a cookie — a similar mechanism, but one that never gets sent back to
          any server, and can't be read by anyone but this site.
        </p>
      </section>

      <section>
        <h2>3. Functional Cookies</h2>
        <p>
          None are currently set directly by this site. If a feature is added in future
          that requires one (for example, remembering a form's progress), this section
          will be updated to describe it.
        </p>
      </section>

      <section>
        <h2>4. Analytics Cookies</h2>
        <p>
          This site does not currently use Google Analytics or any other analytics
          service, so no analytics cookies are set. If analytics are added in future, this
          policy will be updated before they go live, and — where legally required — your
          consent will be requested first.
        </p>
      </section>

      <section>
        <h2>5. Marketing Cookies (Future)</h2>
        <p>
          This site does not run advertising or marketing campaigns, and sets no marketing
          cookies. This is listed here in case that changes in future — if it does, this
          section will be updated and consent will be requested where required.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Cookies</h2>
        <p>
          The contact form and consultation booking widget on this site are embedded
          directly from Google (Google Forms and Google Calendar). Loading these embedded
          elements may cause Google to set its own cookies, governed by{" "}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">
            Google's Cookie Policy
          </a>
          , not this one. This is outside of direct control — if you'd prefer to avoid
          this entirely, you can contact me by email instead of using the embedded forms.
        </p>
      </section>

      <section>
        <h2>7. Cookie Management &amp; Browser Settings</h2>
        <p>
          You can view, manage, and delete cookies at any time through your browser
          settings. Most browsers let you block cookies entirely or clear existing ones —
          look under "Privacy" or "Cookies" in your browser's settings menu. Blocking all
          cookies may affect how embedded content (like the Google Form or Calendar
          widget) behaves.
        </p>
      </section>

      <section>
        <h2>8. Consent</h2>
        <p>
          A cookie banner appears on your first visit, letting you accept or decline
          optional cookies. Your choice is remembered in your browser (via local storage,
          not a cookie) so you won't be asked again. This site doesn't currently set
          analytics or marketing cookies regardless of your choice — the banner exists
          mainly to be transparent about the third-party embeds described above, and to be
          ready for the day analytics genuinely is added, at which point your "Accept"
          choice is what would allow it to load.
        </p>
      </section>
    </LegalPageLayout>
  );
}
