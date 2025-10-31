import { motion } from "framer-motion";
// High-quality nail service image from Pexels
const heroNails = 'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';
import PremiumServiceTable from "@/components/services/PremiumServiceTable";

const nailServices = [
  {
    title: "Manicures",
    services: [
      {
        name: "Classic Manicure",
        description: "Traditional nail care with cuticle treatment and polish",
        men: true,
        women: true,
        kids: "12+",
        products: [
          { name: "Cuticle Oil", brand: "CND", description: "Nourishing oil for healthy cuticles" },
          { name: "Nail Polish", brand: "OPI", description: "Wide range of classic colors" },
          { name: "Hand Cream", brand: "Aveda", description: "Rich moisturizer for soft hands" }
        ]
      },
      {
        name: "Gel Manicure",
        description: "Long-lasting gel polish with superior shine and durability",
        men: true,
        women: true,
        kids: "16+",
        products: [
          { name: "Gel Polish", brand: "CND Shellac", description: "Professional gel polish system" },
          { name: "LED/UV Lamp", brand: "Gelish", description: "Fast-curing lamp for gel polish" },
          { name: "Gel Remover", brand: "CND", description: "Gentle gel polish remover" }
        ]
      },
      {
        name: "Express Manicure",
        description: "Quick nail care for busy individuals",
        men: true,
        women: true,
        kids: true,
        products: [
          { name: "Quick Dry Polish", brand: "Essie", description: "Fast-drying nail polish" },
          { name: "Nail Wipes", brand: "Sally Hansen", description: "Quick cleanup wipes" },
          { name: "Cuticle Pusher", brand: "Tweezerman", description: "Precision cuticle tool" }
        ]
      }
    ]
  },
  {
    title: "Pedicures",
    services: [
      {
        name: "Luxury Pedicure",
        description: "Complete foot care with exfoliation and massage",
        men: true,
        women: true,
        kids: "12+",
        products: [
          { name: "Foot Scrub", brand: "Tula", description: "Exfoliating scrub for smooth feet" },
          { name: "Callus Remover", brand: "Baby Foot", description: "Gentle callus treatment" },
          { name: "Peppermint Lotion", brand: "The Body Shop", description: "Refreshing foot cream" }
        ]
      },
      {
        name: "Spa Pedicure",
        description: "Ultimate relaxation with extended massage and mask",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Paraffin Wax", brand: "Therabath", description: "Deep moisturizing treatment" },
          { name: "Hydrating Mask", brand: "Patchology", description: "Booties with intense hydration" },
          { name: "Massage Oil", brand: "Aveda", description: "Aromatherapy foot massage oil" }
        ]
      },
      {
        name: "Express Pedicure",
        description: "Basic foot care and polish",
        men: true,
        women: true,
        kids: true
      }
    ]
  },
  {
    title: "Nail Enhancements",
    services: [
      {
        name: "Nail Extensions",
        description: "Acrylic or gel extensions for added length",
        men: false,
        women: true,
        kids: false
      },
      {
        name: "Nail Art & Design",
        description: "Custom designs and nail art",
        men: false,
        women: true,
        kids: true
      },
      {
        name: "Nail Repair",
        description: "Professional repair for damaged nails",
        men: true,
        women: true,
        kids: true
      }
    ]
  }
];

const Nails = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroNails}
          alt="Nail Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background text-center px-4"
          >
            NAIL PERFECTION
          </motion.h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground/90">
              NAIL CARE SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/80 mb-4">
              Experience the perfect blend of precision and artistry with our comprehensive nail services.
              Our skilled technicians use premium products to keep your hands and feet looking their best.
            </p>
            <div className="w-24 h-0.5 bg-foreground/20 mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={nailServices} />
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
