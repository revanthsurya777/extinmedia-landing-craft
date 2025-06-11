
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
  Users 
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      icon: Target,
      title: "Google Ads",
      description: "Maximize ROI with targeted Google advertising campaigns",
      gradient: "from-red-500/10 to-yellow-500/10",
      iconColor: "text-red-600"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost organic visibility and drive quality traffic",
      gradient: "from-green-500/10 to-emerald-500/10", 
      iconColor: "text-green-600"
    },
    {
      icon: Facebook,
      title: "Meta Ads (SMM)",
      description: "Engage audiences across Facebook and Instagram platforms",
      gradient: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Website Building",
      description: "Create stunning, conversion-optimized websites",
      gradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-600"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Craft compelling content that converts and engages",
      gradient: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-600"
    },
    {
      icon: MapPin,
      title: "GEO Services",
      description: "Dominate local search and geographic targeting",
      gradient: "from-teal-500/10 to-cyan-500/10",
      iconColor: "text-teal-600"
    },
    {
      icon: Zap,
      title: "AEO Services",
      description: "Optimize for answer engines and voice search",
      gradient: "from-yellow-500/10 to-orange-500/10",
      iconColor: "text-yellow-600"
    },
    {
      icon: Image,
      title: "AI-Generated Media",
      description: "Create stunning images and videos with AI technology",
      gradient: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600"
    },
    {
      icon: Megaphone,
      title: "Digital & Print Media",
      description: "Comprehensive media promotion across all channels",
      gradient: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with audiences through trusted influencers",
      gradient: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-600"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-secondary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-[#001F3F]/5 to-blue-500/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-[#001F3F]/5 rounded-full blur-2xl floating-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#001F3F]/10 border border-[#001F3F]/20 mb-6">
            <span className="text-sm font-semibold text-[#001F3F]">Complete Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="gradient-text">360° Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Comprehensive digital marketing solutions tailored to your business needs,
            designed to deliver exceptional results at every touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-[#001F3F]/30 transition-all duration-700 hover:shadow-2xl hover:shadow-[#001F3F]/10 hover:-translate-y-3 premium-shadow hover:premium-shadow-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="relative p-4 bg-gradient-to-br from-[#001F3F]/10 to-transparent rounded-2xl group-hover:bg-gradient-to-br group-hover:from-[#001F3F]/20 group-hover:to-transparent transition-all duration-500 group-hover:scale-110">
                    <Icon className={`h-10 w-10 ${service.iconColor} group-hover:text-[#001F3F] transition-all duration-500 group-hover:scale-110`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#001F3F] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
