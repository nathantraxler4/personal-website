import AboutSection from '../components/AboutSection';
// import BlogSection from '../components/BlogSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import PortfolioNav from '../components/PortfolioNav';

const Portfolio = () => {

  return (
    <div className="min-h-screen bg-(--main-background) font-serif">
      {/* <PortfolioNav /> */}
      <HeroSection />
      <AboutSection />
      {/* <BlogSection /> */}
      <FooterSection />
    </div>
  );
};

export default Portfolio;
