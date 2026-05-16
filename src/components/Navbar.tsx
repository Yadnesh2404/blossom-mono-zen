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
      setIsOpen(false);
      window.location.href = `/#${sectionId}`;
    } else {
      // Close menu first, then scroll after overflow is restored
      setIsOpen(false);
      setMobileServicesOpen(false);
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md" style={{ borderBottom: '1px solid hsl(30 15% 82% / 0.6)' }}>
      <div className="brand-divider"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo + SEO Tagline */}
          <div className="md:flex-none md:flex-1 flex items-center gap-6">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Blossom Salon - Luxury Hair, Skin & Nail Salon in Andheri West"
                className="h-12 md:h-[120px] w-auto"
              />
            </Link>
            <h1 className="hidden md:block text-xs tracking-[0.2em] text-foreground/35 font-light leading-relaxed uppercase">
              Luxury Hair, Skin &amp; Nail Salon in Andheri West
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl overflow-hidden z-50"
                    style={{ background: 'linear-gradient(145deg, hsl(40 33% 97%), hsl(36 30% 96%))', boxShadow: '0 10px 30px -5px rgba(45,35,25,0.12)', border: '1px solid hsl(30 15% 82% / 0.5)' }}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="services-menu"
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-5 py-3 text-sm font-medium text-left hover:bg-brand-gold/10 hover:text-brand-gold transition-colors duration-200 w-full"
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
              onClick={() => handleNavClick("about")}
              className="link-underline text-sm font-medium opacity-60 hover:opacity-100"
              aria-label="About"
            >
              ABOUT
            </button>

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
              onClick={() => handleNavClick("contact")}
              className="flex items-center ml-6 bg-brand-rose text-white hover:bg-brand-rose/90 transition-all duration-300 h-10 px-5 py-2 text-sm font-medium tracking-wider rounded-full shadow-sm hover:shadow-md"
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="brand-divider"></div>
              <div className="py-6 px-6 space-y-1">
                {/* ABOUT */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                  onClick={() => handleNavClick("about")}
                  className="block w-full text-left py-3 text-base font-heading font-semibold tracking-wider uppercase border-b border-foreground/5 hover:text-brand-gold transition-colors"
                >
                  ABOUT
                </motion.button>

                {/* SERVICES — Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border-b border-foreground/5"
                >
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-base font-heading font-semibold tracking-wider uppercase hover:text-brand-gold transition-colors"
                  >
                    SERVICES
                    <motion.div
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-3 space-y-1">
                          {serviceLinks.map((link, i) => (
                            <motion.div
                              key={link.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-2 py-2.5 text-sm font-medium text-foreground/60 hover:text-brand-gold transition-colors"
                              >
                                <span className="w-4 h-[1px] bg-brand-gold/50"></span>
                                {link.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* TESTIMONIALS */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  onClick={() => handleNavClick("testimonials")}
                  className="block w-full text-left py-3 text-base font-heading font-semibold tracking-wider uppercase border-b border-foreground/5 hover:text-brand-gold transition-colors"
                >
                  TESTIMONIALS
                </motion.button>

                {/* CONTACT */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => handleNavClick("contact")}
                  className="block w-full text-left py-3 text-base font-heading font-semibold tracking-wider uppercase border-b border-foreground/5 hover:text-brand-gold transition-colors"
                >
                  CONTACT
                </motion.button>

                {/* BOOK NOW CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-rose text-white text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-brand-rose/90 rounded-full"
                  >
                    <Calendar className="w-4 h-4" />
                    BOOK NOW
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
