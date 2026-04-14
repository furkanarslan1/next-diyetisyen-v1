import { getPostBySlug, getAllSlugs, getPostsByCategory } from "@/lib/data/blog-posts";
import { BlogSection } from "@/lib/types/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Diyetisyen Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Diyetisyen Blog`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "/diyetisyen-hero-1.webp",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Diyetisyen Blog`,
      description: post.excerpt,
      images: ["/diyetisyen-hero-1.webp"],
    },
  };
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-xl md:text-2xl font-bold text-neutral-900 mt-10 mb-4 leading-snug"
        >
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p
          key={index}
          className="text-neutral-600 leading-relaxed text-base md:text-lg"
        >
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="flex flex-col gap-2 my-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-600 text-base md:text-lg">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div
          key={index}
          className="relative rounded-2xl bg-linear-to-br from-green-50 to-emerald-50 border border-green-200 p-5 my-6"
        >
          <span className="block text-[10px] font-semibold text-green-600 uppercase tracking-widest mb-2">
            Uzman İpucu
          </span>
          <p className="text-green-800 text-sm md:text-base leading-relaxed">
            {section.text?.replace(/^Uzman İpucu:\s*/i, "")}
          </p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: "/diyetisyen-hero-1.webp",
    author: {
      "@type": "Person",
      name: "Ayşe Yılmaz",
      jobTitle: "Diyetisyen",
    },
    publisher: {
      "@type": "Organization",
      name: "Diyetisyen",
    },
  };

  const related = getPostsByCategory(post.category).filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="w-full bg-neutral-900 py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors w-fit"
          >
            <ArrowLeft size={16} />
            Tüm yazılar
          </Link>

          <span className="text-[10px] font-semibold text-green-400 uppercase tracking-widest">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-green-200/60 text-sm md:text-base leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-5 text-xs text-green-200/50 pt-2 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime} dakika okuma
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8 md:p-12 flex flex-col gap-5">
          {post.content.map((section, index) => renderSection(section, index))}
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-5">
              Benzer Yazılar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-1.5">
                    <span className="text-[10px] font-semibold text-green-600 uppercase tracking-widest">
                      {rel.category}
                    </span>
                    <p className="text-sm font-semibold text-neutral-800 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                      {rel.title}
                    </p>
                    <span className="text-xs text-neutral-400 flex items-center gap-1 mt-1">
                      <Clock size={11} />
                      {rel.readTime} dk
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-green-600 transition-colors"
          >
            <ArrowLeft size={15} />
            Blog&apos;a dön
          </Link>
        </div>
      </section>
    </main>
  );
}