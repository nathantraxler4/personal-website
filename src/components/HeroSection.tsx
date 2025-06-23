"use client";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-light text-stone-700 mb-8 leading-tight">
          Hi, I&apos;m Nathan Traxler.
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
          I&apos;m a software engineer based in San Francisco.
          <br />
          I build scalable web applications
          <br />
          that deliver exceptional user experiences.
        </p>
      </div>
    </section>
  );
}
