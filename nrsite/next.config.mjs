/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Applies to every route, including /studio — these are all safe
        // defaults that don't interfere with the embedded Google Forms/
        // Calendar iframes (those are things THIS site embeds, not the
        // other way around) or with Sanity Studio's own scripts.
        //
        // Deliberately NOT included here: a strict Content-Security-Policy.
        // Getting one right without silently breaking the Google embeds or
        // Studio needs testing in a real browser, which isn't possible to
        // verify from this environment — better to ship the headers that
        // are unambiguously safe now than guess at a CSP and risk a silent
        // breakage. Revisit this with real browser testing before adding.
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
export default nextConfig;
