import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, memo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Only resolve keys to prevent Vite from parsing raw JPGs
// This prevents build/parsing errors while supporting dynamic image additions.
const allImagesGlob = import.meta.glob('/public/images/gallery/**/*.{png,jpg,jpeg,webp,JPG,JPEG}');

// Extracted Memoized Image Component to prevent unnecessary re-renders
const GalleryImage = memo(({ src, alt, className, onClick }: { src: string, alt: string, className?: string, onClick?: () => void }) => (
    <div
        onClick={onClick}
        className={`relative overflow-hidden rounded-xl shadow-luxury border border-brand-gold/10 group cursor-pointer bg-foreground/5 ${className}`}
    >
        <div className="absolute inset-0 ring-1 ring-inset ring-brand-gold/0 group-hover:ring-brand-gold/30 transition-all duration-300 z-10 pointer-events-none rounded-xl" />
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
    </div>
));
GalleryImage.displayName = 'GalleryImage';

interface MomentsGalleryProps {
    folder?: string;
    title?: string;
    subtitle?: string;
    featuredImage?: string;
}

export default function MomentsGallery({
    folder = "celebrity",
    title = "Celebrity Moments at Blossom",
    subtitle = "Special visits, unforgettable experiences and moments that became part of our story.",
    featuredImage: customFeaturedImage
}: MomentsGalleryProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Extract all paths using useMemo to avoid recalculating strings
    const images = useMemo(() => {
        return Object.keys(allImagesGlob)
            .filter((path) => path.includes(`/${folder}/`))
            .map((path) => path.replace(/^\/public/, ''));
    }, [folder]);

    if (images.length === 0) return null;

    // Determine featured image
    const featuredImage = customFeaturedImage || images[0];

    // Exclude featured from grid pool
    const galleryPool = images.filter(img => img !== featuredImage);
    const gridImages = galleryPool.slice(0, 6); // Exactly 6 images for the right side
    const modalImages = images; // All images accessible in modal

    const openLightbox = (idx?: number) => {
        setCurrentImageIndex(idx ?? 0);
        setIsModalOpen(true);
    };

    const closeLightbox = () => setIsModalOpen(false);

    const nextLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
    };

    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
    };

    return (
        <section className="py-24 px-4 relative">
            {/* Restrained Luxury Background Effects - No continuous motion */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fcfaf7] via-[#f7f4eb]/60 to-[#fdfbf7] pointer-events-none" />
            <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(40_60%_70%/0.04),transparent_60%)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(35_40%_60%/0.03),transparent_60%)] blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10 w-full px-2 sm:px-6 lg:px-8">

                {/* EDITORIAL HEADER - Uses React Memo logic implicitly, runs once */}
                <div className="text-center w-full mb-16">
                    <div className="w-16 h-[1px] bg-brand-gold/40 mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground/90 uppercase tracking-[0.05em]">
                        {title}
                    </h2>
                    <p className="text-base md:text-lg text-foreground/60 font-light max-w-2xl mx-auto italic">
                        "{subtitle}"
                    </p>
                </div>

                {/* TWO COLUMN EDITORIAL LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-[45%_minmax(0,1fr)] gap-10 lg:gap-14">

                    {/* LEFT: FEATURED CARD (45% precise width in grid) */}
                    <div className="flex flex-col h-full">
                        <div
                            className="relative overflow-hidden rounded-[1.25rem] shadow-luxury border border-brand-gold/10 group cursor-pointer flex-grow bg-foreground/5 h-[600px] lg:h-full lg:min-h-[750px]"
                            onClick={() => openLightbox(images.indexOf(featuredImage))}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#261f1a]/70 via-black/5 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10 pointer-events-none" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-brand-gold/0 group-hover:ring-brand-gold/30 transition-all duration-300 rounded-[1.25rem] z-20 pointer-events-none" />

                            <img
                                src={featuredImage}
                                alt="Featured Moment"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            />

                            {/* Overlay Elements */}
                            <div className="absolute bottom-0 left-0 p-8 sm:p-10 z-20 flex flex-col gap-3 pointer-events-none group-hover:-translate-y-1 transition-transform duration-500">
                                <span className="bg-[#fcfaf7]/10 backdrop-blur-md border border-[#fcfaf7]/20 text-white text-[11px] tracking-[0.25em] uppercase px-5 py-2 rounded-full w-max shadow-sm">
                                    Celebrity Moments
                                </span>
                                <p className="text-white/95 font-light text-sm sm:text-base tracking-wide drop-shadow-md">
                                    Creating experiences beyond beauty.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: CURATED GRID (grid of 6, width approx 55%) */}
                    <div className="flex flex-col h-full justify-between gap-10">
                        {gridImages.length > 0 && (
                            <div className="grid grid-cols-2 gap-5 sm:gap-6">
                                {gridImages.map((img, idx) => (
                                    <GalleryImage
                                        key={`curated-${idx}`}
                                        src={img}
                                        alt={`Supporting Moment ${idx + 1}`}
                                        className="aspect-[4/3] sm:aspect-[4/3]"
                                        onClick={() => openLightbox(images.indexOf(img))}
                                    />
                                ))}
                            </div>
                        )}

                        {/* CTA BUTTON */}
                        {images.length > 7 && (
                            <div className="pt-2">
                                <Button
                                    onClick={() => openLightbox(0)}
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 tracking-[0.15em] text-sm font-semibold border-foreground/20 hover:bg-brand-rose hover:text-white hover:border-brand-rose transition-all duration-300 h-14"
                                >
                                    VIEW MORE MOMENTS
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* MINIMALIST LIGHTBOX MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Minimal controls fading in slightly after load */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white/40 hover:text-white transition-colors z-[110] p-3 rounded-full hover:bg-white/10"
                            aria-label="Close Gallery"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={prevLightboxImage}
                            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white hover:bg-white/10 transition-all rounded-full z-[110] p-3"
                            aria-label="Previous Image"
                        >
                            <ChevronLeft className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={nextLightboxImage}
                            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white hover:bg-white/10 transition-all rounded-full z-[110] p-3"
                            aria-label="Next Image"
                        >
                            <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                        </button>

                        <div
                            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center p-4 sm:p-12 pointer-events-none"
                        >
                            <img
                                src={modalImages[currentImageIndex]}
                                alt={`Gallery View ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm pointer-events-auto select-none"
                            />
                            <div className="absolute bottom-6 sm:bottom-8 text-white/40 text-xs sm:text-sm tracking-[0.3em] font-medium pointer-events-none">
                                {currentImageIndex + 1} / {modalImages.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
