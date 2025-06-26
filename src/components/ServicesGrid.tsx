
import { Search, Target, Facebook, Globe, PenTool, MapPin, Zap, Image, Megaphone, Users, TrendingUp, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const ServicesGrid = () => {
  const [successfulCampaigns, setSuccessfulCampaigns] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const targetCampaigns = 500;
  const targetSatisfaction = 98;
  const targetYears = 10;

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const frameRate = 60;
          const totalFrames = Math.round(duration / (1000 / frameRate));
          let currentFrame = 0;
          const timer = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setSuccessfulCampaigns(Math.floor(targetCampaigns * easeOutQuart));
            setClientSatisfaction(Math.floor(targetSatisfaction * easeOutQuart));
            setYearsExperience(Math.floor(targetYears * easeOutQuart));
            if (currentFrame >= totalFrames) {
              setSuccessfulCampaigns(targetCampaigns);
              setClientSatisfaction(targetSatisfaction);
              setYearsExperience(targetYears);
              clearInterval(timer);
            }
          }, 1000 / frameRate);
        }
      });
    }, {
      threshold: 0.1
    });

    // Card animation observer
    const cardObserver = new IntersectionObserver(entries => {
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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.setAttribute('data-index', index.toString());
        cardObserver.observe(card);
      }
    });

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, [hasAnimated, targetCampaigns, targetSatisfaction, targetYears]);

  const services = [{
    icon: Search,
    title: "SEO Services in Hyderabad",
    description: "Dominate Google rankings with our expert SEO strategies. Increase organic traffic and visibility for your Hyderabad business.",
    gradient: "from-emerald-500/15 to-green-500/10",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-500/20",
    hoverColor: "group-hover:text-emerald-700",
    features: ["On-Page SEO", "Technical SEO", "Local SEO"]
  }, {
    icon: Target,
    title: "Google Ads Management",
    description: "Maximize ROI with our certified Google Ads experts. Drive qualified leads and boost conversions with targeted PPC campaigns.",
    gradient: "from-red-500/15 to-orange-500/10",
    iconColor: "text-red-600",
    borderColor: "border-red-500/20",
    hoverColor: "group-hover:text-red-700",
    features: ["Search Ads", "Display Ads", "Shopping Ads"]
  }, {
    icon: Facebook,
    title: "Social Media Marketing",
    description: "Engage your Hyderabad audience across Facebook, Instagram, and LinkedIn. Build brand awareness and drive social commerce.",
    gradient: "from-blue-500/15 to-indigo-500/10",
    iconColor: "text-blue-600",
    borderColor: "border-blue-500/20",
    hoverColor: "group-hover:text-blue-700",
    features: ["Content Strategy", "Ad Campaigns", "Community Management"]
  }, {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, mobile-responsive websites that convert visitors into customers. Professional web development for Hyderabad businesses.",
    gradient: "from-purple-500/15 to-violet-500/10",
    iconColor: "text-purple-600",
    borderColor: "border-purple-500/20",
    hoverColor: "group-hover:text-purple-700",
    features: ["Responsive Design", "E-commerce", "CMS Development"]
  }, {
    icon: PenTool,
    title: "Content Marketing Company",
    description: "Craft compelling content that ranks on Google and engages your audience. Strategic content marketing for sustainable growth.",
    gradient: "from-orange-500/15 to-amber-500/10",
    iconColor: "text-orange-600",
    borderColor: "border-orange-500/20",
    hoverColor: "group-hover:text-orange-700",
    features: ["Blog Writing", "Video Content", "Infographics"]
  }, {
    icon: MapPin,
    title: "Local SEO Hyderabad",
    description: "Dominate local search results and Google My Business. Help customers find your Hyderabad business with geo-targeted strategies.",
    gradient: "from-teal-500/15 to-cyan-500/10",
    iconColor: "text-teal-600",
    borderColor: "border-teal-500/20",
    hoverColor: "group-hover:text-teal-700",
    features: ["GMB Optimization", "Local Citations", "Review Management"]
  }, {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven marketing strategies that deliver measurable results. Advanced analytics and conversion optimization for maximum ROI.",
    gradient: "from-yellow-500/15 to-orange-500/10",
    iconColor: "text-yellow-600",
    borderColor: "border-yellow-500/20",
    hoverColor: "group-hover:text-yellow-700",
    features: ["Analytics Setup", "Conversion Tracking", "A/B Testing"]
  }, {
    icon: Image,
    title: "AI-Generated Media",
    description: "Revolutionary AI-powered content creation. Generate stunning visuals, videos, and graphics that captivate your audience.",
    gradient: "from-pink-500/15 to-rose-500/10",
    iconColor: "text-pink-600",
    borderColor: "border-pink-500/20",
    hoverColor: "group-hover:text-pink-700",
    features: ["AI Images", "Video Creation", "Graphic Design"]
  }, {
    icon: Megaphone,
    title: "Branding Agency Hyderabad",
    description: "Build a memorable brand identity that stands out in the competitive Hyderabad market. Complete branding and design solutions.",
    gradient: "from-indigo-500/15 to-blue-500/10",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-500/20",
    hoverColor: "group-hover:text-indigo-700",
    features: ["Logo Design", "Brand Strategy", "Marketing Materials"]
  }, {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connect with Hyderabad's top influencers to amplify your brand reach. Authentic partnerships that drive engagement and sales.",
    gradient: "from-violet-500/15 to-purple-500/10",
    iconColor: "text-violet-600",
    borderColor: "border-violet-500/20",
    hoverColor: "group-hover:text-violet-700",
    features: ["Influencer Outreach", "Campaign Management", "Performance Tracking"]
  }];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Fallback to open form if contact section doesn't exist
      window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank');
    }
  };

  return <section id="services" className="py-32 bg-gradient-to-br from-secondary/8 via-background to-secondary/12 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/8 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-32 left-24 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/8 rounded-full blur-2xl floating-animation" style={{
        animationDelay: '3s'
      }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-emerald-500/8 to-teal-500/8 rounded-full blur-xl floating-animation" style={{
        animationDelay: '1.5s'
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-8 premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105">
            <Award className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-sm font-bold text-purple-700">Complete Digital Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            Our <span className="text-purple-700 font-black">360° Digital Marketing</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 block">Services in Hyderabad</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Comprehensive digital marketing solutions from <span className="text-purple-700 font-bold">Hyderabad's top digital marketing company</span>. 
            From SEO services to PPC management, we deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          const isVisible = visibleCards.has(index);
          return <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`group relative p-8 bg-background/90 backdrop-blur-md rounded-3xl border ${service.borderColor} hover:border-opacity-60 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/15 hover:-translate-y-4 premium-shadow hover:premium-shadow-hover overflow-hidden
                ${isVisible ? 'mobile-pop mobile-enhance' : 'opacity-0 translate-y-8'}
                md:opacity-100 md:translate-y-0 md:mobile-pop-0`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:opacity-20 mobile-vibrant`} />
                
                {/* Premium Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col space-y-6 h-full items-center text-center">
                  <div className={`relative p-5 bg-gradient-to-br ${service.gradient} rounded-2xl group-hover:scale-110 transition-all duration-500`}>
                    <Icon className={`h-12 w-12 ${service.iconColor} ${service.hoverColor} transition-all duration-500 group-hover:scale-110`} />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className={`text-xl font-black text-foreground ${service.hoverColor} transition-colors duration-300 leading-tight`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 pt-2">
                      {service.features.map((feature, featureIndex) => <div key={featureIndex} className={`flex items-center justify-center text-xs ${service.iconColor} font-semibold`}>
                          <div className={`w-1.5 h-1.5 ${service.iconColor.replace('text-', 'bg-')} rounded-full mr-2`} />
                          {feature}
                        </div>)}
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>;
        })}
        </div>
        
        {/* Enhanced Trust Indicators with Animated Statistics */}
        <div className="pt-20 space-y-12" ref={statsRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {successfulCampaigns.toLocaleString()}+
              </div>
              <div className="text-lg text-foreground font-semibold">Successful Campaigns</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-pink-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {clientSatisfaction}%
              </div>
              <div className="text-lg text-foreground font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {yearsExperience}+
              </div>
              <div className="text-lg text-foreground font-semibold">Years Experience</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            <p className="text-lg text-foreground font-bold">
              Trusted by <span className="text-purple-700 font-black">500+</span> businesses across Hyderabad
            </p>
            <Users className="w-6 h-6 text-cyan-600" />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <p className="text-lg text-foreground mb-8 font-semibold">
            Ready to grow your business with <span className="text-purple-700 font-bold">Hyderabad's best digital marketing experts</span>?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={scrollToContact} className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105 mobile-enhance">
              Get Free Digital Marketing Audit
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesGrid;
