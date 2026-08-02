import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// Maps Sanity's Portable Text block/mark types to our own styled
// components, so post body content matches the rest of the site (fonts,
// colors) instead of default browser styling.
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <span className="my-6 block overflow-hidden rounded-2xl">
        <Image
          src={urlForImage(value).width(1000).url()}
          alt={value.alt || ""}
          width={1000}
          height={650}
          className="h-auto w-full object-cover"
        />
      </span>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="mt-8 mb-3 font-display text-2xl text-heading">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 mb-2 font-display text-xl text-heading">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-rose pl-4 italic text-mid">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-mid">{children}</p>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="text-roseText underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 list-disc space-y-1 pl-5 text-mid">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 list-decimal space-y-1 pl-5 text-mid">{children}</ol>,
  },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Person", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main id="main-content" className="px-6 py-20 md:px-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="mx-auto max-w-2xl">
        <Link href="/blog" className="text-xs uppercase tracking-widest text-roseText">
          ← The Productivity Journal
        </Link>
        <p className="section-tag mt-6">{post.category}</p>
        <h1 className="mt-1 font-display text-4xl text-heading">{post.title}</h1>
        <p className="mt-2 text-xs text-mid">
          {new Date(post.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <div className="divider" />

        {post.mainImage && (
          <div className="mb-8 overflow-hidden rounded-2xl">
            <Image
              src={urlForImage(post.mainImage).width(1200).url()}
              alt={post.mainImage.alt || ""}
              width={1200}
              height={700}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        )}

        <article className="max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>
      </div>
    </main>
  );
}
