
import { Star, Quote } from "lucide-react";

const TestimonialsMinimal = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "VM Motors",
      text: "ExtinMedia transformed our online presence. Website traffic increased by 300% in just 6 months.",
      rating: 5
    },
    {
      name: "Priya Sharma", 
      company: "ICS",
      text: "Exceptional social media marketing results. Brand awareness skyrocketed and sales increased by 250%.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Shubham Restaurant", 
      text: "Professional web development that perfectly represents our brand and drives conversions.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses across Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-blue-600" />
                
                <p className="text-gray-700 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMinimal;
