
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-gray-700">Digital Marketing Agency • Hyderabad</span>
          </div>

          {/* Hero Headline - Minimalist & Bold */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight">
              <span className="block text-gray-900 mb-4">Marketing</span>
              <span className="block text-blue-600">that Delivers</span>
              <span className="block text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold mt-6">Results.</span>
            </h1>
          </div>

          {/* Clean Value Proposition */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              We help growth-driven brands in Hyderabad scale digitally through 
              <span className="text-blue-600 font-semibold"> data-driven SEO</span>, 
              <span className="text-purple-600 font-semibold"> performance marketing</span>, and 
              <span className="text-emerald-600 font-semibold"> strategic branding</span>.
            </p>
          </div>

          {/* Minimal CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={scrollToContact}
            >
              <span>Let's Scale Your Brand</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              onClick={scrollToContact}
            >
              <Zap className="mr-3 h-5 w-5" />
              <span>Free Strategy Call</span>
            </Button>
          </div>

          {/* Clean Trust Indicators */}
          <div className="pt-20 space-y-8">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
