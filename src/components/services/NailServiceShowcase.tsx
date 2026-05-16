import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const showcaseServices = [
    {
        image: "/images/services/NAILS/french chrome.png",
        title: "French Chrome Nails",
        description:
            "Sleek French tips with a stunning chrome finish for a modern, high-shine look",
        badge: "Trending",
    },
    {
        image: "/images/services/NAILS/manicure.png",
        title: "Luxury Manicure",
        description:
            "Complete hand pampering with cuticle care, exfoliation and a flawless polish finish",
        badge: "Most Popular",
    },
    {
        image: "/images/services/NAILS/nail art.png",
        title: "Creative Nail Art",
        description:
            "Custom hand-painted designs and embellishments for truly unique nails",
        badge: "Signature",
    },
    {
        image: "/images/services/NAILS/pedicure.png",
        title: "Luxury Pedicure",
        description:
            "Indulge in a relaxing foot spa with deep exfoliation, cuticle care and a pristine polish finish",
        badge: null,
    },
];

const AUTOPLAY_INTERVAL = 5000;

export default function NailServiceShowcase() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback(
        (index: number) => {
            setDirection(index > current ? 1 : -1);
            setCurrent(index);
            setProgress(0);
        },
        [current]
    );

    const goNext = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % showcaseServices.length);
        setProgress(0);
    }, []);

    const goPrev = useCallback(() => {
        setDirection(-1);
        setCurrent(
            (prev) =>
                (prev - 1 + showcaseServices.length) % showcaseServices.length
        );
        setProgress(0);
    }, []);

    // Progress bar + auto-advance
    useEffect(() => {
        if (isPaused) {
            if (progressInterval.current) clearInterval(progressInterval.current);
            return;
        }

        const tick = 30; // ms per frame
        progressInterval.current = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (tick / AUTOPLAY_INTERVAL) * 100;
                if (next >= 100) {
                    goNext();
                    return 0;
                }
                return next;
            });
        }, tick);

        return () => {
            if (progressInterval.current) clearInterval(progressInterval.current);
        };
    }, [isPaused, goNext]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [goNext, goPrev]);

    // Touch/swipe support
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) goNext();
        if (touchStart - touchEnd < -50) goPrev();
    };

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? "60%" : "-60%",
            opacity: 0,
            scale: 1.04,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 200, damping: 28 },
                opacity: { duration: 0.5, ease: "easeOut" as const },
                scale: { duration: 0.6, ease: "easeOut" as const },
            },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? "-40%" : "40%",
            opacity: 0,
            scale: 0.96,
            transition: {
                x: { type: "spring" as const, stiffness: 200, damping: 28 },
                opacity: { duration: 0.35 },
            },
        }),
    };

    const service = showcaseServices[current];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-20"
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-gold mb-4"
                >
                    Curated Collection
                </motion.span>
                <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-foreground/90 uppercase"
                >
                    Signature Nail Experiences
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-foreground/60 font-light mt-3 max-w-xl mx-auto"
                >
                    Explore our curated collection of premium nail care services
                </motion.p>
                <div className="w-16 brand-divider mx-auto mt-6"></div>
            </div>

            {/* Carousel Container */}
            <div
                className="relative w-full max-w-5xl mx-auto"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                role="region"
                aria-label="Signature nail services showcase"
                aria-roledescription="carousel"
            >
                {/* Main Carousel */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0"
                        >
                            {/* Image with Ken Burns effect */}
                            <motion.img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                initial={{ scale: 1 }}
                                animate={{
                                    scale: 1.08,
                                    transition: {
                                        duration: AUTOPLAY_INTERVAL / 1000 + 0.5,
                                        ease: "linear",
                                    },
                                }}
                            />

                            {/* Multi-layer gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                            {/* Badge */}
                            {service.badge && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className="absolute top-5 right-5 z-10"
                                >
                                    <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-full">
                                        {service.badge}
                                    </span>
                                </motion.div>
                            )}

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                                {/* Slide counter */}
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15, duration: 0.4 }}
                                    className="inline-block text-white/40 text-xs tracking-[0.2em] uppercase font-medium mb-3"
                                >
                                    {String(current + 1).padStart(2, "0")} /{" "}
                                    {String(showcaseServices.length).padStart(2, "0")}
                                </motion.span>

                                <motion.h4
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 tracking-wide"
                                >
                                    {service.title}
                                </motion.h4>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                    className="text-white/75 font-light text-sm sm:text-base md:text-lg max-w-lg leading-relaxed"
                                >
                                    {service.description}
                                </motion.p>

                                {/* Progress bar */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-5 h-[2px] w-full max-w-xs bg-white/10 rounded-full overflow-hidden"
                                >
                                    <div
                                        className="h-full rounded-full transition-none"
                                        style={{
                                            width: `${progress}%`,
                                            background:
                                                "linear-gradient(90deg, hsl(40 47% 56%), hsl(344 64% 50%))",
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goPrev}
                        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/25 hover:text-white transition-all duration-300 hover:scale-110 group"
                        aria-label="Previous service"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
                    </button>
                    <button
                        onClick={goNext}
                        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:bg-white/25 hover:text-white transition-all duration-300 hover:scale-110 group"
                        aria-label="Next service"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                </div>

                {/* Thumbnail Navigation with labels */}
                <div className="hidden sm:flex justify-center gap-4 mt-8">
                    {showcaseServices.map((svc, index) => {
                        const isActive = index === current;
                        return (
                            <button
                                key={index}
                                onClick={() => goTo(index)}
                                className={`group relative overflow-hidden rounded-xl transition-all duration-500 flex flex-col items-center ${isActive
                                    ? "scale-105 shadow-xl"
                                    : "opacity-50 hover:opacity-80 hover:scale-[1.02]"
                                    }`}
                                aria-label={`View ${svc.title}`}
                                aria-current={isActive ? "true" : "false"}
                            >
                                {/* Thumbnail image */}
                                <div
                                    className={`w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-xl border-2 transition-all duration-500 ${isActive
                                        ? "border-brand-gold shadow-lg"
                                        : "border-transparent group-hover:border-foreground/20"
                                        }`}
                                >
                                    <img
                                        src={svc.image}
                                        alt={svc.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-110" : "group-hover:scale-110"
                                            }`}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Thumbnail title */}
                                <span
                                    className={`mt-2 text-[10px] md:text-xs font-medium tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${isActive
                                        ? "text-brand-gold"
                                        : "text-foreground/40 group-hover:text-foreground/60"
                                        }`}
                                >
                                    {svc.title}
                                </span>

                                {/* Active progress indicator */}
                                {isActive && (
                                    <div className="w-full h-[2px] bg-foreground/5 rounded-full overflow-hidden mt-1.5">
                                        <div
                                            className="h-full rounded-full transition-none"
                                            style={{
                                                width: `${progress}%`,
                                                background:
                                                    "linear-gradient(90deg, hsl(40 47% 56%), hsl(344 64% 50%))",
                                            }}
                                        />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile dot indicators */}
                <div className="flex justify-center gap-2 mt-6 sm:hidden">
                    {showcaseServices.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`h-2 rounded-full transition-all duration-400 ${index === current
                                ? "bg-brand-gold w-8"
                                : "bg-foreground/15 w-2 hover:bg-foreground/30"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
