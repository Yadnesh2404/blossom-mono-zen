import { Link, useNavigate, useLocation } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (targetPath: string, sectionId: string) => {
    if (location.pathname === targetPath) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(targetPath);
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(20 10% 12%), hsl(20 12% 8%))' }}>
      {/* Subtle gold glow accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, hsl(40 47% 56% / 0.3), hsl(344 64% 50% / 0.2), hsl(40 47% 56% / 0.3), transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-brand-gold">
              ABOUT
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Blossom Salon & Academy is a luxury unisex salon in Andheri West, Mumbai offering premium
              hair, skin, nail and beauty services in an elegant and relaxing environment. Located near SAB
              TV Tower, Fun Republic and CitiMall, we specialise in hair styling, keratin, facials, nail care,
              manicure, pedicure and luxury beauty experiences for women and men.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-brand-gold">
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/hair" className="text-sm text-white/70 hover:text-brand-gold transition-colors duration-300">
                  Hair Styling
                </Link>
              </li>
              <li>
                <Link to="/services/skin" className="text-sm text-white/70 hover:text-brand-gold transition-colors duration-300">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link to="/services/nails" className="text-sm text-white/70 hover:text-brand-gold transition-colors duration-300">
                  Nail Care
                </Link>
              </li>
              <li>
                <Link to="/services/makeup" className="text-sm text-white/70 hover:text-brand-gold transition-colors duration-300">
                  Makeup Artistry
                </Link>
              </li>
              <li>
                <Link to="/services/spa" className="text-sm text-white/70 hover:text-brand-gold transition-colors duration-300">
                  Spa & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-brand-gold">
                HOURS
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-brand-gold/60" />
                  Open all days: 10:00 AM – 10:00 PM
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-brand-gold">
                CONTACT
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-brand-gold/60" />
                  <div>
                    <p>SHOP NO 4 & 5, NYAYA DEEP SOC</p>
                    <p>A WING, BEHIND SAB TV TOWER</p>
                    <p>MUMBAI, MAHARASHTRA 400053</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-brand-gold/60" />
                  <a href="tel:+919892657908" className="hover:text-brand-gold transition-colors duration-300">09892657908</a>
                  <span className="mx-2 text-white/30">|</span>
                  <a href="tel:+918928012246" className="hover:text-brand-gold transition-colors duration-300">08928012246</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.instagram.com/blossomsalonandheri?igsh=OW9objRxaGN2ejI%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/blossomsalonandheri/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@BlossomSalonAndheriwest" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-gold transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/50">
              &copy; {currentYear} Blossom Salon. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => handleNavClick("/contact", "contact")}
                className="px-6 py-2.5 text-sm font-medium tracking-wider uppercase border border-brand-gold/30 rounded-full text-white/80 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-300"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
