

import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import PortfolioNav from '../components/PortfolioNav';
import ResumeSection from '../components/ResumeSection';

const Portfolio = () => {
  
  return (
    <div className="min-h-screen bg-(--color-header-footer) font-serif">
      <PortfolioNav />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
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
