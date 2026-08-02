# NR AI Solutions — Nolubabalo Rixana Portfolio (Next.js)

A production-ready Next.js rebuild of the portfolio. Built with Next.js (App Router),
TypeScript, and Tailwind CSS, keeping the original navy / blush-pink / gold brand system
and Cormorant Garamond + Jost typefaces. Content (blog + testimonials) is managed through
a real, self-hosted CMS (Sanity) embedded directly in this app — and the contact and
consultation forms send real emails.

## What's included

- **Home** — Hero, About, Services, Experience, Skills & Tools, Projects, Certifications,
  Testimonials, Contact — all as real components (`src/components`).
- **Dark mode** — a toggle in the nav, remembers your preference, no flash of the wrong
  theme on load. See "Dark mode" below for how the color system works if you ever need
  to adjust it.
- **Projects & Case Studies** (`/projects`, `/projects/[slug]`) — each of the 6 projects has
  its own dedicated page structured as Challenge → Solution → Technologies → Features →
  Results → Lessons Learned.
- **The Productivity Journal** (`/blog`, `/blog/[slug]`) — a real blog, content managed
  in Sanity Studio at `/studio` on this same site.
- **Consultation booking** (`/consultation`) — the discovery-call / business-consultation
  / project / website / workflow-review options from your original spec, with a Google
  Calendar appointment scheduler embedded so people book a real open slot directly.
- **Contact form** — an embedded Google Form. Responses land in Google Forms/Sheets and
  email `ubabalorixana02@gmail.com` automatically once you turn that on (see below).
- **Testimonials** — visitors can submit a review from the homepage; it's saved to Sanity
  as "pending" and only appears publicly once you approve it in Studio. See "Moderating
  testimonials" below.
- **Resources / Download Centre** (`/resources`) — both resumes and all 16 certificates.
- **View-only PDF viewer** — every resume/certificate button opens a modal PDF viewer
  instead of downloading. This is a UX deterrent (no visible download/print controls,
  toolbar hidden), not unbreakable DRM — a determined user could still access the file
  via browser dev tools. Treat it as "friction," not a security guarantee.
- Real PDF files live in `public/documents/`.
- Your actual logo — used as the favicon, in the nav, hero, footer, and the social-share
  (Open Graph) image. Source files are in `public/brand/`.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in real values — see below
npm run dev
```

Visit `http://localhost:3000` for the site, `/studio` for the content editor.

To build for production:

```bash
npm run build
npm start
```

## Environment variables

Everything is documented inline in `.env.local.example`, but in short, you need:

| Variable | What it's for | Required? |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Connects to your Sanity project | Pre-filled, works out of the box |
| `NEXT_PUBLIC_SANITY_DATASET` | Which dataset (usually `production`) | Pre-filled |
| `SANITY_API_READ_TOKEN` | Only if your dataset is Private | Optional |
| `SANITY_API_WRITE_TOKEN` | Lets the testimonial form save submissions | Required for testimonials to work |
| `NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL` | Embeds your Google Form on `/#contact` | Required for the contact form to appear |
| `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` | Embeds your Calendar booking page on `/consultation` | Required for booking to appear |

The site still builds and runs without any of these filled in — the contact and
consultation sections just show a "coming soon, email me directly" fallback instead of
crashing the page.

## Sanity CMS setup

1. Copy `.env.local.example` to `.env.local`.
2. Confirm your dataset name under **sanity.io/manage → your project → Datasets** —
   almost always `production`, which is what's pre-filled.
3. Check whether your dataset is **Public** or **Private** under **your project → API**.
   Public datasets need nothing else for reading. If Private, generate a read token
   (**API → Tokens → Add API token → Viewer permissions**) and paste it into
   `SANITY_API_READ_TOKEN`.
4. For testimonials to save, generate a second token with write access (**API → Tokens →
   Add API token → Editor permissions**) and paste it into `SANITY_API_WRITE_TOKEN`. Keep
   this one especially private — never commit it, never prefix it with `NEXT_PUBLIC_`.
5. Run `npm run dev` and open `/studio` to confirm you can log in and see **Blog Post**
   and **Testimonial** document types.

### Writing blog posts

`/studio` → **Blog Post → Create** → fill in title, excerpt, category, tags, cover image,
body → Publish. Appears on `/blog` within about a minute (pages revalidate every 60
seconds — no redeploy needed).

### Moderating testimonials

When someone submits a review, it lands in `/studio` → **Testimonial** with Status set to
"⏳ Pending review" — it will **not** appear on the site yet. Open it, read it, and if it's
legitimate, change Status to "✅ Approved" and publish. It'll appear on the homepage within
about a minute. Spam submissions can just be deleted.

## Contact & Consultation setup (Google Forms + Calendar)

Both of these are embedded via a plain iframe pointing at something you create in your
own Google account (`ubabalorixana02@gmail.com` or whichever you use) — no API keys, no
third-party service, no code changes needed once they're set up.

### Contact form

1. Go to [forms.google.com](https://forms.google.com) and build a form with your contact
   fields (Name, Email, Company, Subject, Message).
2. In the form editor: **Settings (gear icon) → Responses → turn on "Get email
   notifications for new responses."** This is what makes every submission land in your
   inbox — it's a native Forms feature, nothing extra to build or configure.
3. Click **Send → the `<>` (embed) tab** → copy the `src="..."` URL out of the `<iframe>`
   snippet it gives you → paste it into `NEXT_PUBLIC_GOOGLE_CONTACT_FORM_URL` in
   `.env.local`.

### Consultation booking

1. In Google Calendar, click **Create → Appointment schedule**.
2. Set your available hours and appointment duration. Worth adding a custom question or
   two here too (e.g. "What service are you after?", "What's the challenge?") — Calendar
   collects that at booking time, so you don't need a separate form for it.
3. Once created, get its public booking page link and paste it into
   `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` in `.env.local`. Bookings, cancellations, and
   reminders sync straight to your Google Calendar and email you automatically — again,
   native Calendar behavior.

### If the embed looks cramped or cut off

Both iframes use a fixed height (`Contact.tsx` / `ConsultationForm.tsx`) since Google
doesn't expose a way to auto-size an embedded form/calendar to its content. If your real
form ends up with more or fewer fields than expected, just adjust the `height="760"` (or
`"700"`) prop in the relevant component.

## Dark mode

Toggled from the nav (sun/moon icon), persisted in `localStorage`, and respects the
visitor's OS-level preference on first visit. If you ever need to adjust a color:

- Colors that are the **same in both themes** (button fills, decorative gradients) are
  defined directly in `tailwind.config.ts` as plain hex values.
- Colors that **change between themes** (page background, headings, body text, card
  surfaces) are CSS variables, defined once in `src/app/globals.css` under `:root` (light)
  and `.dark` (dark), then wired into Tailwind as color tokens (`cream`, `heading`, `mid`,
  `surface`, `card`, `rosePale`, `roseText`) so every existing `bg-*`/`text-*` class in the
  components just works in both themes automatically.
- A few one-off spots (the logo's navy ink, small "chip" badges) are intentionally fixed
  to a light background regardless of theme, since the logo file itself doesn't change —
  these are commented in the code with `bg-[#FFF9F6]`.

## Cookie banner

Shows once per visitor (bottom-right, dismissible via Accept/Decline), and remembers
their choice in local storage so it doesn't nag on every visit. Right now it's mostly
about transparency — this site doesn't set analytics or marketing cookies yet — but it's
wired for the future: if Google Analytics (or anything similar) gets added later, gate
its script tag behind `hasAnalyticsConsent()` from `src/lib/cookieConsent.ts`, and the
banner's "Accept" choice becomes the real on/off switch for it, no extra work needed then.

## Error pages & maintenance mode

- **404** (`src/app/(site)/not-found.tsx`) and a runtime **error boundary**
  (`src/app/(site)/error.tsx`, App Router's equivalent of a "500 page") are both styled to
  match the rest of the site, with a "Try Again" / "Back to Home" way out.
- **Maintenance mode** — set `MAINTENANCE_MODE=true` (locally or in Vercel's environment
  variables) to redirect all public traffic to a maintenance screen. `/studio` and every
  `/api` route keep working regardless, so you can keep managing content and forms keep
  functioning even while the public pages are "down." Flip it back to `false` (or remove
  it) to bring the site back.
- **Professor Pencil** — your spec calls for the 404/maintenance pages to use this
  mascot. I don't have that illustration file, so these currently use your logo instead.
  Send the file over and I'll swap it in — worth keeping in mind it'll need the same
  "light backing behind dark linework" treatment the logo needed for dark mode (see
  `Hero.tsx` for that pattern) if the illustration has dark ink in it.

## Deployment

Recommended: [Vercel](https://vercel.com) — connect this repo and it deploys automatically
with zero config (Next.js is made by the same company). Add all the environment variables
from `.env.local` in your Vercel project settings under **Environment Variables**.

## Still to build (noted, not built)

Per the original blueprint, these were marked "future roadmap" and are **not** built here:
client portal (login/dashboard/file manager/messaging), payment/invoicing, live chat
assistant.

## Project structure

```
src/
  app/
    (site)/         Public site routes — home, projects, blog, consultation, resources,
                     legal pages (route group; the parentheses don't appear in the URL)
    api/             testimonials — the only remaining form submission handler (contact
                     and consultation now go through embedded Google Forms/Calendar)
    studio/          Embedded Sanity Studio at /studio (no site chrome)
  components/        Reusable UI components
  lib/                Data (projects, documents, blog, testimonials), validation schema,
                     rate-limit helper
  sanity/            Sanity clients (read + write), image URL builder, GROQ queries,
                     schema types
sanity.config.ts    Studio configuration (schema, plugins, project/dataset)
public/
  documents/          Resume PDFs + certificates
  brand/              Logo assets (full lockup + monogram mark)
```
