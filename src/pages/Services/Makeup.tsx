import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs, ConsultationCTA } from "@/components/services/ServiceCTAs";

const makeupServices = [
  {
    title: "Makeup",
    services: [
      {
        name: "Basic Makeup",
        description: "Clean, polished look for everyday occasions",
        men: false,
        women: true,
        kids: false,
        price: "₹1,500",
      },
      {
        name: "Party Makeup",
        description: "Glamorous makeup perfect for events and celebrations",
        men: false,
        women: true,
        kids: false,
        price: "₹3,500",
      },
      {
        name: "Bridal Makeup",
        description: "Flawless, long-lasting bridal look for your special day",
        men: false,
        women: true,
        kids: false,
        price: "₹15,000 onwards",
      },
    ],
  },
];

const Makeup = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero serviceType="makeup">
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
              MAKEUP SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/80 mb-4">
              Our professional makeup artists create looks that enhance your natural beauty,
              whether you're seeking subtle elegance or dramatic glamour for any occasion.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={makeupServices} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-24 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-heading font-medium mb-6 text-foreground/90">
              BOOK YOUR MAKEUP APPOINTMENT
            </h3>
            <p className="text-foreground/70 font-light mb-8 leading-relaxed">
              Our professional makeup artists are ready to create your perfect look.
              Book a consultation to discuss your vision and preferences.
            </p>
            <ConsultationCTA
              onBookConsultation={() => {
                window.location.href = '/#contact';
              }}
            />
          </motion.div>
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
