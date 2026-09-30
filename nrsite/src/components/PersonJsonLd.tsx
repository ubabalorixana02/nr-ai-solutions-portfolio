import {
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_ROLES,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  FOUNDER_NAME,
  FOUNDER_TITLE,
} from "@/lib/site";

export default function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    slogan: COMPANY_TAGLINE,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_TITLE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gqeberha",
        addressRegion: "Eastern Cape",
        addressCountry: "ZA",
      },
      email: "mailto:ubabalorixana02@gmail.com",
      sameAs: ["https://linkedin.com/in/nolubabalo-rixana-809745209"],
      knowsAbout: [...SITE_ROLES],
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
