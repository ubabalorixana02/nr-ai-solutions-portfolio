"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Mail, Info } from "lucide-react";
import { consultationTiers } from "@/lib/consultations";
import { PAYMENTS_ENABLED } from "@/lib/payments";
import { COMPANY_NAME } from "@/lib/site";
import { formatCurrency } from "@/lib/currency";
import Reveal from "./Reveal";

const CALENDAR_BOOKING_URL = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL;

type PricingRegion = "ZA" | "INTL";

type ConsultationFormProps = {
  initialRegion: PricingRegion;
};

const REGION_STORAGE_KEY = "nr-ai-consultation-region";

export default function ConsultationForm({
  initialRegion,
}: ConsultationFormProps) {
  const [region, setRegion] = useState<PricingRegion>(initialRegion);

  // Restore a visitor's previous manual region choice after the page loads.
  useEffect(() => {
    try {
      const savedRegion = window.localStorage.getItem(REGION_STORAGE_KEY);
      if (savedRegion === "ZA" || savedRegion === "INTL") {
        setRegion(savedRegion);
      }
    } catch {
      // If browser storage is unavailable, use the automatically detected region.
    }
  }, []);

  const handleRegionChange = (nextRegion: PricingRegion) => {
    setRegion(nextRegion);
    try {
      window.localStorage.setItem(REGION_STORAGE_KEY, nextRegion);
    } catch {
      // The selector still works for this visit if browser storage is unavailable.
    }
  };

  const scrollToBooking = () => {
    document.getElementById("consultation-booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Reveal>
        <div className="mx-auto mb-6 flex max-w-xs flex-col items-center gap-1.5 text-center sm:max-w-none sm:flex-row sm:justify-center">
          <label
            htmlFor="consultation-region"
            className="text-xs font-medium text-mid"
          >
            Pricing region
          </label>
          <select
            id="consultation-region"
            value={region}
            onChange={(event) =>
              handleRegionChange(event.target.value as PricingRegion)
            }
            className="rounded-full border border-rosePale bg-card px-3 py-1.5 text-xs text-heading focus:outline-none focus:ring-2 focus:ring-roseDeep sm:ml-1"
          >
            <option value="ZA">South Africa (ZAR)</option>
            <option value="INTL">International (USD)</option>
          </select>
        </div>

        <div className="mb-6 grid gap-5 sm:grid-cols-3">
          {consultationTiers.map((tier) => {
            const price =
              region === "ZA"
                ? formatCurrency(tier.priceZAR, "ZAR")
                : formatCurrency(tier.priceUSD, "USD");

            return (
              <div
                key={tier.slug}
                className="card flex flex-col gap-3 px-5 py-6 text-left"
              >
                <CalendarDays
                  size={20}
                  className="text-rose"
                  aria-hidden="true"
                />
                <div>
                  <span className="font-display text-lg text-heading">
                    {tier.label}
                  </span>
                  <p className="mt-1 font-display text-2xl text-roseText">
                    {price}
                  </p>
                </div>
                <p className="flex-1 text-xs leading-relaxed text-mid">
                  {tier.description}
                </p>
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
          <Info
            size={15}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          Consultation fees are separate from project or service fees. Booking
          a consultation does not automatically include implementation work —
          any project work is scoped and quoted separately after we&apos;ve
          spoken. The displayed price is based on your selected pricing region.
          Your consultation currency and fee will be confirmed when arranging
          your booking.
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
              <CalendarDays
                size={28}
                className="text-rose"
                aria-hidden="true"
              />
              <p className="font-display text-xl text-heading">
                Online booking coming soon
              </p>
              <p className="text-sm text-mid">
                Prefer to arrange a time directly? Contact {COMPANY_NAME} and
                we&apos;ll coordinate a suitable consultation time — let us know
                which consultation tier you&apos;re after.
              </p>
              <a
                href="mailto:nolubabalo@nraisolutions.co.za"
                className="btn-solid mt-2"
              >
                <Mail size={16} aria-hidden="true" /> Email {COMPANY_NAME}
              </a>
            </div>
          )}
        </div>
        {!PAYMENTS_ENABLED && (
          <p className="mx-auto mt-4 max-w-xl text-center text-[0.7rem] text-mid">
            Online payment isn&apos;t enabled yet — booking a slot above
            reserves your time, and payment is arranged directly once we
            confirm the details.
          </p>
        )}
      </Reveal>
    </>
  );
}
