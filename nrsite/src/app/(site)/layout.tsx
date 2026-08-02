import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PdfViewerProvider } from "@/components/PdfViewerContext";
import PdfViewerModal from "@/components/PdfViewerModal";
import CookieBanner from "@/components/CookieBanner";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <PdfViewerProvider>
        <Navbar />
        {children}
        <Footer />
        <PdfViewerModal />
      </PdfViewerProvider>
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
