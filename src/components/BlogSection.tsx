"use client";

import Image from "next/image";

export default function BlogSection() {
  const posts = [
    {
      date: "June 23, 2025",
      title: "The Art of Specificity",
      inner: (
        <div className="absolute inset-0">
          <Image
            src="/images/TheArtOfSpecificity.png"
            alt="The Art of Specificity"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      date: "MARCH 28, 2024",
      title: "Finding Inspiration in Nature",
      inner: (
        <div className="absolute inset-0">
          <Image
            src="/images/TheArtOfSpecificity.png"
            alt="The Art of Specificity"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      date: "FEBRUARY 12, 2024",
      title: "Reflections on Slow Living",
      inner: (
        <div className="absolute inset-0">
          <Image
            src="/images/TheArtOfSpecificity.png"
            alt="The Art of Specificity"
            fill
            className="object-cover"
          />
        </div>
      ),
    },
    {
      date: "DECEMBER 3, 2023",
      title: "Typography as Voice",
      inner: (
        <div className="absolute inset-0">
          <Image
            src="/images/TheArtOfSpecificity.png"
            alt="The Art of Specificity"
            fill
            className="object-cover"
          />
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
                className={`aspect-[4/3] rounded-sm overflow-hidden mb-6 relative`}
              >
                {post.inner}
              </div>

              <div>
                <p className="text-sm text-stone-500 mb-2 tracking-wider">{post.date}</p>
                <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
