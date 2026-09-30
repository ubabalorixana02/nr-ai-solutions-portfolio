import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/quote`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/consultation`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/recruitment`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/legal`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/accessibility`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/data-request`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const posts = await getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
