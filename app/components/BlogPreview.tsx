import { blogPosts } from "@/lib/data/blog-posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="w-full bg-neutral-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Başlık */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">
              Blog
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-900 leading-snug">
              Son Yazılar
            </h2>
            <p className="mt-2 text-sm text-neutral-500 max-w-sm">
              Beslenme ve sağlık hakkında uzman içerikleri keşfedin.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors shrink-0"
          >
            Tüm yazılar
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2.5 p-5 flex-1">
                <span className="text-[10px] font-semibold text-green-600 uppercase tracking-widest">
                  {post.category}
                </span>
                <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-neutral-400 pt-3 border-t border-neutral-100 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime} dk
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}