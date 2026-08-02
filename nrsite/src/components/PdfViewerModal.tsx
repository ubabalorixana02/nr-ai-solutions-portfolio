"use client";

import { useEffect, useRef } from "react";
import { usePdfViewer } from "./PdfViewerContext";
import { X, Lock } from "lucide-react";

export default function PdfViewerModal() {
  const { isOpen, src, name, closePdf } = usePdfViewer();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Move focus into the dialog when it opens, and trap Tab/Shift+Tab within
  // it while open so keyboard users can't tab into the page behind it.
  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePdf();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], iframe, [tabindex]:not([tabindex="-1"])'
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
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closePdf]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-charcoal/60 p-4 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePdf();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-viewer-title"
        className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-card"
      >
        <div className="flex items-center justify-between gap-3 bg-rosePale px-5 py-3">
          <span id="pdf-viewer-title" className="truncate text-sm font-medium text-heading">
            {name}
          </span>
          <span className="hidden items-center gap-1 text-xs text-mid sm:flex">
            <Lock size={13} aria-hidden="true" /> View only — download disabled
          </span>
          <button
            ref={closeBtnRef}
            onClick={closePdf}
            aria-label="Close PDF viewer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-roseText transition hover:bg-roseDeep hover:text-white"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
        {src && (
          <iframe src={src} title={name ?? "PDF document"} className="w-full flex-1 border-0" />
        )}
      </div>
    </div>
  );
}
