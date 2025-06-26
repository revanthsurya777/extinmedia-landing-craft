
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import KeyMetrics from "@/components/KeyMetrics";
import TrustBar from "@/components/TrustBar";
import TrustLogos from "@/components/TrustLogos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustLogos />
      <ServicesGrid />
      <Testimonials />
      <KeyMetrics />
      <TrustBar />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
