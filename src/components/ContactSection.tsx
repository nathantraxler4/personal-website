export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-stone-700 mb-12">Get In Touch</h2>
        
        <div className="space-y-8 text-lg leading-relaxed text-stone-600 font-light">
          <p className="max-w-2xl mx-auto">
            I&apos;m always interested in meaningful conversations about software engineering, AI,
            or the tech industry in general. Whether you have a project in mind or simply
            want to say hello, I&rsquo;d love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-sm text-stone-800 mb-3 tracking-wider font-medium">EMAIL</h3>
              <a 
                href="mailto:nathan.traxler@gmail.com" 
                className="text-xl text-stone-700 hover:text-stone-900 transition-colors"
              >
                nathan.traxler@gmail.com
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <h3 className="text-sm text-stone-800 mb-3 tracking-wider font-medium">LOCATION</h3>
              <p className="text-xl text-stone-700">
                San Francisco, California
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-stone-200">
            <p className="text-sm text-stone-500">
              Feel free to reach out via email for any inquiries or collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
