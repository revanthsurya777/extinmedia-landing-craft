
import { Search, Target, Facebook, Globe, PenTool, MapPin, TrendingUp, Image, Megaphone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesMinimal = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Dominate Google rankings with data-driven SEO strategies that deliver measurable results.",
      color: "text-emerald-600"
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Maximize ROI with expertly managed PPC campaigns that convert visitors into customers.",
      color: "text-red-600"
    },
    {
      icon: Facebook,
      title: "Social Media",
      description: "Build brand awareness and drive engagement across all major social platforms.",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Create stunning, conversion-optimized websites that represent your brand perfectly.",
      color: "text-purple-600"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Craft compelling content that ranks on Google and resonates with your audience.",
      color: "text-orange-600"
    },
    {
      icon: Megaphone,
      title: "Branding",
      description: "Build memorable brand identities that stand out in competitive markets.",
      color: "text-pink-600"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Comprehensive digital marketing solutions designed to scale your business and drive measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Get Free Digital Marketing Audit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesMinimal;
