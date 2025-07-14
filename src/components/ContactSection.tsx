export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-(--main-background)">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-stone-700 mb-12">Get In Touch</h2>
        
        <div className="space-y-4 text-lg text-stone-600">
          <div className="flex items-center justify-center">
            <span className="mr-2">📧</span>
            <a 
              href="mailto:nathan.traxler@gmail.com" 
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              nathan.traxler@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center">
            <span className="mr-2">📍</span>
            <span className="text-stone-700">San Francisco, California</span>
          </div>
          
          <div className="flex items-center justify-center">
            <span className="mr-2">📄</span>
            <a 
              href="/resume.pdf" 
              download="Nathan_Traxler_Resume.pdf"
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
