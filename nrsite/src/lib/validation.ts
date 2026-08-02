import { z } from "zod";

// Contact and consultation submissions now go through embedded Google
// Forms / Google Calendar (see Contact.tsx and ConsultationForm.tsx) rather
// than a custom API route, so those two schemas were removed. Testimonials
// still go through our own Sanity-backed API route, so that one stays.

export const consultationOptions = [
  "30 Minute Discovery Call",
  "60 Minute Business Consultation",
  "Project Consultation",
  "Website Consultation",
  "Workflow Review",
] as const;

export const testimonialFormSchema = z.object({
  clientName: z.string().trim().min(1, "Name is required").max(120),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  review: z.string().trim().min(10, "A little more detail helps future clients").max(1000),
  rating: z.number().int().min(1).max(5),
  // Honeypot: a field real users never see or fill in (hidden via CSS, not
  // `type="hidden"`, so unsophisticated bots that only skip hidden inputs
  // still fall for it). Any value here means it was almost certainly a bot.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type TestimonialFormValues = z.infer<typeof testimonialFormSchema>;
