"use client";


export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light text-stone-700 mb-8">About</h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-600 font-light">
              <p>
                I believe in the power of intentional design and authentic storytelling.
                My work explores the intersection of visual communication and human connection,
                always with an eye for the subtle details that make experiences memorable.
              </p>
              <p>
                When I&apos;m not designing, you&apos;ll find me wandering through Portland&apos;s coffee shops
                with a sketchbook, hunting for vintage records, or getting lost in the pages of
                a well-worn novel. I&apos;m drawn to the quiet moments that reveal deeper truths.
              </p>
              <p>
                My approach is rooted in mindfulness and curiosity - whether I&apos;m crafting a brand
                identity or writing about the beauty found in everyday moments.
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
