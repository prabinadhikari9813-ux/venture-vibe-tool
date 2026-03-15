import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoutesSection from "@/components/RoutesSection";
import TipsSection from "@/components/TipsSection";
import CostSection from "@/components/CostSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <RoutesSection />
    <TipsSection />
    <CostSection />
    <Footer />
  </div>
);

export default Index;
