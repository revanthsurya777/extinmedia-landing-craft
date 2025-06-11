
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "TechnoVision Solutions, Gachibowli",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Extin Media transformed our digital presence completely. Our lead generation increased by 300% in just 3 months! Best digital marketing agency in Hyderabad."
    },
    {
      name: "Priya Reddy",
      company: "Fashion Hub, Banjara Hills",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The AI-generated content and SEO optimization helped us rank #1 for our target keywords. Incredible results from Hyderabad's top marketing experts!"
    },
    {
      name: "Arjun Patel",
      company: "Foodie's Paradise, Jubilee Hills",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Their local SEO services brought customers directly to our door. Local visibility increased dramatically across Hyderabad."
    },
    {
      name: "Kavya Rao",
      company: "Creative Studio, HITEC City",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Professional team, data-driven approach, and outstanding ROI. Extin Media delivers on every promise. Highly recommend!"
    },
    {
      name: "Vikram Singh",
      company: "Growth Ventures, Madhapur",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The influencer marketing campaigns exceeded all expectations. Brand awareness skyrocketed across Hyderabad market!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-background via-purple-50/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/8 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/8 rounded-full blur-2xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">Hyderabad Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from businesses that have transformed their growth across Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 premium-shadow"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                ))}
              </div>

              <blockquote className="text-foreground/90 mb-8 leading-relaxed text-base italic relative">
                <span className="text-6xl text-purple-600/20 absolute -top-4 -left-2 font-serif leading-none">&quot;</span>
                <span className="relative z-10">{testimonial.quote}</span>
              </blockquote>

              <div className="flex items-center pt-4 border-t border-purple-500/20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-purple-700">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
