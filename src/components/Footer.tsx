
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Extin<span className="text-purple-400">Media</span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Hyderabad's premier digital marketing agency delivering exceptional results through innovative strategies and cutting-edge technology.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ExtinMedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-purple-600 rounded-xl transition-all duration-300 group"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/extinct_media/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-pink-600 rounded-xl transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/extinmedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@ExtinMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-red-600 rounded-xl transition-all duration-300 group"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">SEO Services</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Google Ads</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Social Media Marketing</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Web Development</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Content Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">About</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">info@extinmedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">+91 9617796197</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Extin Media. All rights reserved. | Best Digital Marketing Agency in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
