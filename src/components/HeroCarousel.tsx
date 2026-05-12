import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-3xl w-full"
              >
                <motion.h1
                  className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-heading tracking-tight ${slide.textColor} text-center md:text-left`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  aria-live="polite"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl ${slide.textColor} font-light leading-relaxed text-center md:text-left`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Link
                    to={slide.link}
                    className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 transform min-h-[44px] flex items-center"
                    aria-label={`Discover more about ${slide.title}`}
                  >
                    Discover More
                  </Link>
                </motion.div>
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
