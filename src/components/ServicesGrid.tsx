
import { 
  Search, 
  Target, 
  Facebook, 
  Globe, 
  PenTool, 
  MapPin, 
  Zap, 
  Image, 
  Megaphone, 
  Users,
  TrendingUp,
  Award
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Services in Hyderabad",
      description: "Dominate Google rankings with our expert SEO strategies. Increase organic traffic and visibility for your Hyderabad business.",
      gradient: "from-green-500/10 to-emerald-500/10", 
      iconColor: "text-green-600",
      features: ["On-Page SEO", "Technical SEO", "Local SEO"]
    },
    {
      icon: Target,
      title: "Google Ads Management",
      description: "Maximize ROI with our certified Google Ads experts. Drive qualified leads and boost conversions with targeted PPC campaigns.",
      gradient: "from-red-500/10 to-yellow-500/10",
      iconColor: "text-red-600",
      features: ["Search Ads", "Display Ads", "Shopping Ads"]
    },
    {
      icon: Facebook,
      title: "Social Media Marketing",
      description: "Engage your Hyderabad audience across Facebook, Instagram, and LinkedIn. Build brand awareness and drive social commerce.",
      gradient: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600",
      features: ["Content Strategy", "Ad Campaigns", "Community Management"]
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Create stunning, mobile-responsive websites that convert visitors into customers. Professional web development for Hyderabad businesses.",
      gradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-600",
      features: ["Responsive Design", "E-commerce", "CMS Development"]
    },
    {
      icon: PenTool,
      title: "Content Marketing Company",
      description: "Craft compelling content that ranks on Google and engages your audience. Strategic content marketing for sustainable growth.",
      gradient: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-600",
      features: ["Blog Writing", "Video Content", "Infographics"]
    },
    {
      icon: MapPin,
      title: "Local SEO Hyderabad",
      description: "Dominate local search results and Google My Business. Help customers find your Hyderabad business with geo-targeted strategies.",
      gradient: "from-teal-500/10 to-cyan-500/10",
      iconColor: "text-teal-600",
      features: ["GMB Optimization", "Local Citations", "Review Management"]
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-driven marketing strategies that deliver measurable results. Advanced analytics and conversion optimization for maximum ROI.",
      gradient: "from-yellow-500/10 to-orange-500/10",
      iconColor: "text-yellow-600",
      features: ["Analytics Setup", "Conversion Tracking", "A/B Testing"]
    },
    {
      icon: Image,
      title: "AI-Generated Media",
      description: "Revolutionary AI-powered content creation. Generate stunning visuals, videos, and graphics that captivate your audience.",
      gradient: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600",
      features: ["AI Images", "Video Creation", "Graphic Design"]
    },
    {
      icon: Megaphone,
      title: "Branding Agency Hyderabad",
      description: "Build a memorable brand identity that stands out in the competitive Hyderabad market. Complete branding and design solutions.",
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
      features: ["Logo Design", "Brand Strategy", "Marketing Materials"]
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with Hyderabad's top influencers to amplify your brand reach. Authentic partnerships that drive engagement and sales.",
      gradient: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-600",
      features: ["Influencer Outreach", "Campaign Management", "Performance Tracking"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-secondary/8 via-background to-secondary/12 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-24 w-48 h-48 bg-gradient-to-br from-[#001F3F]/8 to-blue-500/8 rounded-full blur-3xl floating-animation premium-glow" />
        <div className="absolute bottom-32 left-24 w-40 h-40 bg-gradient-to-br from-blue-500/8 to-[#001F3F]/8 rounded-full blur-2xl floating-animation premium-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-[#001F3F]/8 rounded-full blur-xl floating-animation premium-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#001F3F]/10 border border-[#001F3F]/20 mb-8 premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105">
            <Award className="w-5 h-5 text-[#001F3F] mr-2" />
            <span className="text-sm font-bold text-[#001F3F]">Complete Digital Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            Our <span className="gradient-text premium-text-glow">360° Digital Marketing</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001F3F] mt-4 block">Services in Hyderabad</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Comprehensive digital marketing solutions from <span className="text-[#001F3F] font-bold">Hyderabad's top digital marketing company</span>. 
            From SEO services to PPC management, we deliver results that matter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            {["SEO Expert", "PPC Certified", "Meta Partner", "Google Certified"].map((badge, index) => (
              <span key={index} className="bg-gradient-to-r from-[#001F3F]/10 to-blue-500/10 px-4 py-2 rounded-full border border-[#001F3F]/20 text-[#001F3F]">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-background/90 backdrop-blur-md rounded-3xl border border-border/30 hover:border-[#001F3F]/40 transition-all duration-700 hover:shadow-2xl hover:shadow-[#001F3F]/15 hover:-translate-y-4 premium-shadow hover:premium-shadow-hover overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Premium Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col space-y-6 h-full">
                  <div className="relative p-5 bg-gradient-to-br from-[#001F3F]/10 to-transparent rounded-2xl group-hover:bg-gradient-to-br group-hover:from-[#001F3F]/20 group-hover:to-transparent transition-all duration-500 group-hover:scale-110 self-start">
                    <Icon className={`h-12 w-12 ${service.iconColor} group-hover:text-[#001F3F] transition-all duration-500 group-hover:scale-110`} />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-black text-foreground group-hover:text-[#001F3F] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 pt-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs text-[#001F3F] font-semibold">
                          <div className="w-1.5 h-1.5 bg-[#001F3F] rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
        
        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <p className="text-lg text-muted-foreground mb-6 font-semibold">
            Ready to grow your business with <span className="text-[#001F3F] font-bold">Hyderabad's best digital marketing experts</span>?
          </p>
          <button className="bg-gradient-to-r from-[#001F3F] to-[#003366] hover:from-[#002a5c] hover:to-[#004080] text-white px-8 py-4 rounded-2xl font-bold text-lg premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105">
            Get Free Digital Marketing Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
