import Script from "next/script";

// Runs before React hydrates (strategy="beforeInteractive" is Next.js's
// mechanism for exactly this — injecting into <head> and executing before
// paint). If this ran after hydration instead, there'd be a visible flash
// of the wrong theme on every load for anyone who has dark mode saved.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function ThemeScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeInitScript}
    </Script>
  );
}
