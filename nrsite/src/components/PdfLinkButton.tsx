"use client";

import { usePdfViewer } from "./PdfViewerContext";
import { ReactNode } from "react";

export default function PdfLinkButton({
  file,
  name,
  className,
  children,
  ariaLabel,
}: {
  file: string;
  name: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const { openPdf } = usePdfViewer();
  return (
    <button
      type="button"
      onClick={() => openPdf(file, name)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
