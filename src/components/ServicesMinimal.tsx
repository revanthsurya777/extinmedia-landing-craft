
import { Search, Target, Facebook, Globe, PenTool, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const ServicesMinimal = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCards(prev => new Set(prev).add(index));
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-50px'
    });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.setAttribute('data-index', index.toString());
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate Google rankings with data-driven SEO strategies that deliver measurable results.",
      color: "text-emerald-600",
      gradient: "from-emerald-500/20 to-green-500/10"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Maximize ROI with expertly managed PPC campaigns that convert visitors into customers.",
      color: "text-red-600",
      gradient: "from-red-500/20 to-orange-500/10"
    },
    {
      icon: Facebook,
      title: "Social Media",
      description: "Build brand awareness and drive engagement across all major social platforms.",
      color: "text-blue-600",
      gradient: "from-blue-500/20 to-cyan-500/10"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Create stunning, conversion-optimized websites that represent your brand perfectly.",
      color: "text-purple-600",
      gradient: "from-purple-500/20 to-indigo-500/10"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Craft compelling content that ranks on Google and resonates with your audience.",
      color: "text-orange-600",
      gradient: "from-orange-500/20 to-yellow-500/10"
    },
    {
      icon: Megaphone,
      title: "Branding",
      description: "Build memorable brand identities that stand out in competitive markets.",
      color: "text-pink-600",
      gradient: "from-pink-500/20 to-rose-500/10"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-2xl animate-floating" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-orange-500/5 rounded-full blur-3xl animate-floating" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-500/8 to-teal-500/5 rounded-full blur-xl animate-floating" style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 scroll-trigger">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium scroll-trigger">
            Comprehensive digital marketing solutions designed to scale your business and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 animate-shimmer overflow-hidden
                  ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-3 animate-pulse-glow">
                    <Icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 animate-pulse-glow hover-lift scroll-trigger"
          >
            Get Free Digital Marketing Audit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesMinimal;
