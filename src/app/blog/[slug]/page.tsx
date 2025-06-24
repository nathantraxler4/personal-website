"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

// Temporary in-memory posts data. In a real project, you might fetch this from a CMS or markdown files.
const posts: BlogPost[] = [
  {
    slug: "the-art-of-specificity",
    title: "The Art of Specificity",
    date: "June 23, 2025",
    image: "/images/TheArtOfSpecificity.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel pretium mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus euismod justo sit amet sem egestas, a euismod nisl posuere.",
  },
  {
    slug: "finding-inspiration-in-nature",
    title: "Finding Inspiration in Nature",
    date: "March 28, 2024",
    image: "/images/TheArtOfSpecificity.png",
    content:
      "Curabitur consequat, odio sit amet laoreet blandit, tortor urna vestibulum erat, nec vestibulum orci leo vitae arcu. In hac habitasse platea dictumst.",
  },
  {
    slug: "reflections-on-slow-living",
    title: "Reflections on Slow Living",
    date: "February 12, 2024",
    image: "/images/TheArtOfSpecificity.png",
    content:
      "Suspendisse potenti. Integer venenatis, ligula at placerat sollicitudin, justo lorem convallis mauris, vel placerat lacus velit vitae ligula.",
  },
  {
    slug: "typography-as-voice",
    title: "Typography as Voice",
    date: "December 3, 2023",
    image: "/images/TheArtOfSpecificity.png",
    content:
      "Donec condimentum metus vitae erat gravida, in eleifend purus pharetra. Pellentesque non magna lorem.",
  },
];

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/#blog" className="text-stone-500 hover:text-stone-700 text-sm mb-8 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-light mb-2">{post!.title}</h1>
        <p className="text-sm text-stone-500 mb-10 tracking-wider">{post!.date}</p>

        <div className="relative aspect-[4/3] w-full mb-10 rounded-sm overflow-hidden">
          <Image src={post!.image} alt={post!.title} fill className="object-cover" />
        </div>

        <div className="prose prose-stone max-w-none">
          <p>{post!.content}</p>
        </div>
      </div>
    </article>
  );
}
