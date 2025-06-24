"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      slug: "the-art-of-specificity",
      date: "June 23, 2025",
      title: "The Art of Specificity",
      image: "/images/TheArtOfSpecificity.png",
    },
    {
      slug: "finding-inspiration-in-nature",
      date: "March 28, 2024",
      title: "Finding Inspiration in Nature",
      image: "/images/TheArtOfSpecificity.png",
    },
    {
      slug: "reflections-on-slow-living",
      date: "February 12, 2024",
      title: "Reflections on Slow Living",
      image: "/images/TheArtOfSpecificity.png",
    },
    {
      slug: "typography-as-voice",
      date: "December 3, 2023",
      title: "Typography as Voice",
      image: "/images/TheArtOfSpecificity.png",
    },
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-stone-700 mb-16 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <article>
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm text-stone-500 mb-2 tracking-wider">{post.date}</p>
                  <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
