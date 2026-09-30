import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "This site's commitment to accessibility, and how to give feedback.",
  alternates: { canonical: `${SITE_URL}/accessibility` },
};

export default function AccessibilityStatement() {
  return (
    <LegalPageLayout
      title="Accessibility Statement"
      lastUpdated="28 July 2026"
      intro={<p>This isn't just a policy on paper — accessibility was built into this site from the ground up, not bolted on afterward.</p>}
    >
      <section>
        <h2>Our Commitment</h2>
        <p>
          This website is built with the goal of being usable by as many people as
          possible, regardless of ability or the technology they use to browse the web.
          Accessibility is treated as an ongoing responsibility, not a one-time checklist.
        </p>
      </section>

      <section>
        <h2>Inclusive Design</h2>
        <p>
          Color choices across the site were checked against WCAG AA contrast standards —
          including a dedicated pass to make sure dark mode meets the same standard as
          light mode, not just an inverted color scheme.
        </p>
      </section>

      <section>
        <h2>Keyboard Navigation</h2>
        <p>
          Every interactive element on this site — navigation, forms, the PDF viewer, the
          FAQ accordion, the theme toggle — can be operated using a keyboard alone. A
          "Skip to main content" link is available for keyboard users at the very start of
          every page, and a visible focus indicator shows where you are at all times.
        </p>
      </section>

      <section>
        <h2>Colour Contrast</h2>
        <p>
          Text and interactive elements are checked to meet a minimum 4.5:1 contrast ratio
          (3:1 for large text and graphical elements), per WCAG 2.1 AA.
        </p>
      </section>

      <section>
        <h2>Responsive Design</h2>
        <p>
          The site is built to work across screen sizes, from mobile phones to ultra-wide
          monitors, without content overflowing, overlapping, or becoming unusable.
        </p>
      </section>

      <section>
        <h2>Alternative Text</h2>
        <p>
          Meaningful images (like the logo) include descriptive alt text. Purely
          decorative elements (icons that repeat information already in nearby text) are
          hidden from assistive technology so they don't add noise when navigating with a
          screen reader.
        </p>
      </section>

      <section>
        <h2>Screen Reader Compatibility</h2>
        <p>
          Semantic HTML is used throughout (proper headings, lists, form labels, and
          landmark regions) so screen readers can accurately announce and navigate the
          page structure. Custom components like the PDF viewer and FAQ accordion use
          proper ARIA roles and manage focus correctly when opened and closed.
        </p>
      </section>

      <section>
        <h2>Motion &amp; Animation</h2>
        <p>
          This site uses subtle motion (fade-ins, hover states) but fully respects your
          operating system's "reduce motion" setting — if you have that enabled,
          animations are minimised or skipped entirely, site-wide.
        </p>
      </section>

      <section>
        <h2>Continuous Improvement</h2>
        <p>
          Accessibility is reviewed as new features are added to this site, not just at
          launch. If a new feature introduces a gap, fixing it is treated as a priority,
          not a "someday" item.
        </p>
      </section>

      <section>
        <h2>Feedback</h2>
        <p>
          If you experience any accessibility barrier on this site, please let me know —
          specific feedback (what page, what happened, what device/assistive technology
          you were using) helps enormously in fixing it quickly. Contact{" "}
          <a href="mailto:nolubabalo@nraisolutions.co.za">nolubabalo@nraisolutions.co.za</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
