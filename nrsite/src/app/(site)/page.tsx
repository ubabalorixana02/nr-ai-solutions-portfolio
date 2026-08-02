import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import SkillsTools from "@/components/SkillsTools";
import ProjectsSection from "@/components/ProjectsSection";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Experience />
      <SkillsTools />
      <ProjectsSection />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}
