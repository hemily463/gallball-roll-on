import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import ValueProposition from "@/components/ValueProposition";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <UseCases />
      <ValueProposition />
      <Pricing />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
