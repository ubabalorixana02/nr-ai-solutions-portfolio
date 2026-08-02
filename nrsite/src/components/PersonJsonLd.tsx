import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_ROLES } from "@/lib/site";

export default function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: SITE_ROLES.join(" | "),
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gqeberha",
      addressRegion: "Eastern Cape",
      addressCountry: "ZA",
    },
    email: "mailto:ubabalorixana02@gmail.com",
    sameAs: ["https://linkedin.com/in/nolubabalo-rixana-809745209"],
    knowsAbout: [...SITE_ROLES],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
