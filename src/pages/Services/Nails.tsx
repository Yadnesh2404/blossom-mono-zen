import { motion } from "framer-motion";
import heroNails from "@/assets/hero-nails.jpg";

const services = [
  { 
    name: "Classic Manicure", 
    description: "Traditional nail care with polish application",
    for: "Women / Men"
  },
  { 
    name: "Gel Manicure", 
    description: "Long-lasting gel polish with superior shine",
    for: "Women",
    products: "Professional gel systems"
  },
  { 
    name: "Luxury Pedicure", 
    description: "Complete foot care with relaxing massage and polish",
    for: "Both"
  },
  { 
    name: "Nail Art & Design", 
    description: "Custom nail art for special occasions",
    for: "Women",
    products: "Premium nail art supplies"
  },
  { 
    name: "Nail Extensions", 
    description: "Acrylic or gel extensions for added length and strength",
    for: "Women"
  },
  { 
    name: "Express Manicure", 
    description: "Quick nail care for the busy professional",
    for: "Men / Women"
  },
];

const Nails = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroNails}
          alt="Nail Services"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background"
          >
            NAIL PERFECTION
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
              ELEGANCE AT YOUR FINGERTIPS
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light">
              From classic manicures to intricate nail art, our nail specialists 
              deliver impeccable results with meticulous attention to detail.
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
            TREAT YOUR HANDS & FEET
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed mb-8 font-light"
          >
            Book your nail appointment and indulge in luxury care.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Nails;
