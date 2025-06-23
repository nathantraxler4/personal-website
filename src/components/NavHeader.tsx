
export default function NavHeader() {
  return (
    <header className="flex items-center justify-around bg-(--color-bg-header)">
      <div className="flex-2 text-4xl font-bold px-8 py-4 text-(--text)">
        Nathan Traxler
      </div>
      <nav className="flex-1 flex justify-around">
        <a href="/blog" className="text-xl font-medium hover:opacity-70 text-(--text)">
          Blog
        </a>
        <a href="/resume" className="text-xl font-medium hover:opacity-70 text-(--text)">
          Resume
        </a>
        <a href="/contact" className="text-xl font-medium hover:opacity-70 text-(--text)">
          Contact
        </a>
      </nav>
    </header>
  );
}
