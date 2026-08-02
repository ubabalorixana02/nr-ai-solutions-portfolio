import { client } from "@/sanity/lib/client";
import { approvedTestimonialsQuery } from "@/sanity/lib/queries";
import type { Image } from "sanity";

export type Testimonial = {
  _id: string;
  clientName: string;
  role?: string;
  company?: string;
  photo?: Image;
  review: string;
  rating: number;
};

// Never throws — see the matching comment in lib/blog.ts for why. A
// testimonials fetch failing should show the empty-state placeholder, not
// break the homepage.
export async function getApprovedTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(approvedTestimonialsQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("[sanity] Failed to fetch testimonials:", err);
    return [];
  }
}
