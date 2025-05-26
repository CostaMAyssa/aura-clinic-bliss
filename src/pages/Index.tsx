
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SystemDemo from "@/components/SystemDemo";
import FeaturesSection from "@/components/FeaturesSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-jakarta">
      <HeroSection />
      <BenefitsSection />
      <SystemDemo />
      <FeaturesSection />
      <WhatsAppSection />
      <ComparisonSection />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
