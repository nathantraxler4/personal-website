"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-light text-stone-700 mb-8">Let&rsquo;s Connect</h2>
            <div className="space-y-6 text-lg leading-relaxed text-stone-600 font-light">
              <p>
                I&apos;m always interested in meaningful conversations about software engineering, clean code,
                or the tech industry in general. Whether you have a project in mind or simply
                want to say hello, I&rsquo;d love to hear from you.
              </p>
              <div className="space-y-3">
                <p>
                  <span className="text-stone-800">Email:</span>{' '}
                  <a href="mailto:hello@nathantraxler.com" className="hover:text-stone-800 transition-colors">
                    hello@nathantraxler.com
                  </a>
                </p>
                <p>
                  <span className="text-stone-800">Based in:</span> San&nbsp;Francisco, California
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
                rows={5}
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
  );
}
