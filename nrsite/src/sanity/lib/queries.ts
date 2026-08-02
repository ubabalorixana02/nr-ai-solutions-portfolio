import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(date desc) {
    "slug": slug.current,
    title,
    excerpt,
    date,
    category,
    tags,
    mainImage
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    excerpt,
    date,
    category,
    tags,
    mainImage,
    body
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

// Only approved testimonials are ever queried from the public site — the
// "pending" ones only show up inside Studio for moderation. This filter is
// the actual security boundary for "don't show unmoderated content," not
// just a UI nicety, so don't remove the status filter even if it looks
// redundant with Studio's own view.
export const approvedTestimonialsQuery = groq`
  *[_type == "testimonial" && status == "approved"] | order(submittedAt desc) {
    _id,
    clientName,
    role,
    company,
    photo,
    review,
    rating
  }
`;
