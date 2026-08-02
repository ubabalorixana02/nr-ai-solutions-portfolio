import Link from "next/link";
import Image from "next/image";
import { Home, Mail } from "lucide-react";
import logoMark from "../../../public/brand/logo-mark.png";

// This lives inside the (site) route group specifically so it renders with
// the full Navbar/Footer, not the bare root layout — Next.js resolves
// unmatched URLs to the nearest not-found.tsx, and this is the "nearest"
// one for anything under the public site.
//
// TODO: your spec calls for this to use "Professor Pencil" — swap the logo
// medallion below for that illustration once you send the file over. Keep
// the same light backing circle behind it (a pencil-shaped mascot with any
// dark linework would have the same visibility problem in dark mode that
// the logo's navy ink did — see Hero.tsx for how that was solved).
export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center md:px-12">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-[#FFF9F6] shadow-inner" />
        <Image src={logoMark} alt="" className="relative h-28 w-28 object-contain" />
      </div>

      <p className="section-tag mt-8">404</p>
      <h1 className="section-title">Page Not Found</h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mid">
        The page you're looking for doesn't exist, may have moved, or the link might be
        outdated. Let's get you back on track.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-solid">
          <Home size={16} aria-hidden="true" /> Back to Home
        </Link>
        <Link href="/#contact" className="btn-ghost">
          <Mail size={16} aria-hidden="true" /> Contact Me
        </Link>
      </div>
    </main>
  );
}
