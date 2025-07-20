"use client";

export default function FooterSection() {
  return (
    <footer className="bg-(--color-header-footer) py-12 px-6 border-t border-stone-200" id="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-(--color-header-footer-text) text-sm font-light">
            © 2025 Nathan&nbsp;Traxler. Crafted with care in San&nbsp;Francisco.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/nathantraxler4" target="_blank" rel="noopener noreferrer" className="text-(--color-header-footer-text) hover:text-stone-700 text-sm tracking-wider transition-colors">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/nathan-traxler-63569114a" target="_blank" rel="noopener noreferrer" className="text-(--color-header-footer-text) hover:text-stone-700 text-sm tracking-wider transition-colors">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
