import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { heroImages } from "@/lib/hero-images";

const slides = [
  {
    ...heroImages.hair,
    link: "/services/hair"
  },
  {
    ...heroImages.skin,
    link: "/services/skin"
  },
  {
    ...heroImages.nails,
    link: "/services/nails"
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
      className="relative h-[100dvh] pb-[env(safe-area-inset-bottom)] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden bg-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
      aria-live="polite"
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
          <div className="relative w-full h-full" aria-hidden="true">
            {/* Optimized image element instead of background-image for better browser optimization */}
            <img
              src={slide.image}
              alt={`${slide.title} - Luxury salon service`}
              loading={currentSlide === 0 ? "eager" : "lazy"}
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-[center_20%] md:object-center"
            />

            <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-32 overflow-y-auto md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
                className="px-4 sm:px-8 md:px-12 lg:px-16 max-w-4xl w-full py-4 md:py-0"
              >
                <div className="text-center flex flex-col items-center">
                  <Link
                    to={slide.link || '#'}
                    className="inline-flex items-center justify-center bg-brand-rose hover:bg-brand-rose/90 text-white px-6 py-2.5 sm:px-8 sm:py-3.5 text-[0.8rem] sm:text-[0.9rem] font-semibold tracking-wider transition-all duration-300 shadow-md rounded-sm transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <span>
                        {slide.link === "/services/makeup" ? "BOOK YOUR LUXURY MAKEUP EXPERIENCE" : slide.link === "/services/hair" ? "BOOK YOUR LUXURY HAIR EXPERIENCE" : slide.link === "/services/nails" ? "BOOK YOUR LUXURY NAIL EXPERIENCE" : slide.link === "/services/skin" ? "BOOK YOUR LUXURY SKIN EXPERIENCE" : "BOOK YOUR LUXURY SPA EXPERIENCE"}
                      </span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </Link>
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
