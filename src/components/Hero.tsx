
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-floating" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/3 rounded-full blur-2xl animate-morphing" />
        
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 bg-mesh opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* Premium Badge with Animation */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:scale-105 animate-shimmer ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Digital Marketing Agency • Hyderabad</span>
          </div>

          {/* Hero Headline with Staggered Animation */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight">
              <span className={`block text-gray-900 mb-4 text-reveal ${isLoaded ? 'in-view' : ''}`}>
                <span className="stagger-1">Marketing</span>
              </span>
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient text-reveal ${isLoaded ? 'in-view' : ''}`}>
                <span className="stagger-2">that Delivers</span>
              </span>
              <span className={`block text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold mt-6 text-reveal ${isLoaded ? 'in-view' : ''}`}>
                <span className="stagger-3">Results.</span>
              </span>
            </h1>
          </div>

          {/* Value Proposition with Slide Animation */}
          <div className={`space-y-6 max-w-4xl mx-auto ${isLoaded ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
              We help growth-driven brands in Hyderabad scale digitally through 
              <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"> data-driven SEO</span>, 
              <span className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"> performance marketing</span>, and 
              <span className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"> strategic branding</span>.
            </p>
          </div>

          {/* CTA Buttons with Hover Effects */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 ${isLoaded ? 'animate-fade-in-up stagger-5' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 animate-pulse-glow hover-lift"
              onClick={scrollToContact}
            >
              <span>Let's Scale Your Brand</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 hover-lift hover-glow"
              onClick={scrollToContact}
            >
              <Zap className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Free Strategy Call</span>
            </Button>
          </div>

          {/* Trust Indicators with Scale Animation */}
          <div className={`pt-20 space-y-8 ${isLoaded ? 'animate-fade-in-up stagger-6' : 'opacity-0'}`}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group hover-lift">
                <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center group hover-lift">
                <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-floating opacity-30" />
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-purple-500 rounded-full animate-floating opacity-20" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-pink-500 rounded-full animate-floating opacity-25" style={{animationDelay: '3s'}} />
    </section>
  );
};

export default Hero;
