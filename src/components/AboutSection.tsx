"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-(--main-background)">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light text-stone-700 mb-8">About</h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-600 font-light">
              <p>
                I believe in the power of Artificial Intelligence empowering humans to create.
                I strive to build impactful software that makes a difference in the world, focusing on
                craftsmanship, specificity, and user delight.
              </p>
              <p>
                When I&apos;m not working, you&apos;ll find me exploring a new San Francisco
                coffee shop, walking through a park with my girlfriend and our dog, or tinkering 
                with side projects that explore the boundaries of AI and modern web development.
              </p>
              <p>
                My approach is rooted in collaboration and curiosity — whether I&apos;m scaling a microservice
                or mentoring new engineers eager to learn.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-stone-300 to-stone-500 rounded-sm overflow-hidden">
              <div className="absolute inset-4 bg-stone-200 rounded-sm">
                <div className="absolute top-8 left-8 w-16 h-20 bg-stone-600 rounded-t-full" />
                <div className="absolute bottom-16 right-12 w-12 h-12 bg-stone-400 rounded-full opacity-60" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-stone-500 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
