import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Calendar } from "lucide-react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Button } from "./ui/button";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHome = location.pathname === "/";

  const serviceLinks = [
    { name: "HAIR", path: "/services/hair" },
    { name: "SKIN", path: "/services/skin" },
    { name: "NAILS", path: "/services/nails" },
    { name: "MAKEUP", path: "/services/makeup" },
    { name: "SPA", path: "/services/spa" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      setMobileServicesOpen(false);
    }
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

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
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - centered on mobile */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <h1 className="text-xl md:text-3xl font-heading font-bold tracking-tight">
                BLOSSOM SALON
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavClick("about")}
              className="link-underline text-sm font-medium opacity-60 hover:opacity-100"
              aria-label="About"
            >
              ABOUT
            </button>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="group relative text-sm font-medium opacity-60 hover:opacity-100 flex items-center"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span className="link-underline">SERVICES</span>
                <ChevronDown className="w-3 h-3 ml-1.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute top-full left-0 mt-2 w-56 bg-background border border-foreground shadow-lg z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="services-menu"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors whitespace-normal w-full"
                        role="menuitem"
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
              aria-label="Testimonials"
            >
              TESTIMONIALS
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="link-underline text-sm font-medium opacity-60 hover:opacity-100"
            >
              CONTACT
            </button>
            
            <button
              onClick={() => handleNavClick("booking")}
              className="hidden md:flex items-center ml-6 bg-black text-white hover:bg-gray-900 transition-colors h-10 px-4 py-2 text-sm font-medium"
              aria-label="Book an appointment"
            >
              <Calendar className="w-4 h-4 mr-2" />
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button - Only show on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
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
                
                <div className="px-4 py-2 w-full">
                  <p className="text-sm font-medium mb-2">SERVICES</p>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 pl-4 pr-6 text-sm font-medium opacity-60 hover:opacity-100 whitespace-normal w-full"
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
