import { motion } from "framer-motion";
import heroMakeup from "@/assets/hero-makeup.jpg";

const services = [
  { 
    name: "Bridal Makeup", 
    description: "Flawless, long-lasting makeup for your special day",
    for: "Women",
    products: "High-definition, professional makeup"
  },
  { 
    name: "Special Event Makeup", 
    description: "Glamorous looks for parties, galas, and celebrations",
    for: "Women"
  },
  { 
    name: "Photoshoot Makeup", 
    description: "Camera-ready makeup for professional shoots",
    for: "Women / Men",
    products: "HD makeup products"
  },
  { 
    name: "Natural/Everyday Makeup", 
    description: "Subtle enhancement for daily confidence",
    for: "Women"
  },
  { 
    name: "Makeup Lessons", 
    description: "Learn professional techniques tailored to your features",
    for: "Women"
  },
  { 
    name: "Men's Grooming Makeup", 
    description: "Subtle coverage and enhancement for professional appearances",
    for: "Men"
  },
];

const Makeup = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroMakeup}
          alt="Makeup Services"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background"
          >
            MAKEUP EXCELLENCE
          </motion.h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              ARTISTRY MEETS BEAUTY
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light">
              Our makeup artists create looks that enhance your natural beauty, 
              whether you're seeking subtle elegance or dramatic glamour.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-foreground pb-12 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-3">
                      {service.name}
                    </h3>
                    <p className="text-base leading-relaxed mb-2 font-light">
                      {service.description}
                    </p>
                    {service.products && (
                      <p className="text-sm opacity-60 italic">
                        Using {service.products}
                      </p>
                    )}
                  </div>
                  <div className="md:text-right">
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {service.for}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-6"
          >
            UNVEIL YOUR BEST SELF
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed mb-8 font-light"
          >
            Book your makeup consultation and let us create your perfect look.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Makeup;
