import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[var(--color-bg-header)] py-6 sticky top-0 z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-avatar-bg)] flex items-center justify-center overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-[var(--color-text)] opacity-20"></div>
        </div>
        <nav>
          <ul className="flex space-x-8">
            {['ABOUT', 'BLOG', 'RESUME', 'CONTACT'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium tracking-wider uppercase hover:opacity-70 transition-opacity"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6 md:mb-8 animate-fade-in">
          Hi, I&apos;m Sarah.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-700">
          I&apos;m a designer and writer based in Portland. I create thoughtful experiences through design and storytelling.
        </p>
      </div>
    </section>
  );
};

const BlogPostCard = ({ date, title, imageUrl }: { date: string; title: string; imageUrl: string }) => {
  return (
    <article className="group">
      <div className="relative h-64 md:h-80 lg:h-96 mb-5 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>
      <p className="text-sm text-gray-600 mb-2 font-light tracking-wide">{date}</p>
      <h3 className="text-2xl font-normal hover:opacity-80 transition-opacity">
        <a href="#" className="block">{title}</a>
      </h3>
    </article>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Inspiration in Nature",
      date: "MARCH 28, 2024",
      imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Reflections on Slow Living",
      date: "FEBRUARY 12, 2024",
      imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-normal mb-16 text-center">
          Latest from the Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogPostCard 
                title={post.title}
                date={post.date}
                imageUrl={post.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <BlogSection />
      </main>
      <footer className="bg-[var(--color-bg-header)] py-8 mt-20">
        <div className="container text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Sarah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
