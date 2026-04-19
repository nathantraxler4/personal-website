"use client";
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-(--main-background)">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-light text-stone-700 mb-8">What I'm About</h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-600 font-light">
              <p>
                My decisions and interactions are deeply guided by some core values:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-stone-600 font-light ml-4">
                <li><strong>Authenticity:</strong> Authenticity is fundamental to the human experience. Authentic people navigate life with clarity, seek truth, and inspire comfort and trust.</li>
                <li><strong>Action:</strong> Growth and discovery only happen through action. Embracing new projects, experiences, and moments of discomfort opens up limitless possibilities.</li>
                <li><strong>Giving Your Best:</strong> Inspired by the Japanese phrase &ldquo;頑張ってください&rdquo; (please do your best), I strive to give my utmost effort in every pursuit, reinforcing the mindset of personal responsibility and control.</li>
                <li><strong>Doing What&apos;s Right:</strong> Navigating the complexities of life requires deliberate effort to seek effective and ethical choices. I aim to make thoughtful decisions that contribute positively to the world around me.</li>
                <li><strong>Humility:</strong> We are all fundamentally human, and no one is inherently above another. Approaching life with humility keeps me grounded, open to learning, and genuinely connected to the people around me.</li>
                <li><strong>Respect:</strong> Every person deserves to be treated with dignity. Regardless of differences, I strive to honor that in every interaction.</li>
                <li><strong>Family:</strong> The challenges of life become meaningful and manageable through strong relationships. Whether blood or chosen family, the people I love are central to my happiness and motivation.</li>
              </ul>
              <p>
                When I&apos;m not coding, you might find me crafting new cocktail recipes, exploring a new hobby (like roasting coffee), enjoying thoughtful films, or diving into a good book.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <Image 
                src="/images/Profile_Picture.jpg" 
                alt="Nathan Traxler - Profile Picture"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
