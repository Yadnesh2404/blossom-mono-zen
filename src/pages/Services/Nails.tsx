import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs, ConsultationCTA } from "@/components/services/ServiceCTAs";

const nailServices = [
  {
    title: "Nail Studio",
    services: [
      {
        name: "Nail Cut / File",
        description: "Basic nail shaping and filing",
        men: true,
        women: true,
        kids: true,
        price: "₹200",
      },
      {
        name: "Regular Polish",
        description: "Classic nail polish application",
        men: false,
        women: true,
        kids: true,
        price: "₹150",
      },
      {
        name: "Regular French Polish",
        description: "Elegant French-tip polish finish",
        men: false,
        women: true,
        kids: false,
        price: "₹600",
      },
      {
        name: "Gel Top Coat",
        description: "High-shine gel top coat for lasting wear",
        men: false,
        women: true,
        kids: false,
        price: "₹400",
      },
      {
        name: "Plain Gel Polish",
        description: "Long-lasting gel polish in your choice of colour",
        men: false,
        women: true,
        kids: false,
        price: "₹900",
      },
      {
        name: "Glitter / French Gel",
        description: "Sparkling glitter or French gel finish",
        men: false,
        women: true,
        kids: false,
        price: "₹1,200",
      },
      {
        name: "Chrome / Cat Eye",
        description: "Trendy chrome or cat-eye gel effect",
        men: false,
        women: true,
        kids: false,
        price: "₹1,800",
      },
      {
        name: "Ombre Polish",
        description: "Gradient ombre nail art",
        men: false,
        women: true,
        kids: false,
        price: "₹2,000",
      },
      {
        name: "Creative Nail Art",
        description: "Custom hand-painted nail art designs",
        men: false,
        women: true,
        kids: false,
        price: "₹1,500",
      },
    ],
  },
  {
    title: "Manicure",
    services: [
      {
        name: "Signature",
        description: "Classic manicure with cuticle care and polish",
        men: true,
        women: true,
        kids: false,
        price: "₹500",
      },
      {
        name: "AVL",
        description: "AVL manicure with premium products",
        men: true,
        women: true,
        kids: false,
        price: "₹800",
      },
      {
        name: "Sugar",
        description: "Sugar scrub manicure for smooth, soft hands",
        men: true,
        women: true,
        kids: false,
        price: "₹1,500",
      },
      {
        name: "Icecream / Candle",
        description: "Indulgent spa manicure with unique treatments",
        men: true,
        women: true,
        kids: false,
        price: "₹1,700",
      },
      {
        name: "Mineral",
        description: "Luxury mineral-infused manicure",
        men: true,
        women: true,
        kids: false,
        price: "₹2,200",
      },
    ],
  },
  {
    title: "Pedicure",
    services: [
      {
        name: "Signature",
        description: "Essential pedicure with nail care and polish",
        men: true,
        women: true,
        kids: false,
        price: "₹750",
      },
      {
        name: "AVL",
        description: "AVL pedicure with premium foot care",
        men: true,
        women: true,
        kids: false,
        price: "₹1,000",
      },
      {
        name: "Sugar",
        description: "Sugar scrub pedicure for baby-soft feet",
        men: true,
        women: true,
        kids: false,
        price: "₹1,800",
      },
      {
        name: "Icecream / Candle",
        description: "Indulgent spa pedicure with unique treatments",
        men: true,
        women: true,
        kids: false,
        price: "₹2,000",
      },
      {
        name: "Mineral",
        description: "Luxury mineral-infused pedicure",
        men: true,
        women: true,
        kids: false,
        price: "₹2,800",
      },
    ],
  },
];

const Nails = () => {
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero serviceType="nails">
        <ServiceCTAs
          onViewServices={() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          onBookNow={() => {
            window.location.href = '/#contact';
          }}
        />
      </ServiceHero>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-background/50">
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
            <div className="w-24 brand-divider mx-auto mt-8"></div>
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
