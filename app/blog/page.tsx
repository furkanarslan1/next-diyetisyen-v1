"use client";

import { blogPosts } from "@/lib/data/blog-posts";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ALL = "Tümü";

export default function BlogPage() {
  const categories = [ALL, ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Başlık */}
      <section className="w-full bg-neutral-900 py-20 px-6 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">
          Blog
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Beslenme &{" "}
          <span className="bg-linear-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
            Sağlık Rehberi
          </span>
        </h1>
        <p className="mt-4 text-green-200/60 max-w-xl mx-auto text-sm md:text-base">
          Uzman diyetisyen gözüyle beslenme, sağlık ve yaşam tüyoları.
        </p>
      </section>

      {/* Kategori Filtresi */}
      <section className="max-w-5xl mx-auto px-6 pt-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                active === cat
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white border-neutral-200 text-neutral-500 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Yazılar */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <p className="text-center text-neutral-400 py-16">Bu kategoride henüz yazı yok.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Görsel alanı */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* İçerik */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <span className="text-[10px] font-semibold text-green-600 uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h2 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-400 mt-auto pt-3 border-t border-neutral-100">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime} dk
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}