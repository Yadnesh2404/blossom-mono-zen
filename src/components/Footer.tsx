import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-background">
              ABOUT
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              Blossom Salon is a premium beauty destination offering expert hair styling, 
              nail care, and makeup services. We believe in timeless elegance and personalized care.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-background">
              SERVICES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/hair" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Hair Styling
                </Link>
              </li>
              <li>
                <Link to="/services/nails" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Nail Care
                </Link>
              </li>
              <li>
                <Link to="/services/makeup" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Makeup Artistry
                </Link>
              </li>
              <li>
                <Link to="/services/spa" className="text-sm hover:underline opacity-90 hover:opacity-100">
                  Spa & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-background">
                HOURS
              </h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Monday - Tuesday: 10:00 AM - 10:00 PM
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 opacity-0" />
                  Wednesday: Closed
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 opacity-0" />
                  Thursday - Sunday: 10:00 AM - 10:00 PM
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold mb-4 text-background">
                CONTACT
              </h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p>A WING, SHOP NO 4, NAYADEEP APARTMENT</p>
                    <p>NEAR KALINGA RESTAURANT, RAVI RAJ COMPLEX</p>
                    <p>NEW LINK ROAD, ANDHERI WEST</p>
                    <p>MUMBAI, MAHARASHTRA 400053</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+915551234567" className="hover:underline">(555) 123-4567</a>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:hello@blossomsalon.com" className="hover:underline">hello@blossomsalon.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-75">
              &copy; {currentYear} Blossom Salon. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => handleNavClick("contact")}
                className="px-4 py-2 text-sm font-medium border border-background/20 rounded-md hover:bg-background/10 transition-colors"
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
