import { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="section-tag">Legal</p>
          <h1 className="section-title">{title}</h1>
          <div className="divider" />
          <p className="text-xs text-mid">Last updated: {lastUpdated}</p>
          {intro && <div className="mt-6 text-sm leading-relaxed text-mid">{intro}</div>}
        </Reveal>

        <div className="legal-content mt-10 space-y-10">{children}</div>

        <Reveal>
          <p className="mt-14 border-t border-rosePale pt-8 text-center text-sm text-mid">
            Questions about any of this? See the full list of policies on the{" "}
            <Link href="/legal" className="text-roseText underline underline-offset-2">
              Legal overview page
            </Link>
            , or{" "}
            <a href="mailto:nolubabalo@nraisolutions.co.za" className="text-roseText underline underline-offset-2">
              email me directly
            </a>
            .
          </p>
        </Reveal>
      </div>
    </main>
  );
}
