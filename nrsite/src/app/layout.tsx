import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import PersonJsonLd from "@/components/PersonJsonLd";
import ThemeScript from "@/components/ThemeScript";
import { SITE_URL, SITE_DESCRIPTION, SITE_ROLES, COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/site";

// Deliberately NOT importing ./globals.css here — it's imported in
// (site)/layout.tsx instead, so Tailwind's base/reset styles don't leak
// into /studio (Sanity Studio ships its own styling and our global resets
// would visibly break its UI — buttons, inputs, etc).

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const titleLine = `${COMPANY_NAME} | ${COMPANY_TAGLINE}`;

export const metadata: Metadata = {
  title: {
    default: titleLine,
    // Company name as the suffix for every child page's title — not the
    // founder's personal name — now that the company is the primary site
    // identity (Phase 4A.1). Child pages still just set their own title
    // and inherit "| NR AI Solutions" automatically.
    template: `%s | ${COMPANY_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  keywords: [...SITE_ROLES, "South Africa", "Administrative Professional"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: titleLine,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: COMPANY_NAME,
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: titleLine,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <body>
        <ThemeScript />
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
