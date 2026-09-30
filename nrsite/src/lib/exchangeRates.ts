import "server-only";
import { SUPPORTED_CURRENCIES, type ExchangeRates } from "./currency";

// Server-only exchange-rate lookup for the consultation pricing display.
//
// Smallest-safe-implementation choice: this uses exchangerate-api.com's free
// "open access" endpoint, which needs no API key/credential at all — so
// there's nothing that could ever leak into the client bundle, and no new
// env var is required. If a keyed/paid provider is ever swapped in later,
// this is the one place to change: read the key from a non-`NEXT_PUBLIC_`
// env var here (server-only files are never bundled for the client) and
// keep everything else (types, formatting, the calling component) the same.
//
// This function is only ever called from a Server Component (see
// src/app/(site)/consultation/page.tsx), so the fetch happens on the server
// and the result is passed down as a plain prop — no client-side network
// call, no API route needed for Phase 1.
const EXCHANGE_RATE_URL = "https://open.er-api.com/v6/latest/ZAR";

// Next.js's built-in fetch cache (the `next.revalidate` option) is used
// instead of a hand-rolled cache — it's the existing project pattern for
// data fetching in Server Components, and avoids adding a new caching
// dependency. Rates only refresh on the provider's end roughly once every
// 24h anyway, so 6h is a safe, conservative cache window that won't hammer
// their free tier.
const REVALIDATE_SECONDS = 6 * 60 * 60;

/**
 * Fetches current ZAR-based exchange rates for the supported currencies.
 * Returns `null` on any failure (network error, bad response shape,
 * non-2xx status) — callers must treat `null` as "conversion unavailable"
 * and fall back to showing the canonical ZAR price only. Never throws.
 */
export async function getExchangeRates(): Promise<ExchangeRates | null> {
  try {
    const res = await fetch(EXCHANGE_RATE_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;

    const data: unknown = await res.json();
    if (
      typeof data !== "object" ||
      data === null ||
      (data as { result?: unknown }).result !== "success" ||
      typeof (data as { rates?: unknown }).rates !== "object"
    ) {
      return null;
    }

    const rawRates = (data as { rates: Record<string, unknown> }).rates;
    const rates: ExchangeRates = { ZAR: 1 };
    for (const code of SUPPORTED_CURRENCIES) {
      if (code === "ZAR") continue;
      const value = rawRates[code];
      if (typeof value === "number" && Number.isFinite(value) && value > 0) {
        rates[code] = value;
      }
    }
    return rates;
  } catch {
    return null;
  }
}
