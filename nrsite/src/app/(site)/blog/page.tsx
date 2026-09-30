import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { urlForImage } from "@/sanity/lib/image";
import { SITE_URL, COMPANY_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Productivity Journal",
  description: "Notes on AI, virtual assistance, automation and running an efficient business.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `The Productivity Journal | ${COMPANY_NAME}`,
    description: "Notes on AI, virtual assistance, automation and running an efficient business.",
    url: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <p className="section-tag">The Blog</p>
      <h1 className="section-title">The Productivity Journal</h1>
      <div className="divider" />

      {posts.length === 0 ? (
        <p className="text-mid">
          No posts yet — write your first one in{" "}
          <Link href="/studio" className="text-roseText underline underline-offset-2">
            the Studio
          </Link>
          .
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card flex flex-col gap-2 overflow-hidden">
              {p.mainImage && (
                <div className="relative h-40 w-full">
                  <Image
                    src={urlForImage(p.mainImage).width(600).height(400).fit("crop").url()}
                    alt={p.mainImage.alt || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2 px-6 py-6">
                <span className="text-[0.65rem] uppercase tracking-widest text-roseText">{p.category}</span>
                <h2 className="font-display text-xl text-heading">{p.title}</h2>
                <p className="flex-1 text-sm leading-relaxed text-mid">{p.excerpt}</p>
                <span className="text-xs text-mid">
                  {new Date(p.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
