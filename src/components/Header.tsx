
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

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Portfolio", href: "#stats" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"/>
                  </svg>
                  <span className="font-semibold">SEO Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                  </svg>
                  <span className="font-semibold">PPC Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-semibold">Meta Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-semibold">Google Certified</span>
                </div>
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
    </>
  );
};

export default Header;
