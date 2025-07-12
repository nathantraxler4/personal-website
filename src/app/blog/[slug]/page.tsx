import { getPost } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

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

        <div className="font-serif max-w-none space-y-6" dangerouslySetInnerHTML={{ __html: post!.html }} />
      </div>
    </article>
  );
}
