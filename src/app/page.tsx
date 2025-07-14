import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import PortfolioNav from '../components/PortfolioNav';

const Portfolio = () => {
  
  return (
    <div className="min-h-screen bg-(--color-header-footer) font-serif">
      <PortfolioNav />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;
