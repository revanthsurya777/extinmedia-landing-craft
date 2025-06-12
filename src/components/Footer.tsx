import { Facebook, Linkedin, Youtube, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Footer = () => {
  const quickLinks = [{
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
    name: "Contact",
    href: "#contact"
  }];
  const services = ["Google Ads", "SEO Optimization", "Meta Ads", "Web Development", "Content Marketing"];
  const socialLinks = [{
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }, {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Youtube,
    href: "#",
    label: "YouTube"
  }, {
    icon: Instagram,
    href: "#",
    label: "Instagram"
  }];
  return <footer id="contact" className="bg-[#001F3F] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Extinmedia</div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for comprehensive 360° digital marketing solutions.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-white/80">
                📍 123 Business Street, City, State 12345
              </p>
              <p className="text-sm text-white/80">📞 +91 9617796197 </p>
              <p className="text-sm text-white/80">✉️ info@extinmedia.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map(service => <li key={service}>
                  <span className="text-white/80">{service}</span>
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-white/80 text-sm">
              Subscribe to our newsletter for digital marketing tips and updates.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
              <Button className="w-full bg-white hover:bg-white/90 text-[#001F3F]" onClick={() => window.open('https://forms.gle/a23i2D6fcAqUW7Dt5', '_blank')}>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">© 2025 Extinmedia. All rights reserved.</p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(social => {
              const Icon = social.icon;
              return <a key={social.label} href={social.href} aria-label={social.label} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200">
                    <Icon className="h-5 w-5" />
                  </a>;
            })}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;