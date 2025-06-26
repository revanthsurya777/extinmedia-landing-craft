
import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(new Set());
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleTestimonials(prev => new Set(prev).add(index));
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-50px'
    });

    testimonialsRef.current.forEach((testimonial, index) => {
      if (testimonial) {
        testimonial.setAttribute('data-index', index.toString());
        observer.observe(testimonial);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "VM Motors",
      text: "ExtinMedia transformed our online presence. Our website traffic increased by 300% in just 6 months. Their SEO expertise is unmatched in Hyderabad!",
      rating: 5,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Priya Sharma",
      company: "ICS",
      text: "The social media marketing campaigns delivered exceptional results. Our brand awareness skyrocketed and sales increased by 250%. Highly recommended!",
      rating: 5,
      gradient: "from-pink-500 to-red-500"
    },
    {
      name: "Amit Patel",
      company: "Shubham Restaurant",
      text: "Professional web development and outstanding customer service. They created a beautiful website that perfectly represents our brand and drives conversions.",
      rating: 5,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Sneha Reddy",
      company: "Pansh Ventures",
      text: "Their Google Ads management is phenomenal. We saw a 400% ROI within the first quarter. ExtinMedia knows how to deliver real business results.",
      rating: 5,
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      name: "Vikram Singh",
      company: "Harini Tech Solutions",
      text: "Complete digital marketing solution that exceeded expectations. From branding to performance marketing, they handled everything with utmost professionalism.",
      rating: 5,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Kavitha Nair",
      company: "Urban Living",
      text: "Local SEO services helped us dominate Hyderabad market. We're now the top result for all our target keywords. Incredible expertise and results!",
      rating: 5,
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/8 to-purple-500/6 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-pink-500/8 to-orange-500/6 rounded-full blur-2xl floating-animation" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-500/6 to-emerald-500/8 rounded-full blur-xl floating-animation" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8 premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-bold text-blue-700">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            What Our <span className="text-blue-700 font-black">Happy Clients</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 block">Say About Us</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Real results from real businesses across Hyderabad. See how we've helped companies achieve their digital marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleTestimonials.has(index);
            return (
              <div
                key={index}
                ref={el => testimonialsRef.current[index] = el}
                className={`group relative p-8 bg-background/90 backdrop-blur-md rounded-3xl border border-gray-200/30 hover:border-blue-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-4 premium-shadow hover:premium-shadow-hover overflow-hidden
                  ${isVisible ? 'mobile-pop mobile-enhance' : 'opacity-0 translate-y-8'}
                  md:opacity-100 md:translate-y-0`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:opacity-20 mobile-vibrant`} />
                
                {/* Quote Icon */}
                <div className="relative z-10 mb-6">
                  <Quote className="w-12 h-12 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <p className="text-foreground leading-relaxed font-medium text-base">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="border-t border-gray-200/30 pt-6">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-blue-700 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
              </div>
            );
          })}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-black text-foreground">5.0</span>
          </div>
          <p className="text-lg text-foreground font-bold">
            Average rating from <span className="text-blue-700 font-black">500+</span> satisfied clients across Hyderabad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
