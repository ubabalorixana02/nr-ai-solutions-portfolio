import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import Reveal from "./Reveal";

// Set after creating your Google Form — see README "Contact & Consultation
// setup" for exact steps. Public/shareable, so NEXT_PUBLIC_ is correct here
// (unlike the Sanity/write-token env vars, this isn't a secret).
const GOOGLE_FORM_EMBED_URL = process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL;

export default function Contact() {
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
          <a href="mailto:ubabalorixana02@gmail.com" className="card flex items-center gap-3 px-5 py-4 text-sm text-heading">
            <Mail size={18} className="text-rose" aria-hidden="true" /> ubabalorixana02@gmail.com
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

        {GOOGLE_FORM_EMBED_URL ? (
          <div className="card overflow-hidden p-2">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Contact form"
              width="100%"
              height="760"
              className="rounded-xl"
            >
              Loading…
            </iframe>
          </div>
        ) : (
          <div className="card flex flex-col items-center justify-center gap-3 px-8 py-16 text-center">
            <p className="font-display text-xl text-heading">Contact form coming soon</p>
            <p className="text-sm text-mid">
              In the meantime, the fastest way to reach me is directly by email.
            </p>
            <a href="mailto:ubabalorixana02@gmail.com" className="btn-solid mt-2">
              Email Me Directly
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
