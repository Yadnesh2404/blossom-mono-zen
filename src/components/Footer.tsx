import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-background">
              CONTACT
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>123 Luxury Avenue</li>
              <li>City, State 12345</li>
              <li className="pt-2">Phone: (555) 123-4567</li>
              <li>Email: hello@blossomsalon.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm opacity-75">
            &copy; {currentYear} Blossom Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
