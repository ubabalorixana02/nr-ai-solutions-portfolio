// Small shared contract between CookieBanner.tsx (which sets this) and
// anything that needs to check consent before running (e.g. a future
// Google Analytics script). Kept in one place so both sides agree on the
// storage key and value shape.
export const COOKIE_CONSENT_KEY = "cookie-consent";
export type CookieConsentValue = "accepted" | "declined";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "declined" ? value : null;
}

// Use this to gate any future optional/analytics script (e.g. only load
// Google Analytics if this returns true). Essential site functionality —
// the Google Forms/Calendar embeds this site relies on — isn't gated
// behind consent, since those aren't optional/tracking cookies, they're
// core to the contact and booking features actually working.
export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "accepted";
}
