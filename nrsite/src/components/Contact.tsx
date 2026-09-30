"use client";

import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, MapPin, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import ContactConsentModal from "./ContactConsentModal";

// Set after creating your Google Form — see README "Contact & Consultation
// setup" for exact steps. Public/shareable, so NEXT_PUBLIC_ is correct here
// (unlike the Sanity/write-token env vars, this isn't a secret).
const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL;

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openModal = () => {
    triggerRef.current = document.activeElement as HTMLButtonElement | null;
    setModalOpen(true);
  };

  const handleContinue = () => {
    setModalOpen(false);
    if (GOOGLE_FORM_URL) {
      window.open(GOOGLE_FORM_URL, "_blank", "noopener");
    }
  };

  return (
    <section id="contact" className="bg-surface px-6 py-24 md:px-12">
      <Reveal>
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">
          Let&apos;s <em>Connect</em>
        </h2>
        <div className="divider" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <a href="mailto:nolubabalo@nraisolutions.co.za" className="card flex items-center gap-3 px-5 py-4 text-sm text-heading">
            <Mail size={18} className="text-rose" aria-hidden="true" /> nolubabalo@nraisolutions.co.za
          </a>
          <a href="tel:+27697012781" className="card flex items-center gap-3 px-5 py-4 text-sm text-heading">
            <Phone size={18} className="text-rose" aria-hidden="true" /> +27 69 701 2781
          </a>
          <a
            href="https://linkedin.com/in/nolubabalo-rixana-809745209"
            target="_blank"
            rel="noopener"
            className="card flex items-center gap-3 px-5 py-4 text-sm text-heading"
          >
            <Linkedin size={18} className="text-rose" aria-hidden="true" /> LinkedIn Profile
          </a>
          <div className="card flex items-center gap-3 px-5 py-4 text-sm text-heading">
            <MapPin size={18} className="text-rose" aria-hidden="true" /> Gqeberha, Eastern Cape, South Africa
          </div>
        </div>

        <div className="card flex flex-col items-center justify-center gap-4 px-8 py-16 text-center">
          <MessageCircle size={28} className="text-rose" aria-hidden="true" />
          <p className="font-display text-xl text-heading">Ready to say hello?</p>
          <p className="max-w-sm text-sm text-mid">
            Click below to send a message — you&apos;ll see exactly what happens with your
            information before anything opens.
          </p>
          <button onClick={openModal} className="btn-solid mt-2">
            Contact Me
          </button>
        </div>
      </div>

      <ContactConsentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onContinue={handleContinue}
        triggerRef={triggerRef}
      />
    </section>
  );
}
