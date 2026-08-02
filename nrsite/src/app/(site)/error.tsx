"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RotateCcw, Home } from "lucide-react";
import logoMark from "../../../public/brand/logo-mark.png";

// App Router's equivalent of a classic "500 error page" — this boundary
// catches errors thrown while rendering anything inside the (site) route
// group (must be a Client Component; Next.js requires that for error
// boundaries specifically).
export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production this is where you'd forward to an error-tracking
    // service (Sentry, etc.) if one gets added later — for now, at least
    // log it server/browser-side so it's not silently lost.
    console.error("[site error]", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center md:px-12">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-[#FFF9F6] shadow-inner" />
        <Image src={logoMark} alt="" className="relative h-28 w-28 object-contain" />
      </div>

      <p className="section-tag mt-8">500</p>
      <h1 className="section-title">Something Went Wrong</h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mid">
        An unexpected error occurred on this page. It's been logged — try refreshing, or
        head back to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={reset} className="btn-solid">
          <RotateCcw size={16} aria-hidden="true" /> Try Again
        </button>
        <Link href="/" className="btn-ghost">
          <Home size={16} aria-hidden="true" /> Back to Home
        </Link>
      </div>
    </main>
  );
}
