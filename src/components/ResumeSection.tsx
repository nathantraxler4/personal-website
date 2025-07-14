"use client";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nathan_Traxler_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-6 bg-(--main-background)">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light text-stone-700 mb-8">Resume</h2>
        <p className="text-xl text-stone-600 mb-12 font-light leading-relaxed">
          Curious about my professional journey? I&apos;d love to share my experience
          and discuss how we might work together.
        </p>
        <button 
          onClick={handleDownloadResume}
          className="bg-stone-700 text-stone-100 px-12 py-4 text-sm tracking-wider hover:bg-stone-800 transition-colors duration-300 font-light"
        >
          VIEW RESUME
        </button>
      </div>
    </section>
  );
}
