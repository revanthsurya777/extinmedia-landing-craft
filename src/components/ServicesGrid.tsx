
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
      description: "Maximize ROI with targeted Google advertising campaigns"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost organic visibility and drive quality traffic"
    },
    {
      icon: Facebook,
      title: "Meta Ads (SMM)",
      description: "Engage audiences across Facebook and Instagram platforms"
    },
    {
      icon: Globe,
      title: "Website Building",
      description: "Create stunning, conversion-optimized websites"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Craft compelling content that converts and engages"
    },
    {
      icon: MapPin,
      title: "GEO Services",
      description: "Dominate local search and geographic targeting"
    },
    {
      icon: Zap,
      title: "AEO Services",
      description: "Optimize for answer engines and voice search"
    },
    {
      icon: Image,
      title: "AI-Generated Media",
      description: "Create stunning images and videos with AI technology"
    },
    {
      icon: Megaphone,
      title: "Digital & Print Media",
      description: "Comprehensive media promotion across all channels"
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with audiences through trusted influencers"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-[#001F3F]">360° Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-background rounded-xl border border-border hover:border-[#001F3F] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-[#001F3F]/10 rounded-lg group-hover:bg-[#001F3F] transition-all duration-300 relative overflow-hidden">
                    <Icon className="h-8 w-8 text-[#001F3F] group-hover:text-white transition-all duration-300 animate-pulse group-hover:animate-bounce" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
