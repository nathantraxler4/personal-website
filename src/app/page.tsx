
'use client'

import { useEffect, useState } from 'react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-(--background) text-stone-800 font-serif">
      {/* Navigation */}
      <nav className={'fixed top-0 w-full z-50 transition-all duration-500 bg-(--color-bg-header)'}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Profile Circle */}
            <div className="w-12 h-12 rounded-full bg-stone-300 flex items-center justify-center overflow-hidden">
              NT
            </div>
            
            {/* Navigation Links */}
            <div className="flex space-x-8">
              {['ABOUT', 'BLOG', 'RESUME', 'CONTACT'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm tracking-wider text-stone-600 hover:text-stone-900 transition-colors duration-300 font-light"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light text-stone-700 mb-8 leading-tight">
            Hi, I'm Sarah.
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            I'm a designer and writer based in Portland.
            <br />
            I create thoughtful experiences through
            <br />
            design and storytelling.
          </p>
        </div>
      </section>

      {/* About Section */}
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
                  When I'm not designing, you'll find me wandering through Portland's coffee shops 
                  with a sketchbook, hunting for vintage records, or getting lost in the pages of 
                  a well-worn novel. I'm drawn to the quiet moments that reveal deeper truths.
                </p>
                <p>
                  My approach is rooted in mindfulness and curiosity – whether I'm crafting a brand 
                  identity or writing about the beauty found in everyday moments.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-300 to-stone-500 rounded-sm overflow-hidden">
                <div className="absolute inset-4 bg-stone-200 rounded-sm">
                  <div className="absolute top-8 left-8 w-16 h-20 bg-stone-600 rounded-t-full"></div>
                  <div className="absolute bottom-16 right-12 w-12 h-12 bg-stone-400 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-stone-500 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-stone-700 mb-16 text-center">Blog</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Blog Post 1 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-300 to-stone-400 rounded-sm overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-600/20 to-transparent"></div>
                <div className="absolute inset-8 bg-stone-100/80 rounded-sm flex items-center justify-center">
                  <div className="w-16 h-16 bg-stone-500 rounded-full relative">
                    <div className="absolute inset-2 bg-stone-200 rounded-full"></div>
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-stone-600"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-stone-600"></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2 tracking-wider">MARCH 28, 2024</p>
                <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                  Finding Inspiration in Nature
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Sometimes the most profound design solutions come from the simplest observations. 
                  A walk through the forest reveals patterns, textures, and color harmonies that 
                  no design system could replicate.
                </p>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 to-amber-400 rounded-sm overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
                <div className="absolute inset-8 bg-amber-50/80 rounded-sm">
                  <div className="absolute top-4 right-4 w-8 h-16 bg-amber-600 opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-8 bg-amber-700 opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-12 bg-amber-500"></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2 tracking-wider">FEBRUARY 12, 2024</p>
                <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                  Reflections on Slow Living
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  In a world that celebrates speed and efficiency, there's something revolutionary 
                  about choosing to move slowly, to savor the process, and to find beauty in the 
                  moments between productivity.
                </p>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-400 rounded-sm overflow-hidden mb-6 relative">
                <div className="absolute inset-8 bg-stone-50/90 rounded-sm">
                  <div className="absolute top-6 left-6 w-12 h-12 border-2 border-stone-400 rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-stone-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-stone-600 rotate-45"></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2 tracking-wider">JANUARY 15, 2024</p>
                <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                  The Art of Minimalist Design
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  True minimalism isn't about removing everything – it's about knowing what to keep. 
                  Each element must earn its place, contributing to a greater sense of harmony and purpose.
                </p>
              </div>
            </article>

            {/* Blog Post 4 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-stone-300 to-stone-500 rounded-sm overflow-hidden mb-6 relative">
                <div className="absolute inset-8 bg-stone-100/85 rounded-sm flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-stone-600 rounded-full"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-400 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-stone-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-stone-500 mb-2 tracking-wider">DECEMBER 3, 2023</p>
                <h3 className="text-2xl font-light text-stone-700 mb-4 group-hover:text-stone-900 transition-colors">
                  Typography as Voice
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Every typeface carries a personality, a mood, an unspoken conversation with the reader. 
                  Choosing the right typography is like selecting the perfect tone of voice for your message.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-stone-700 mb-8">Resume</h2>
          <p className="text-xl text-stone-600 mb-12 font-light leading-relaxed">
            Curious about my professional journey? I'd love to share my experience 
            and discuss how we might work together.
          </p>
          <button className="bg-stone-700 text-stone-100 px-12 py-4 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300 font-light">
            VIEW RESUME
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light text-stone-700 mb-8">Let's Connect</h2>
              <div className="space-y-6 text-lg leading-relaxed text-stone-600 font-light">
                <p>
                  I'm always interested in meaningful conversations about design, writing, 
                  or just life in general. Whether you have a project in mind or simply 
                  want to say hello, I'd love to hear from you.
                </p>
                <div className="space-y-3">
                  <p>
                    <span className="text-stone-800">Email:</span>{' '}
                    <a href="mailto:hello@sarah.com" className="hover:text-stone-800 transition-colors">
                      hello@sarah.com
                    </a>
                  </p>
                  <p>
                    <span className="text-stone-800">Based in:</span> Portland, Oregon
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-stone-700 mb-2 tracking-wider">NAME</label>
                <input 
                  type="text" 
                  className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-700 focus:border-stone-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-2 tracking-wider">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-700 focus:border-stone-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-2 tracking-wider">MESSAGE</label>
                <textarea 
                  rows="5"
                  className="w-full border-b border-stone-300 bg-transparent py-3 text-stone-700 focus:border-stone-600 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button className="bg-stone-700 text-stone-100 px-8 py-3 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300 font-light">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm font-light">
              © 2024 Sarah. Made with intention and care.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-stone-500 hover:text-stone-700 text-sm tracking-wider transition-colors">
                INSTAGRAM
              </a>
              <a href="#" className="text-stone-500 hover:text-stone-700 text-sm tracking-wider transition-colors">
                LINKEDIN
              </a>
              <a href="#" className="text-stone-500 hover:text-stone-700 text-sm tracking-wider transition-colors">
                TWITTER
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <NavHeader />
//       {/* Main content stretches to fill remaining vertical space */}
//       <main className="flex-1">
//         {/* TODO: Add page content here */}
//       </main>
//     </div>
//   );
// }
