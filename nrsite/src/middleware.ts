import { NextRequest, NextResponse } from "next/server";

// Flip MAINTENANCE_MODE=true in your environment variables (locally in
// .env.local, or in Vercel's project settings for production) to take the
// public site offline temporarily. /studio and /api stay reachable so you
// can keep managing content and forms keep working even while the public
// pages show the maintenance screen.
export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  if (!isMaintenanceMode) return NextResponse.next();

  const { pathname } = request.nextUrl;
  const isExempt =
    pathname === "/maintenance" ||
    pathname.startsWith("/studio") ||
    pathname.startsWith("/api") ||
    pathname === "/icon.png" ||
    pathname === "/apple-icon.png" ||
    pathname === "/opengraph-image" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml";

  if (isExempt) return NextResponse.next();

  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  // Runs on everything except Next's internal static asset paths — those
  // are excluded here rather than in the exemption list above since they
  // don't follow a predictable pathname pattern the way our routes do.
  matcher: ["/((?!_next/static|_next/image).*)"],
};
