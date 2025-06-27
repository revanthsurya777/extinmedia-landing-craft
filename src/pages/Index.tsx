import HeaderMinimal from "@/components/HeaderMinimal";
import Hero from "@/components/Hero";
import ServicesMinimal from "@/components/ServicesMinimal";
import AboutMinimal from "@/components/AboutMinimal";
import TestimonialsMinimal from "@/components/TestimonialsMinimal";
import TrustLogos from "@/components/TrustLogos";
import CTAMinimal from "@/components/CTAMinimal";
import FooterMinimal from "@/components/FooterMinimal";
import ScrollTriggerInit from "@/components/ScrollTriggerInit";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollTriggerInit />
      <HeaderMinimal />
      <Hero />
      <ServicesMinimal />
      <AboutMinimal />
      <TestimonialsMinimal />
      <TrustLogos />
      <CTAMinimal />
      <FooterMinimal />
    </div>
  );
};

export default Index;
