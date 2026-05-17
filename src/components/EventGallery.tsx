import { motion } from "framer-motion";

const images = [
    "/images/gallery/image-1.JPG",
    "/images/gallery/image-2.JPG",
    "/images/gallery/image-3.JPG",
    "/images/gallery/image-4.jpg",
];

export default function EventGallery() {
    return (
        <section className="py-24 px-4 bg-luxury-glow relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse,hsl(40_60%_70%/0.05),transparent)] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="w-24 brand-divider mx-auto mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">
                        BLOSSOM <span className="text-brand-gold">EVENTS</span>
                    </h2>
                    <p className="text-lg leading-relaxed mb-6 font-light text-foreground/60 max-w-2xl mx-auto">
                        A glimpse into the magical moments, exclusive sessions, and beautiful lifestyle events hosted at Blossom Salon & Academy.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px] lg:h-[700px]">
                    {/* Large Main Image (Spans 2 cols, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group border border-brand-gold/10 h-[300px] md:h-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/5 transition-all duration-500 z-10" />
                        <img
                            src={images[0]}
                            alt="Event highlight 1"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Tall Image (Spans 1 col, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group border border-brand-gold/10 h-[300px] md:h-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/5 transition-all duration-500 z-10" />
                        <img
                            src={images[1]}
                            alt="Event highlight 2"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Small Top Image (Spans 1 col, 1 row) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl shadow-lg group border border-brand-gold/10 h-[200px] md:h-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/5 transition-all duration-500 z-10" />
                        <img
                            src={images[2]}
                            alt="Event highlight 3"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Small Bottom Image (Spans 1 col, 1 row) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-2xl shadow-lg group border border-brand-gold/10 h-[200px] md:h-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/5 transition-all duration-500 z-10" />
                        <img
                            src={images[3]}
                            alt="Event highlight 4"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
