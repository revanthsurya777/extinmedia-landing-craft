
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const FooterMinimal = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="font-black text-2xl">
              Extin<span className="text-blue-400">Media</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Hyderabad's leading digital marketing agency helping businesses scale through data-driven strategies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ExtinMedia/" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/extinct_media/" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/extinmedia/" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@ExtinMedia" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">SEO Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@extinmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 9617796197</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ExtinMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;
