
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTAMinimal = () => {
  const handleContact = () => {
    window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank');
  };

  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Ready to <span className="text-blue-400">Scale?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join the digital revolution with ExtinMedia. Let's build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Calendar className="mr-3 h-5 w-5" />
              <span>Schedule Free Strategy Call</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleContact}
              className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <span>Let's Talk Growth</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAMinimal;
