import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { heroImages } from "@/lib/hero-images";

const slides = [
  {
    ...heroImages.skin,
    link: "/services/skin"
  },
  {
    ...heroImages.nails,
    link: "/services/nails"
  },
  {
    ...heroImages.hair,
    link: "/services/hair"
  },
  {
    ...heroImages.makeup,
    link: "/services/makeup"
  },
  {
    ...heroImages.spa,
    link: "/services/spa"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const slide = slides[currentSlide];
  const nextSlide = slides[(currentSlide + 1) % slides.length];
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // Preload next image
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    if (!isLoading) {
      preloadImage(nextSlide.image);
    }
  }, [currentSlide, isLoading, nextSlide.image]);

  // Handle initial image load
  useEffect(() => {
    const img = new Image();
    img.src = slide.image;
    img.onload = () => setIsLoading(false);
    return () => {
      img.onload = null;
    };
  }, [slide.image]);

  // Auto-advance slides
  useEffect(() => {
    if (isLoading || isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, currentSlide, isLoading]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Swipe support for touch devices
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-screen max-w-full overflow-hidden bg-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
      aria-live="polite"
      style={{ marginLeft: 'calc((100% - 100vw) / 2)' }} // Fix for horizontal scroll
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              opacity: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 1, ease: [0.4, 0, 0.2, 1] }
            }
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
          }}
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, ${slide.overlay}, ${slide.overlay}), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 flex items-center justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
                className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-4xl w-full"
              >
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading text-[#C8AA6E] leading-none mb-1 drop-shadow-md">
                    LUXURY
                  </h1>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading tracking-[0.05em] text-[#FDFBF7] mb-2 drop-shadow-md whitespace-nowrap">
                    {slide.link === "/services/hair" ? "HAIR STUDIO" : slide.link === "/services/skin" ? "SKIN & BEAUTY" : slide.link === "/services/nails" ? "NAIL CARE" : slide.link === "/services/makeup" ? "MAKEUP" : "SPA & WELLNESS"}
                  </h2>

                  <div className="flex items-center gap-3 mb-6 w-full max-w-[80%] md:max-w-[400px]">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8AA6E]/50 to-[#C8AA6E] md:from-[#C8AA6E]/20 md:via-[#C8AA6E]/50 md:to-[#C8AA6E]"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8AA6E]">
                      <path d="M12 4C12 4 14.5 7.5 16 9C17.5 10.5 20 11 20 11C20 11 16.5 13 15 15C13.5 17 12 20 12 20C12 20 10.5 17 9 15C7.5 13 4 11 4 11C4 11 7.5 10.5 9 9C10.5 7.5 12 4 12 4Z" fill="currentColor" />
                      <path d="M12 4C12 4 13.5 7 14 9C14.5 11 15 11 15 11C15 11 14.5 11 14 13C13.5 15 12 20 12 20C12 20 10.5 15 10 13C9.5 11 9 11 9 11C9 11 9.5 11 10 9C10.5 7 12 4 12 4Z" fill="white" fillOpacity="0.3" />
                    </svg>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C8AA6E]/50 to-[#C8AA6E] md:from-transparent md:via-[#C8AA6E]/50 md:to-[#C8AA6E]"></div>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed drop-shadow-sm mb-6 max-w-xl text-[#e8e4db]">
                    {slide.link === "/services/makeup"
                      ? "Bridal, party and occasion makeup services crafted for timeless elegance and flawless beauty."
                      : slide.link === "/services/nails"
                        ? "Premium manicure, pedicure, nail extensions, gel polish and luxury nail care services in Andheri West, Mumbai."
                        : slide.link === "/services/hair"
                          ? "Premium haircuts, hair colour, keratin, smoothening and luxury hair care services in Andheri West, Mumbai."
                          : slide.link === "/services/skin"
                            ? "Premium facials, glow care and luxury skin services in Andheri West, Mumbai."
                            : "Premium spa, body massage and relaxation therapies in Andheri West, Mumbai designed to restore calm, comfort and luxury wellness."}
                  </p>

                  <Link
                    to={slide.link || '#'}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-[#b89552] via-[#d4b977] to-[#b89552] hover:bg-gradient-to-br text-[#1A1A1A] px-8 py-3.5 text-[0.9rem] font-semibold tracking-wider transition-all duration-300 shadow-md rounded-sm transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      {slide.link === "/services/makeup" ? "BOOK YOUR LUXURY MAKEUP EXPERIENCE" : slide.link === "/services/hair" ? "BOOK YOUR LUXURY HAIR EXPERIENCE" : slide.link === "/services/nails" ? "BOOK YOUR LUXURY NAIL EXPERIENCE" : slide.link === "/services/skin" ? "BOOK YOUR LUXURY SKIN EXPERIENCE" : "BOOK YOUR LUXURY SPA EXPERIENCE"}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>

                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-3xl">
                    <div className="flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-relaxed">
                        PREMIUM<br />
                        {slide.link === "/services/hair" ? "HAIR" : slide.link === "/services/skin" ? "SKIN" : slide.link === "/services/nails" ? "NAIL" : slide.link === "/services/makeup" ? "MAKEUP" : "SPA"} PRODUCTS
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                      <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-relaxed">
                        EXPERT<br />
                        {slide.link === "/services/hair" ? "HAIR STYLISTS" : slide.link === "/services/skin" ? "SKIN THERAPISTS" : slide.link === "/services/nails" ? "NAIL ARTISTS" : slide.link === "/services/makeup" ? "MAKEUP ARTISTS" : "SPA THERAPISTS"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-relaxed">
                        LUXURY<br />SALON EXPERIENCE
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-relaxed">
                        TRUSTED IN<br />ANDHERI WEST
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              onClick={() => !isActive && goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white ${isActive ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1} of ${slides.length}`}
              aria-current={isActive ? 'true' : 'false'}
            />
          );
        })}
      </div>

      {/* Mobile swipe indicator */}
      {isMobile && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/60 text-xs z-10">

        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
