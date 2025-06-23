"use client";

import React from "react";

export default function BlogSection() {
  const posts = [
    {
      date: "MARCH 28, 2024",
      title: "Finding Inspiration in Nature",
      excerpt:
        "Sometimes the most profound design solutions come from the simplest observations. A walk through the forest reveals patterns, textures, and color harmonies that no design system could replicate.",
      bgClasses: "from-stone-300 to-stone-400",
      inner: (
        <div className="absolute inset-8 bg-stone-100/80 rounded-sm flex items-center justify-center">
          <div className="w-16 h-16 bg-stone-500 rounded-full relative">
            <div className="absolute inset-2 bg-stone-200 rounded-full"></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-stone-600"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-stone-600"></div>
          </div>
        </div>
      ),
    },
    {
      date: "FEBRUARY 12, 2024",
      title: "Reflections on Slow Living",
      excerpt:
        "In a world that celebrates speed and efficiency, there's something revolutionary about choosing to move slowly, to savor the process, and to find beauty in the moments between productivity.",
      bgClasses: "from-amber-200 to-amber-400",
      inner: (
        <div className="absolute inset-8 bg-amber-50/80 rounded-sm">
          <div className="absolute top-4 right-4 w-8 h-16 bg-amber-600 opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-16 h-8 bg-amber-700 opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-12 bg-amber-500"></div>
        </div>
      ),
    },
    {
      date: "JANUARY 15, 2024",
      title: "The Art of Minimalist Design",
      excerpt:
        "True minimalism isn't about removing everything – it's about knowing what to keep. Each element must earn its place, contributing to a greater sense of harmony and purpose.",
      bgClasses: "from-stone-200 to-stone-400",
      inner: (
        <div className="absolute inset-8 bg-stone-50/90 rounded-sm">
          <div className="absolute top-6 left-6 w-12 h-12 border-2 border-stone-400 rounded-full"></div>
          <div className="absolute bottom-6 right-6 w-8 h-8 bg-stone-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-stone-600 rotate-45"></div>
        </div>
      ),
    },
    {
      date: "DECEMBER 3, 2023",
      title: "Typography as Voice",
      excerpt:
        "Every typeface carries a personality, a mood, an unspoken conversation with the reader. Choosing the right typography is like selecting the perfect tone of voice for your message.",
      bgClasses: "from-stone-300 to-stone-500",
      inner: (
        <div className="absolute inset-8 bg-stone-100/85 rounded-sm flex items-center justify-center">
          <div className="relative">
            <div className="w-12 h-12 bg-stone-600 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-400 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-stone-500 rounded-full"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-stone-700 mb-16 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${post.bgClasses} rounded-sm overflow-hidden mb-6 relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-600/20 to-transparent" />
                {post.inner}
              </div>

              <div>
                <p className="text-sm text-stone-500 mb-2 tracking-wider">{post.date}</p>
                <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
