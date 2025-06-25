import { getAllPostsMeta } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogSection() {
  const posts = await getAllPostsMeta();

  return (
    <section id="blog" className="py-20 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-stone-700 mb-16 text-center">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
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
                  <p className="text-sm text-stone-500 mb-2 tracking-wider">
                    {post.date}
                  </p>
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