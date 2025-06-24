"use client";

type Props = {
  scrollToSection: (id: string) => void;
};

export default function PortfolioNav({ scrollToSection }: Props) {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-(--background)">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Profile Circle */}
          <div className="w-12 h-12 rounded-full bg-stone-300 text-(--color-nav-text) flex items-center justify-center overflow-hidden">
            NT
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {["ABOUT", "BLOG", "RESUME", "CONTACT"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm tracking-wider text-(--color-nav-text) hover:text-stone-900 transition-colors duration-300 font-light"
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
