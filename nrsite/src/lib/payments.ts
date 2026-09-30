// Payment architecture — PREPARED, NOT ACTIVE.
//
// No payment processor is wired up yet, and nothing in this codebase
// currently charges anyone. This file exists so that when a processor
// (PayFast, Yoco, Paystack, etc.) is actually set up, there's one obvious
// place to wire it in rather than hunting through every form component.
//
// Intended flows once payment is enabled (see project README for the full
// non-technical explanation of each step):
//
//   Consultation:
//     Select tier -> Book slot (Google Calendar) -> Pay -> Confirmation
//
//   Project work:
//     Request Quote -> Assessment -> Proposal/Quotation -> Client Approval
//     -> Invoice/Payment -> Project Begins
//
// PAYMENTS_ENABLED stays false until a real processor is configured — every
// place that references it today (consultation tiers, quote page) uses it
// only to decide whether to show preparatory copy like "payment coming
// soon," never to attempt an actual charge.
export const PAYMENTS_ENABLED = false;
