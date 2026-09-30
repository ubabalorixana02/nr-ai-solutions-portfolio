import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nolubabalo Rixana collects, uses, and protects your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="28 July 2026"
      intro={
        <p>
          This policy explains what personal information this website collects, why, and
          what rights you have over it. It's written to comply with South Africa's
          Protection of Personal Information Act (POPIA), and to be genuinely useful to
          read — not just a wall of boilerplate.
        </p>
      }
    >
      <section>
        <h2>1. Introduction</h2>
        <p>
          This website (nolubabalorixana.com) is operated by Nolubabalo Rixana, an
          independent administrative and AI productivity professional based in Gqeberha,
          South Africa. This policy applies to everyone who visits the site, submits a
          form, or books a consultation through it.
        </p>
      </section>

      <section>
        <h2>2. Information Collected</h2>

        <h3>Personal information</h3>
        <p>
          Depending on how you interact with the site, I may collect your name, email
          address, phone number, company name, and the content of any message you send.
        </p>

        <h3>Contact forms</h3>
        <p>
          The contact form is a Google Form embedded on this site. When you submit it, your
          responses are collected and stored by Google, and I receive an email
          notification. Google's own privacy policy governs how that data is handled on
          their end — see{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            Google's Privacy Policy
          </a>
          .
        </p>

        <h3>Consultation bookings</h3>
        <p>
          Booking a consultation uses an embedded Google Calendar appointment scheduler.
          Your name, email, and any notes you provide are collected and stored by Google
          Calendar, syncing directly to my calendar. Again, Google's privacy policy governs
          their handling of this data.
        </p>

        <h3>Testimonial submissions</h3>
        <p>
          If you submit a testimonial through the site, I collect your name, role,
          company (if provided), and your review text, along with your star rating. This
          is stored in Sanity (the CMS powering this site) and stays hidden from public
          view until I approve it. Testimonial submissions do not currently collect your
          email address.
        </p>

        <h3>Newsletter subscriptions</h3>
        <p>
          This site does not currently operate a newsletter or mailing list. If that
          changes in future, this policy will be updated first, and you'll be asked for
          clear, separate consent before being added to any list.
        </p>

        <h3>Cookies</h3>
        <p>
          This site itself does not set marketing or tracking cookies. Your dark/light mode
          preference is stored using your browser's local storage, not a cookie, and never
          leaves your device. However, embedded third-party content (the Google Form and
          Google Calendar booking widget) may set their own cookies when loaded — see the{" "}
          <a href="/cookie-policy">Cookie Policy</a> for details.
        </p>

        <h3>Analytics</h3>
        <p>
          This site does not currently run Google Analytics or any other analytics
          service. If analytics are added in future, this policy and the Cookie Policy
          will both be updated, and where required, your consent will be requested first.
        </p>

        <h3>IP addresses</h3>
        <p>
          When you submit a testimonial, your IP address is briefly used server-side to
          apply a basic spam/rate-limit check (no more than a handful of submissions per
          hour from the same address). It is not stored long-term or linked to your
          submission afterward.
        </p>

        <h3>Browser information</h3>
        <p>
          Standard technical information (browser type, device type, general location
          inferred from IP) may be visible in server logs as a normal part of how web
          servers and hosting providers operate, even without dedicated analytics software
          installed.
        </p>
      </section>

      <section>
        <h2>3. How Information Is Used</h2>
        <ul>
          <li>To respond to enquiries and messages sent through the contact form.</li>
          <li>To schedule, confirm, and manage consultation bookings.</li>
          <li>To review and, where approved, publish testimonials on the site.</li>
          <li>To maintain the security and basic functioning of the site (e.g. spam prevention).</li>
        </ul>
        <p>Your information is never sold, and is not used for advertising.</p>
      </section>

      <section>
        <h2>4. Data Protection</h2>
        <p>
          Reasonable technical and organisational measures are used to protect any
          personal information collected — including relying on established, reputable
          providers (Google, Sanity) rather than custom-built storage for sensitive data,
          and keeping access to that data limited to what's necessary.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>This site relies on the following third-party services, each governed by their own privacy policy:</p>
        <ul>
          <li><strong>Google Forms &amp; Google Calendar</strong> — contact form and consultation booking.</li>
          <li><strong>Sanity</strong> — content management for the blog and testimonials.</li>
          <li><strong>Vercel</strong> — website hosting.</li>
        </ul>
        <p>
          <strong>Possible future integrations</strong> — this site may in future add: Google
          Analytics (visitor statistics), a dedicated email provider (for newsletters or
          transactional email), Calendly or a similar scheduling tool, AI assistants (e.g.
          an AI-powered chat or receptionist feature), or CRM software (to manage client
          relationships). If any of these are added, this policy will be updated in
          advance of them going live.
        </p>
      </section>

      <section>
        <h2>6. Your Rights (POPIA)</h2>
        <p>Under South Africa's Protection of Personal Information Act, you have the right to:</p>
        <ul>
          <li>Know what personal information is held about you and why.</li>
          <li>Request a copy of your personal information.</li>
          <li>Request correction of inaccurate or outdated information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Withdraw consent at any time, where processing is based on consent.</li>
          <li>Object to the processing of your personal information in certain circumstances.</li>
          <li>Lodge a complaint with the Information Regulator of South Africa.</li>
        </ul>
        <p>
          See the <a href="/data-request">Data Request page</a> for how to exercise any of
          these rights.
        </p>
      </section>

      <section>
        <h2>7. Data Retention</h2>
        <p>
          Contact form and consultation booking data is retained within Google's systems
          per their own retention practices. Approved testimonials are kept indefinitely
          as published content, unless you request removal. Pending (unapproved)
          testimonials that are clearly spam are deleted during moderation.
        </p>
      </section>

      <section>
        <h2>8. Contact Details</h2>
        <p>
          For any privacy-related question or request, contact Nolubabalo Rixana at{" "}
          <a href="mailto:nolubabalo@nraisolutions.co.za">nolubabalo@nraisolutions.co.za</a>.
        </p>
      </section>

      <section>
        <h2>9. Policy Updates</h2>
        <p>
          This policy may be updated from time to time — for example, as new features or
          integrations are added to the site. The "Last updated" date at the top of this
          page will always reflect the most recent revision. Material changes will be
          reflected here before taking effect.
        </p>
      </section>
    </LegalPageLayout>
  );
}
