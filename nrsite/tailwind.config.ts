import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fixed — used only as solid fills with white text on top (buttons,
        // footer, nav CTA), or as purely decorative gradients/dots already
        // verified to have sufficient contrast against both light and dark
        // page backgrounds. These intentionally do NOT change with theme.
        navy: "#163A70",
        blush: "#E8B6C8",
        gold: "#C9A227",
        charcoal: "#222222",
        rose: "#C97A8C",
        roseDeep: "#8E4A5D",

        // Theme-aware — swap value via the .dark class (see globals.css).
        // cream/heading use the rgb()/<alpha-value> pattern because they're
        // used with opacity modifiers elsewhere (bg-cream/90, text-heading/80);
        // the rest are plain var() since nothing applies an opacity modifier
        // to them.
        cream: "rgb(var(--color-cream-rgb) / <alpha-value>)",
        heading: "rgb(var(--color-heading-rgb) / <alpha-value>)",
        surface: "var(--color-surface)",   // alternating section background
        card: "var(--color-card)",         // card / elevated surface background
        mid: "var(--color-mid)",           // body text
        rosePale: "var(--color-rosePale)", // chip backgrounds, card borders
        // rose (#C97A8C) fails WCAG AA (4.5:1) as small text — only ~3:1.
        // roseText is a theme-aware accent-text color: darkened from brand
        // rose for light backgrounds, lightened for dark ones, so it clears
        // AA in both. Use `rose` only for backgrounds/borders/large (24px+)
        // display text, where the lower 3:1 threshold applies.
        roseText: "var(--color-roseText)",

        // Kept for backwards compatibility with anything still referencing
        // the old fixed "blushPale" (e.g. Footer's fixed-navy-surface text,
        // which intentionally does NOT change with theme).
        blushPale: "#F6E4EB",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
