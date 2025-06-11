
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/10 to-background overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-small-black/[0.02] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#001F3F]/5 to-transparent" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#001F3F]/20 to-blue-500/10 rounded-full blur-2xl floating-animation" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-blue-500/15 to-[#001F3F]/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-br from-[#001F3F]/10 to-blue-400/15 rounded-full blur-lg floating-animation" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#001F3F]/10 to-blue-500/10 border border-[#001F3F]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#001F3F] mr-2" />
            <span className="text-sm font-semibold text-[#001F3F]">Award-Winning Digital Agency</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              <span className="block text-foreground text-shadow">Elevate Your Brand with</span>
              <span className="block gradient-text mt-2">360° Digital Marketing</span>
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-medium leading-relaxed">
              Expert <span className="text-[#001F3F] font-semibold">Google Ads</span>, 
              <span className="text-[#001F3F] font-semibold"> SEO</span>, 
              <span className="text-[#001F3F] font-semibold"> Meta Ads</span> & More
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Transform your digital presence with our comprehensive marketing solutions. 
            From AI-generated content to influencer partnerships, we deliver 
            <span className="text-[#001F3F] font-semibold"> measurable results</span> that scale your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#001F3F] to-[#003366] hover:from-[#002a5c] hover:to-[#004080] text-white px-10 py-7 text-lg font-semibold min-w-72 premium-shadow hover:premium-shadow-hover transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden"
              onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}
            >
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Zap className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Book Free Consultation</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group px-10 py-7 text-lg font-semibold min-w-72 border-2 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white premium-shadow hover:premium-shadow-hover transition-all duration-500 transform hover:scale-[1.02] bg-background/80 backdrop-blur-sm"
              onClick={() => window.open('https://youtu.be/e1-vF9YUNB0', '_blank')}
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-[#001F3F]" />
              <p className="text-base text-muted-foreground font-semibold">
                Trusted by <span className="text-[#001F3F] font-bold">500+</span> businesses worldwide
              </p>
            </div>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                  <div className="w-28 h-12 bg-gradient-to-r from-muted to-muted/80 rounded-lg flex items-center justify-center backdrop-blur-sm border border-border/50 hover:border-[#001F3F]/30 transition-all duration-300 hover:scale-105">
                    <span className="text-sm text-muted-foreground font-semibold group-hover:text-[#001F3F] transition-colors duration-300">Brand {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
