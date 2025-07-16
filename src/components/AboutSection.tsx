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
                I&apos;m a software engineer and machine learning enthusiast passionate about crafting thoughtful digital experiences and solving challenging problems with clarity and precision.
                I&apos;m currently a Technical Lead at Apple, building internal applications for Apple TV+.
              </p>
              <p>
                My decisions and interactions are deeply guided by some core values:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-stone-600 font-light ml-4">
                <li><strong>Authenticity:</strong> I believe authenticity is fundamental to the human experience. Authentic people navigate life with clarity, seek truth, and inspire comfort and trust.</li>
                <li><strong>Action:</strong> I firmly believe that growth and discovery only happen through action. Embracing new projects, experiences, and even moments of discomfort opens up limitless possibilities.</li>
                <li><strong>Giving Your Best:</strong> Inspired by the Japanese phrase &ldquo;頑張ってください&rdquo; (please do your best), I strive to give my utmost effort in every pursuit, reinforcing the empowering mindset of personal responsibility and control.</li>
                <li><strong>Doing What&apos;s Right:</strong> Navigating the complexities of life requires deliberate effort to seek ethical and responsible choices. I aim to make thoughtful decisions that contribute positively to the world around me.</li>
                <li><strong>Family and Friends:</strong> The challenges of life become meaningful and manageable through strong relationships. My family and friends are central to my happiness and motivation.</li>
              </ul>
              <p>
                When I&apos;m not coding, you might find me exploring cocktail recipes, attempting a new hobby (like knitting), enjoying thoughtful indie films, or diving into a good book.
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
