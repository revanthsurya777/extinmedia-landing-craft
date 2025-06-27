
import { Award, Users, TrendingUp } from "lucide-react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

const AboutMinimal = () => {
  const { isVisible: titleVisible, elementRef: titleRef } = useScrollTrigger();
  const { isVisible: contentVisible, elementRef: contentRef } = useScrollTrigger();
  const { isVisible: statsVisible, elementRef: statsRef } = useScrollTrigger();

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-purple-500/8 to-pink-500/5 rounded-full blur-3xl animate-floating" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/8 to-cyan-500/5 rounded-full blur-2xl animate-floating" style={{animationDelay: '1.5s'}} />
        <div className="absolute inset-0 bg-mesh opacity-30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={contentRef}
              className={`space-y-8 ${contentVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
            >
              <div className="space-y-6">
                <h2 
                  ref={titleRef}
                  className={`text-5xl md:text-6xl font-black text-gray-900 leading-tight ${titleVisible ? 'text-reveal in-view' : 'text-reveal'}`}
                >
                  <span className="stagger-1">We're </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient stagger-2">ExtinMedia</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A growth-focused digital marketing agency in Hyderabad, dedicated to helping businesses 
                  scale through data-driven strategies and creative excellence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover-lift">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Certified Experts</h3>
                    <p className="text-gray-600">Google, Meta, and HubSpot certified professionals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover-lift">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">Results-Driven</h3>
                    <p className="text-gray-600">Every strategy is built around measurable business outcomes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover-lift">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Client-Focused</h3>
                    <p className="text-gray-600">Your success is our success. We're partners in growth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={statsRef}
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-shimmer ${statsVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
            >
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Our Impact</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group hover-lift">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center group hover-lift">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                  <div className="text-center group hover-lift">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">300%</div>
                    <div className="text-sm text-gray-600">Avg Growth</div>
                  </div>
                  <div className="text-center group hover-lift">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-floating opacity-60" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-floating opacity-40" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMinimal;
