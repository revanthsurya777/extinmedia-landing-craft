
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
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-[#001F3F]">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-secondary/20 rounded-xl border border-border hover:border-[#001F3F] transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
