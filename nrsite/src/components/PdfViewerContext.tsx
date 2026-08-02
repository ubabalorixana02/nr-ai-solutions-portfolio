"use client";

import { createContext, useContext, useRef, useState, ReactNode } from "react";

type PdfViewerState = {
  isOpen: boolean;
  src: string | null;
  name: string | null;
  openPdf: (src: string, name: string) => void;
  closePdf: () => void;
  /** Element that opened the viewer, so we can return focus to it on close. */
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const PdfViewerContext = createContext<PdfViewerState | undefined>(undefined);

export function PdfViewerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openPdf = (pdfSrc: string, pdfName: string) => {
    // Remember whatever had focus (the button that was clicked) so we can
    // return keyboard/screen-reader focus to it when the modal closes —
    // without this, focus silently drops back to <body> and a keyboard user
    // loses their place on the page.
    triggerRef.current = document.activeElement as HTMLElement | null;
    // #toolbar=0&navpanes=0 hides the built-in download/print controls in
    // browsers that respect PDF open params (Chrome/Edge). This is a UX
    // deterrent, not a hard security guarantee — a determined user can still
    // save the file via dev tools. Good enough for "view only, for now".
    setSrc(`${pdfSrc}#toolbar=0&navpanes=0`);
    setName(pdfName);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePdf = () => {
    setIsOpen(false);
    setSrc(null);
    setName(null);
    document.body.style.overflow = "";
    triggerRef.current?.focus();
  };

  return (
    <PdfViewerContext.Provider value={{ isOpen, src, name, openPdf, closePdf, triggerRef }}>
      {children}
    </PdfViewerContext.Provider>
  );
}

export function usePdfViewer() {
  const ctx = useContext(PdfViewerContext);
  if (!ctx) throw new Error("usePdfViewer must be used within PdfViewerProvider");
  return ctx;
}
