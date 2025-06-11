
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, TrendingUp, MapPin, Award, Users2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
      {/* Enhanced Background Pattern with Premium Feel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-small-black/[0.015] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#001F3F]/3 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#001F3F]/5 via-transparent to-transparent" />
      </div>
      
      {/* Premium Floating Elements */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-[#001F3F]/10 to-blue-500/5 rounded-full blur-3xl floating-animation premium-glow" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-40 right-24 w-32 h-32 bg-gradient-to-br from-blue-500/8 to-[#001F3F]/10 rounded-full blur-2xl floating-animation premium-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-br from-[#001F3F]/8 to-blue-400/8 rounded-full blur-xl floating-animation premium-glow" style={{ animationDelay: '4s' }} />
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-[#001F3F]/8 rounded-full blur-lg floating-animation premium-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Premium Badge with Location */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#001F3F]/8 to-blue-500/8 border border-[#001F3F]/20 backdrop-blur-sm premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105 group">
            <Award className="w-5 h-5 text-[#001F3F] mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-bold text-[#001F3F] mr-2">Award-Winning Digital Marketing Agency</span>
            <div className="w-1 h-1 bg-[#001F3F]/40 rounded-full mx-2" />
            <MapPin className="w-4 h-4 text-[#001F3F] mr-1" />
            <span className="text-sm font-semibold text-[#001F3F]">Hyderabad</span>
          </div>

          {/* SEO-Optimized Main Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tight text-shadow-lg">
              <span className="block text-foreground mb-2">Hyderabad's Best</span>
              <span className="block gradient-text premium-text-glow">Digital Marketing Agency</span>
              <span className="block text-foreground text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 opacity-90">for Growth-Driven Brands</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl lg:text-3xl text-[#001F3F] font-bold">
              <span className="bg-gradient-to-r from-[#001F3F]/10 to-blue-500/10 px-4 py-2 rounded-full border border-[#001F3F]/20">SEO Experts</span>
              <span className="bg-gradient-to-r from-blue-500/10 to-[#001F3F]/10 px-4 py-2 rounded-full border border-[#001F3F]/20">PPC Specialists</span>
              <span className="bg-gradient-to-r from-[#001F3F]/10 to-purple-500/10 px-4 py-2 rounded-full border border-[#001F3F]/20">Social Media Experts</span>
            </div>
          </div>

          {/* Enhanced Description with Keywords */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              <span className="text-[#001F3F] font-bold">Extin Media</span> is Hyderabad's{" "}
              <span className="text-[#001F3F] font-bold">top-rated digital marketing company</span>{" "}
              delivering exceptional{" "}
              <span className="text-[#001F3F] font-semibold">SEO services</span>,{" "}
              <span className="text-[#001F3F] font-semibold">Google Ads management</span>, and{" "}
              <span className="text-[#001F3F] font-semibold">social media marketing</span>{" "}
              solutions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business with our{" "}
              <span className="text-[#001F3F] font-semibold">cost-effective marketing strategies</span>{" "}
              designed for startups and enterprises. Experience{" "}
              <span className="text-[#001F3F] font-bold">measurable growth</span>{" "}
              with Hyderabad's most trusted digital marketing experts.
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#001F3F] to-[#003366] hover:from-[#002a5c] hover:to-[#004080] text-white px-12 py-8 text-xl font-bold min-w-80 premium-shadow hover:premium-shadow-hover transition-all duration-700 transform hover:scale-105 relative overflow-hidden rounded-2xl"
              onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}
            >
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Zap className="mr-4 h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
              <span className="relative z-10">Get Free Strategy Consultation</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-12 py-8 text-xl font-bold min-w-80 border-3 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white premium-shadow hover:premium-shadow-hover transition-all duration-700 transform hover:scale-105 bg-background/90 backdrop-blur-sm rounded-2xl"
              onClick={() => window.open('https://youtu.be/e1-vF9YUNB0', '_blank')}
            >
              <Play className="mr-4 h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
              Watch Success Stories
            </Button>
          </div>

          {/* Enhanced Trust Indicators with Statistics */}
          <div className="pt-20 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl font-black text-[#001F3F] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-muted-foreground font-semibold">Successful Campaigns</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-[#001F3F] mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-muted-foreground font-semibold">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-[#001F3F] mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm text-muted-foreground font-semibold">Years Experience</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-6 h-6 text-[#001F3F]" />
              <p className="text-lg text-muted-foreground font-bold">
                Trusted by <span className="text-[#001F3F] font-black">500+</span> businesses across Hyderabad
              </p>
              <Users2 className="w-6 h-6 text-[#001F3F]" />
            </div>
            
            {/* Premium Brand Showcase */}
            <div className="flex justify-center items-center space-x-16 opacity-70 pt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                  <div className="w-32 h-16 bg-gradient-to-r from-muted/80 to-muted/60 rounded-xl flex items-center justify-center backdrop-blur-sm border border-border/30 hover:border-[#001F3F]/40 transition-all duration-500 hover:scale-110 premium-shadow hover:premium-shadow-hover">
                    <span className="text-sm text-muted-foreground font-bold group-hover:text-[#001F3F] transition-colors duration-300">Client {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default Hero;
