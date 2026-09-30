"use client";

import { useState } from "react";
import { CalendarDays, Mail, Info } from "lucide-react";
import { consultationTiers } from "@/lib/consultations";
import { PAYMENTS_ENABLED } from "@/lib/payments";
import { COMPANY_NAME } from "@/lib/site";
import {
  SUPPORTED_CURRENCIES,
  formatCurrency,
  convertFromZAR,
  type CurrencyCode,
  type ExchangeRates,
} from "@/lib/currency";
import Reveal from "./Reveal";

// Set after creating a Google Calendar "Appointment schedule" — see README
// "Contact & Consultation setup" for exact steps. Public/shareable link, so
// NEXT_PUBLIC_ is correct here (not a secret).
const CALENDAR_BOOKING_URL = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL;

type ConsultationFormProps = {
  // Server-fetched ZAR-based exchange rates (see src/lib/exchangeRates.ts),
  // or null if the fetch failed/was unavailable. ZAR display never depends
  // on this — it's only used for the optional converted estimate.
  rates: ExchangeRates | null;
};

export default function ConsultationForm({ rates }: ConsultationFormProps) {
  // Display currency only — purely cosmetic. The canonical price is always
  // ZAR (see src/lib/consultations.ts); this never changes what's charged.
  const [currency, setCurrency] = useState<CurrencyCode>("ZAR");

  const scrollToBooking = () => {
    document.getElementById("consultation-booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Reveal>
        {currency !== "ZAR" || rates ? (
          <div className="mx-auto mb-6 flex max-w-xs flex-col items-center gap-1.5 text-center sm:max-w-none sm:flex-row sm:justify-center">
            <label htmlFor="consultation-currency" className="text-xs font-medium text-mid">
              Display prices in
            </label>
            <select
              id="consultation-currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="rounded-full border border-rosePale bg-card px-3 py-1.5 text-xs text-heading focus:outline-none focus:ring-2 focus:ring-roseDeep sm:ml-1"
            >
              {SUPPORTED_CURRENCIES.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <div className="mb-6 grid gap-5 sm:grid-cols-3">
          {consultationTiers.map((tier) => {
            const converted = currency === "ZAR" ? null : convertFromZAR(tier.priceZAR, currency, rates);
            return (
              <div key={tier.slug} className="card flex flex-col gap-3 px-5 py-6 text-left">
                <CalendarDays size={20} className="text-rose" aria-hidden="true" />
                <div>
                  <span className="font-display text-lg text-heading">{tier.label}</span>
                  <p className="mt-1 font-display text-2xl text-roseText">
                    {formatCurrency(tier.priceZAR, "ZAR")}
                  </p>
                  {currency !== "ZAR" &&
                    (converted !== null ? (
                      <p className="mt-0.5 text-xs text-mid">
                        ≈ {formatCurrency(converted, currency)}{" "}
                        <span className="italic">(estimated)</span>
                      </p>
                    ) : (
                      <p className="mt-0.5 text-xs text-mid">
                        Conversion unavailable right now — price shown in ZAR
                      </p>
                    ))}
                </div>
                <p className="flex-1 text-xs leading-relaxed text-mid">{tier.description}</p>
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="mt-1 rounded-full bg-roseDeep px-4 py-2 text-[0.68rem] uppercase tracking-wider text-white transition hover:bg-navy"
                >
                  Book Consultation
                </button>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mb-10 flex max-w-xl items-start gap-2 rounded-xl bg-rosePale px-4 py-3 text-xs leading-relaxed text-roseText">
          <Info size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
          Consultation fees are separate from project or service fees. Booking a consultation
          does not automatically include implementation work — any project work is scoped and
          quoted separately after we've spoken.
          {currency !== "ZAR" && (
            <>
              {" "}
              All fees are billed in South African Rand (ZAR); other currencies shown are
              estimated conversions for reference only, not a guaranteed amount.
            </>
          )}
        </p>
      </Reveal>

      <Reveal>
        <div id="consultation-booking" className="scroll-mt-24">
          {CALENDAR_BOOKING_URL ? (
            <div className="card mx-auto max-w-2xl overflow-hidden p-2">
              <iframe
                src={CALENDAR_BOOKING_URL}
                title="Book a consultation"
                width="100%"
                height="700"
                className="rounded-xl"
              >
                Loading…
              </iframe>
            </div>
          ) : (
            <div className="card mx-auto flex max-w-xl flex-col items-center gap-3 px-8 py-16 text-center">
              <CalendarDays size={28} className="text-rose" aria-hidden="true" />
              <p className="font-display text-xl text-heading">Online booking coming soon</p>
              <p className="text-sm text-mid">
                Prefer to arrange a time directly? Contact {COMPANY_NAME} and we&apos;ll
                coordinate a suitable consultation time — let us know which consultation tier
                you&apos;re after.
              </p>
              <a href="mailto:nolubabalo@nraisolutions.co.za" className="btn-solid mt-2">
                <Mail size={16} aria-hidden="true" /> Email {COMPANY_NAME}
              </a>
            </div>
          )}
        </div>
        {!PAYMENTS_ENABLED && (
          <p className="mx-auto mt-4 max-w-xl text-center text-[0.7rem] text-mid">
            Online payment isn&apos;t enabled yet — booking a slot above reserves your time, and
            payment is arranged directly once we confirm the details.
          </p>
        )}
      </Reveal>
    </>
  );
}
