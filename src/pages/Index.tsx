import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoutesSection from "@/components/RoutesSection";
import TipsSection from "@/components/TipsSection";
import CostSection from "@/components/CostSection";
import NepalTrekSection from "@/components/NepalTrekSection";
import MapSection from "@/components/MapSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <RoutesSection />
    <TipsSection />
    <CostSection />
    <NepalTrekSection />
    <MapSection />
    <BudgetCalculator />
    <Footer />
  </div>
);

export default Index;
