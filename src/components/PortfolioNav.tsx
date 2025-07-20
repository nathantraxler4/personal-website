"use client";

export default function PortfolioNav() {
  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-(--color-header-footer)">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Profile Circle */}
          <button
            onClick={() => scrollToSection('top')}
            className="w-12 h-12 rounded-full bg-stone-300 text-(--color-header-footer-text) flex items-center justify-center overflow-hidden cursor-pointer"
          >
            NT
          </button>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {["ABOUT", "BLOG", "CONTACT"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm tracking-wider text-(--color-header-footer-text) hover:text-stone-900 transition-colors duration-300 font-light"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
