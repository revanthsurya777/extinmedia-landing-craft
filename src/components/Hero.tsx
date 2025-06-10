
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.02] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Elevate Your Brand with{" "}
              <span className="text-[#001F3F]">360° Digital Marketing</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Expert Google Ads, SEO, Meta Ads & More
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your digital presence with our comprehensive marketing solutions. 
            From AI-generated content to influencer partnerships, we've got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-[#001F3F] hover:bg-[#001F3F]/90 text-white px-8 py-6 text-lg font-semibold min-w-64"
              onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold min-w-64 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 space-y-4">
            <p className="text-sm text-muted-foreground font-medium">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-8 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Brand {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#001F3F]/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#001F3F]/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
