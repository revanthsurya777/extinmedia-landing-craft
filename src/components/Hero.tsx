import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, TrendingUp, MapPin, Award, Users2 } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
      {/* Enhanced Background Pattern with Premium Feel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-small-black/[0.015] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#001F3F]/3 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#001F3F]/5 via-transparent to-transparent" />
      </div>
      
      {/* Premium Floating Elements with Eye-Catching Colors */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-3xl floating-animation premium-glow" style={{
      animationDelay: '0s'
    }} />
      <div className="absolute bottom-40 right-24 w-32 h-32 bg-gradient-to-br from-blue-500/12 to-cyan-500/10 rounded-full blur-2xl floating-animation premium-glow" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/8 rounded-full blur-xl floating-animation premium-glow" style={{
      animationDelay: '4s'
    }} />
      <div className="absolute top-20 right-1/3 w-20 h-20 bg-gradient-to-br from-orange-500/8 to-yellow-500/8 rounded-full blur-lg floating-animation premium-glow" style={{
      animationDelay: '1s'
    }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Premium Badge with Location */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm premium-shadow hover:premium-shadow-hover transition-all duration-500 hover:scale-105 group">
            <Award className="w-5 h-5 text-purple-600 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-bold text-purple-700 mr-2">Award-Winning Digital Marketing Agency</span>
            <div className="w-1 h-1 bg-purple-600/40 rounded-full mx-2" />
            <MapPin className="w-4 h-4 text-purple-600 mr-1" />
            <span className="text-sm font-semibold text-purple-700">Hyderabad</span>
          </div>

          {/* SEO-Optimized Main Heading */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tight text-shadow-lg">
              <span className="block text-foreground mb-2">Hyderabad's Best</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent block ">Digital Marketing Agency</span>
              <span className="block text-foreground text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 opacity-90">for Growth-Driven Brands</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl lg:text-3xl font-bold">
              <span className="bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-700 px-4 py-2 rounded-full border border-purple-500/20">SEO Experts</span>
              <span className="bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-blue-700 px-4 py-2 rounded-full border border-blue-500/20">PPC Specialists</span>
              <span className="bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-emerald-700 px-4 py-2 rounded-full border border-emerald-500/20">Social Media Experts</span>
            </div>
          </div>

          {/* Enhanced Description with Keywords */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-medium text-sky-950 text-center">
              <span className="text-purple-700 font-bold text-center">Extin Media</span> is Hyderabad's{" "}
              <span className="text-blue-700 font-bold">top-rated digital marketing company</span>{" "}
              delivering exceptional{" "}
              <span className="text-emerald-700 font-semibold">SEO services</span>,{" "}
              <span className="text-cyan-700 font-semibold">Google Ads management</span>, and{" "}
              <span className="text-pink-700 font-semibold">social media marketing</span>{" "}
              solutions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Transform your business with our{" "}
              <span className="text-orange-700 font-semibold">cost-effective marketing strategies</span>{" "}
              designed for startups and enterprises. Experience{" "}
              <span className="text-purple-700 font-bold">measurable growth</span>{" "}
              with Hyderabad's most trusted digital marketing experts.
            </p>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <Button size="lg" className="group bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 text-white px-12 py-8 text-xl font-bold min-w-80 premium-shadow hover:premium-shadow-hover transition-all duration-700 transform hover:scale-105 relative overflow-hidden rounded-2xl" onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}>
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Zap className="mr-4 h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
              <span className="relative z-10">Get Free Strategy Consultation</span>
            </Button>
            
            <Button size="lg" variant="outline" className="group px-12 py-8 text-xl font-bold min-w-80 border-3 border-purple-600 text-purple-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white premium-shadow hover:premium-shadow-hover transition-all duration-700 transform hover:scale-105 bg-background/90 backdrop-blur-sm rounded-2xl" onClick={() => window.open('https://youtu.be/e1-vF9YUNB0', '_blank')}>
              <Play className="mr-4 h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
              Watch Success Stories
            </Button>
          </div>

          {/* Enhanced Trust Indicators with Statistics */}
          <div className="pt-20 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-4xl font-black text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-muted-foreground font-semibold">Successful Campaigns</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-muted-foreground font-semibold">Client Satisfaction</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-sm text-muted-foreground font-semibold">Years Experience</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <p className="text-lg text-muted-foreground font-bold">
                Trusted by <span className="text-purple-700 font-black">500+</span> businesses across Hyderabad
              </p>
              <Users2 className="w-6 h-6 text-cyan-600" />
            </div>
            
            {/* Premium Brand Showcase */}
            <div className="flex justify-center items-center space-x-16 opacity-70 pt-8">
              {[1, 2, 3, 4].map(i => <div key={i} className="group">
                  <div className="w-32 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-110 premium-shadow hover:premium-shadow-hover">
                    <span className="text-sm text-muted-foreground font-bold group-hover:text-purple-700 transition-colors duration-300">Client {i}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>;
};
export default Hero;