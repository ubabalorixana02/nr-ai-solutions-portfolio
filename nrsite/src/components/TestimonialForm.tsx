"use client";

import { useId, useState, FormEvent } from "react";
import { Star, Loader2, AlertCircle, ChevronDown, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fieldClass =
  "rounded-xl border border-rosePale bg-card px-4 py-3 text-sm text-heading outline-none focus-visible:border-navy focus-visible:ring-2 focus-visible:ring-navy/30 dark:focus-visible:border-roseText dark:focus-visible:ring-roseText/30 transition disabled:opacity-60";
const labelClass = "text-xs font-medium uppercase tracking-wide text-heading/80";

type Status = "idle" | "submitting" | "success" | "error";

export default function TestimonialForm() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formId = useId();
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      clientName: formData.get("clientName"),
      role: formData.get("role"),
      company: formData.get("company"),
      review: formData.get("review"),
      rating,
      website: formData.get("website"),
    };

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card mx-auto mt-8 max-w-xl px-8 py-8 text-center"
        role="status"
      >
        <motion.span
          initial={shouldReduceMotion ? undefined : { scale: 0 }}
          animate={shouldReduceMotion ? undefined : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose/15"
        >
          <Check size={24} className="text-roseText" aria-hidden="true" />
        </motion.span>
        <p className="mt-3 font-display text-lg text-heading">Thank you for your feedback!</p>
        <p className="mt-2 text-sm text-mid">
          Your review has been submitted and will appear here once approved.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="testimonial-form-panel"
        className="mx-auto flex items-center gap-2 text-sm font-medium text-roseText"
      >
        Share your feedback
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <form id="testimonial-form-panel" onSubmit={handleSubmit} noValidate className="card relative mt-4 grid gap-4 px-6 py-6">
          <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
            <label htmlFor={`${formId}-website`}>Leave this field empty</label>
            <input id={`${formId}-website`} name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-1.5">
            <span className={labelClass}>Your Rating</span>
            <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={rating === n}
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHoverRating(n)}
                  onMouseLeave={() => setHoverRating(null)}
                  className="p-0.5"
                >
                  <Star
                    size={22}
                    className={(hoverRating ?? rating) >= n ? "fill-rose text-rose" : "text-rosePale"}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-1.5">
            <label htmlFor={`${formId}-clientName`} className={labelClass}>Name</label>
            <input id={`${formId}-clientName`} name="clientName" required disabled={status === "submitting"} className={fieldClass} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor={`${formId}-role`} className={labelClass}>Role (optional)</label>
              <input id={`${formId}-role`} name="role" disabled={status === "submitting"} className={fieldClass} />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor={`${formId}-company`} className={labelClass}>Company (optional)</label>
              <input id={`${formId}-company`} name="company" disabled={status === "submitting"} className={fieldClass} />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label htmlFor={`${formId}-review`} className={labelClass}>Your Review</label>
            <textarea id={`${formId}-review`} name="review" required rows={4} minLength={10} disabled={status === "submitting"} className={fieldClass} />
          </div>

          {status === "error" && errorMessage && (
            <p role="alert" className="flex items-start gap-2 rounded-lg bg-rosePale px-3 py-2 text-xs text-roseText">
              <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              {errorMessage}
            </p>
          )}

          <p className="text-[0.7rem] text-mid">
            Reviews are checked before they appear publicly, so yours won&apos;t show up immediately.
          </p>

          <button type="submit" disabled={status === "submitting"} className="btn-solid justify-center disabled:cursor-not-allowed disabled:opacity-70">
            {status === "submitting" ? (
              <>
                <Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting…
              </>
            ) : (
              "Submit Review"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
