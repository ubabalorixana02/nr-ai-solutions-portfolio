import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";
import { SITE_URL, COMPANY_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured AI and automation projects by Nolubabalo Rixana, with full case studies.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: `Projects | ${COMPANY_NAME}`,
    description: "Featured AI and automation projects by Nolubabalo Rixana, with full case studies.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-8">
      <ProjectsSection />
    </main>
  );
}
