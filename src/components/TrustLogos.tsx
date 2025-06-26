
import { useEffect, useState, useRef } from "react";

const TrustLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const logos = [
    {
      name: "Meta Business",
      src: "/lovable-uploads/4672727e-d843-42cf-8946-8319f2d7fa18.png",
      alt: "Meta Business Logo"
    },
    {
      name: "HubSpot",
      src: "/lovable-uploads/f9ba8d44-fa86-4c04-9f4d-180443327f61.png",
      alt: "HubSpot Logo"
    },
    {
      name: "Shopify",
      src: "/lovable-uploads/6ade7132-29a3-4d79-ba4c-9e9c75496273.png",
      alt: "Shopify Logo"
    },
    {
      name: "WordPress",
      src: "/lovable-uploads/d1f1e9b3-81d7-4b60-ada0-92f99bab2db7.png",
      alt: "WordPress Logo"
    },
    {
      name: "Salesforce",
      src: "/lovable-uploads/46d1067a-315e-4a2e-8a3e-fd7297e927f3.png",
      alt: "Salesforce Logo"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-secondary/5 via-background to-secondary/8 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/8 to-purple-500/6 rounded-full blur-2xl floating-animation" />
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-gradient-to-br from-pink-500/8 to-orange-500/6 rounded-full blur-xl floating-animation" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trusted <span className="text-purple-700 font-black">Industry Leaders</span>
          </h2>
          <p className={`text-lg md:text-xl text-foreground max-w-3xl mx-auto font-medium leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We are certified partners with the world's leading digital marketing platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-gray-200/30 hover:border-purple-500/30 transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 premium-shadow hover:premium-shadow-hover ${
                isVisible ? 'mobile-pop opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${index * 0.1 + 0.3}s`,
                transitionDelay: `${index * 0.1 + 0.3}s`
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo Container */}
              <div className="relative z-10 w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Additional Trust Statement */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-base text-foreground font-semibold">
            Certified experts in the latest digital marketing technologies and platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
