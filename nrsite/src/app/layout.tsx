import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import PersonJsonLd from "@/components/PersonJsonLd";
import ThemeScript from "@/components/ThemeScript";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_ROLES } from "@/lib/site";

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

const titleLine = `${SITE_NAME} | ${SITE_ROLES.slice(0, 2).join(" & ")}`;

export const metadata: Metadata = {
  title: {
    default: titleLine,
    // Lets child pages set just their own title and inherit "| Nolubabalo Rixana"
    // automatically, instead of every page re-typing the full suffix.
    template: `%s | ${SITE_NAME}`,
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
    siteName: SITE_NAME,
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
