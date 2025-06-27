
import { Award, Users, TrendingUp } from "lucide-react";

const AboutMinimal = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                  We're <span className="text-blue-600">ExtinMedia</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A growth-focused digital marketing agency in Hyderabad, dedicated to helping businesses 
                  scale through data-driven strategies and creative excellence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Certified Experts</h3>
                    <p className="text-gray-600">Google, Meta, and HubSpot certified professionals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Results-Driven</h3>
                    <p className="text-gray-600">Every strategy is built around measurable business outcomes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Client-Focused</h3>
                    <p className="text-gray-600">Your success is our success. We're partners in growth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Our Impact</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600 mb-2">300%</div>
                    <div className="text-sm text-gray-600">Avg Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMinimal;
