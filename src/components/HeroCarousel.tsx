import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroHair from "@/assets/hero-hair.jpg";
import heroNails from "@/assets/hero-nails.jpg";
import heroMakeup from "@/assets/hero-makeup.jpg";

const slides = [
  {
    image: heroHair,
    title: "HAIR ARTISTRY",
    description: "Precision cuts and stunning styles",
    link: "/services/hair",
  },
  {
    image: heroNails,
    title: "NAIL PERFECTION",
    description: "Elegant manicures and pedicures",
    link: "/services/nails",
  },
  {
    image: heroMakeup,
    title: "MAKEUP EXCELLENCE",
    description: "Flawless beauty, expertly crafted",
    link: "/services/makeup",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-foreground">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Link to={slides[currentSlide].link} className="block h-full w-full">
            <div className="relative h-full w-full">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="h-full w-full object-cover grayscale"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/20" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-background px-4">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-heading font-bold mb-4"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg md:text-xl font-light tracking-wide"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 bg-background/10 hover:bg-background/20 backdrop-blur-sm border border-background/50 transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-background" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 bg-background/10 hover:bg-background/20 backdrop-blur-sm border border-background/50 transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-background" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all ${
              currentSlide === index ? "w-8 bg-background" : "w-2 bg-background/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
