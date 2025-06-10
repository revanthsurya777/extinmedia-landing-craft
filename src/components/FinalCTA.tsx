
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#001F3F] to-[#002a5c] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your <span className="text-white">Marketing?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses that have already elevated their digital presence. 
            Start your transformation today with a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-[#001F3F] px-8 py-6 text-lg font-semibold min-w-64"
              onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold min-w-64 border-white text-white hover:bg-white hover:text-[#001F3F]"
              onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}
            >
              Schedule a Call
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-white/70">
              🚀 Free consultation • ⚡ 24-hour response • 💯 No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
