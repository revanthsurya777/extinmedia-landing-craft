import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Portfolio",
    href: "#stats"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">Best Digital Marketing Agency in Hyderabad</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@extinmedia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9617796197</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-purple-500/20 premium-shadow' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex flex-col items-start group">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Extin<span className="text-purple-700">Media</span>
              </div>
              <div className="text-sm text-purple-600 font-semibold mt-1">
                Digital Marketing Experts
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <a key={link.name} href={link.href} className="relative text-sm font-bold text-foreground hover:text-purple-700 transition-all duration-300 group py-2">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </a>)}
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden md:flex">
              <Button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 text-white font-bold px-8 py-3 premium-shadow hover:premium-shadow-hover transition-all duration-700 hover:scale-105 relative overflow-hidden rounded-xl" onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Get Free Consultation</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-xl hover:bg-purple-500/10 transition-colors duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden py-8 space-y-8 glass-effect rounded-2xl mt-4 mb-4 border border-purple-500/20 premium-shadow">
              {navLinks.map(link => <a key={link.name} href={link.href} className="block text-lg font-bold text-foreground hover:text-purple-700 transition-colors duration-200 px-6" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
              <div className="px-6">
                <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 hover:from-purple-700 hover:via-pink-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl premium-shadow" onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}>
                  Get Free Consultation
                </Button>
              </div>
            </div>}
        </div>
      </header>
    </>;
};
export default Header;