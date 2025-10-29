import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const serviceLinks = [
    { name: "HAIR", path: "/services/hair" },
    { name: "NAILS", path: "/services/nails" },
    { name: "MAKEUP", path: "/services/makeup" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-tight">
              BLOSSOM SALON
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("about")}
              className="link-underline text-sm font-medium opacity-60 hover:opacity-100"
            >
              ABOUT
            </button>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="link-underline text-sm font-medium opacity-60 hover:opacity-100 flex items-center gap-1">
                SERVICES
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-foreground shadow-lg z-50"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick("testimonials")}
              className="link-underline text-sm font-medium opacity-60 hover:opacity-100"
            >
              TESTIMONIALS
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="link-underline text-sm font-medium opacity-60 hover:opacity-100"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-foreground"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => handleNavClick("about")}
                  className="block w-full text-left px-4 py-2 text-sm font-medium"
                >
                  ABOUT
                </button>
                
                <div className="px-4 py-2">
                  <p className="text-sm font-medium mb-2">SERVICES</p>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 pl-4 text-sm font-medium opacity-60 hover:opacity-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <button
                  onClick={() => handleNavClick("testimonials")}
                  className="block w-full text-left px-4 py-2 text-sm font-medium"
                >
                  TESTIMONIALS
                </button>

                <button
                  onClick={() => handleNavClick("contact")}
                  className="block w-full text-left px-4 py-2 text-sm font-medium"
                >
                  CONTACT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
