// Currency types + formatting/conversion helpers. Safe to import from both
// server and client components — no network calls or secrets in here (see
// src/lib/exchangeRates.ts for the server-only fetch that supplies rates).

export const SUPPORTED_CURRENCIES = ["ZAR", "USD", "GBP", "EUR", "AUD", "CAD"] as const;
export type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number];

// Rates are ZAR-based: rates.USD = how many USD equal 1 ZAR. ZAR itself is
// always 1. Partial because a fetch failure may leave some/all codes missing.
export type ExchangeRates = Partial<Record<CurrencyCode, number>>;

const CURRENCY_LOCALE: Record<CurrencyCode, string> = {
  ZAR: "en-ZA",
  USD: "en-US",
  GBP: "en-GB",
  EUR: "de-DE",
  AUD: "en-AU",
  CAD: "en-CA",
};

/**
 * Formats an amount in the given currency. ZAR is special-cased to match
 * the site's existing "R150" convention (no decimals, no space) rather than
 * the ICU default ("R 150"), so the canonical price display doesn't change
 * visually. Non-ZAR currencies use Intl's currency formatting plus an
 * explicit code suffix, since USD/AUD/CAD all render with the same "$"
 * symbol and would otherwise be ambiguous.
 */
export function formatCurrency(amount: number, currency: CurrencyCode): string {
  const rounded = Math.round(amount);
  if (currency === "ZAR") return `R${rounded}`;
  const symbolPart = new Intl.NumberFormat(CURRENCY_LOCALE[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(rounded);
  return `${symbolPart} ${currency}`;
}

/**
 * Converts a canonical ZAR amount into `currency` using `rates`. Returns
 * `null` when there's no usable rate for that currency (rates fetch failed,
 * or that specific code was missing from the response) — callers should
 * treat `null` as "show a fallback", never fabricate a value.
 */
export function convertFromZAR(
  amountZAR: number,
  currency: CurrencyCode,
  rates: ExchangeRates | null | undefined
): number | null {
  if (currency === "ZAR") return amountZAR;
  const rate = rates?.[currency];
  if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) return null;
  return amountZAR * rate;
}
