import { client } from "@/sanity/lib/client";
import { allPostsQuery, postBySlugQuery, allPostSlugsQuery } from "@/sanity/lib/queries";
import type { Image, PortableTextBlock } from "sanity";

// Content now lives in Sanity (see /studio in this app, or
// https://sanity.io/manage). This file is the only place that talks to
// Sanity directly — every page consumes the PostMeta/Post shapes below, so
// if the query or field names ever change, this is the one file to touch.

// Sanity's base Image type doesn't know about our custom "alt" field
// (defined in schemaTypes/post.ts) — extend it so callers get proper typing.
export type SanityImageWithAlt = Image & { alt?: string };

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  mainImage?: SanityImageWithAlt;
};

export type Post = PostMeta & {
  body: PortableTextBlock[];
};

// These three functions never throw. If Sanity is unreachable — wrong env
// vars, a private dataset with no token yet, a brief outage, or this repo
// freshly cloned before .env.local is filled in — a hard failure here would
// take down the ENTIRE site build (Next.js runs generateStaticParams and
// page data collection for every route in one build; one thrown error stops
// all of it, not just the blog). Blog content being temporarily unavailable
// should degrade to "no posts yet", not a broken site. Errors are still
// logged so the problem is visible in build/server logs, not silently lost.

export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    return await client.fetch(allPostsQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("[sanity] Failed to fetch posts — check .env.local / dataset visibility:", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(postBySlugQuery, { slug }, { next: { revalidate: 60 } });
  } catch (err) {
    console.error(`[sanity] Failed to fetch post "${slug}":`, err);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  try {
    return await client.fetch(allPostSlugsQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error("[sanity] Failed to fetch post slugs — check .env.local / dataset visibility:", err);
    return [];
  }
}
