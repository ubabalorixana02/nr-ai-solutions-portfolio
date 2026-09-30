"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/**
 * Gate in front of the external Google Contact Form — explains what
 * happens before sending anyone off-site, rather than redirecting silently.
 * Accessibility pattern (focus trap, Escape, scroll lock, focus restore)
 * mirrors PdfViewerModal.tsx for consistency across the site's modals.
 */
export default function ContactConsentModal({
  isOpen,
  onClose,
  onContinue,
  triggerRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const continueBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    continueBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-charcoal/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-consent-title"
        className="relative w-full max-w-md rounded-2xl bg-card p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-mid transition hover:bg-surface hover:text-heading"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <h2 id="contact-consent-title" className="pr-8 font-display text-xl text-heading">
          Before you continue
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-mid">
          To contact Nolubabalo Rixana, you will be redirected to a Google Form where you may
          provide personal information such as your name, email address, company details and
          enquiry.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mid">
          Your information will be used to respond to your enquiry and provide requested
          services. Please review the{" "}
          <Link href="/privacy-policy" className="text-roseText underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          for more information.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button ref={continueBtnRef} onClick={onContinue} className="btn-solid flex-1 justify-center">
            Continue to Contact Form
          </button>
          <button onClick={onClose} className="btn-ghost flex-1 justify-center">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
