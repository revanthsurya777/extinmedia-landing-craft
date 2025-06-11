
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      company: "TechStart Inc.",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Extinmedia transformed our digital presence completely. Our lead generation increased by 300% in just 3 months!"
    },
    {
      name: "Arjun Patel",
      company: "E-commerce Pro",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The AI-generated content and SEO optimization helped us rank #1 for our target keywords. Incredible results!"
    },
    {
      name: "Ananya Gupta",
      company: "Local Business Hub",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Their GEO services brought customers directly to our door. Local visibility increased dramatically."
    },
    {
      name: "Vikram Singh",
      company: "Growth Ventures",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Professional team, data-driven approach, and outstanding ROI. Extinmedia delivers on every promise."
    },
    {
      name: "Kavya Reddy",
      company: "Creative Agency",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The influencer marketing campaigns exceeded all expectations. Brand awareness skyrocketed!"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.02\"%3E%3Cpath d=\"M40 40c13.8 0 25-11.2 25-25S53.8-10 40-10 15 1.2 15 15s11.2 25 25 25z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="bg-gradient-to-r from-[#001F3F] via-blue-600 to-[#001F3F] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from businesses that have transformed their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-[#001F3F]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#001F3F]/10 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                ))}
              </div>

              <blockquote className="text-foreground/90 mb-8 leading-relaxed text-base italic relative">
                <span className="text-6xl text-[#001F3F]/20 absolute -top-4 -left-2 font-serif leading-none">&quot;</span>
                <span className="relative z-10">{testimonial.quote}</span>
              </blockquote>

              <div className="flex items-center pt-4 border-t border-border/30">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#001F3F]/20 to-blue-200 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold text-[#001F3F]">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
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
