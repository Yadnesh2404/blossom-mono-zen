import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs, ConsultationCTA } from "@/components/services/ServiceCTAs";

const spaServices = [
  {
    title: "Massage",
    services: [
      {
        name: "Foot Massage (20 mins)",
        description: "Quick, rejuvenating foot massage",
        men: true,
        women: true,
        kids: false,
        price: "₹500",
      },
      {
        name: "Back Massage (30 mins)",
        description: "Targeted relief for back tension and knots",
        men: true,
        women: true,
        kids: false,
        price: "₹800",
      },
      {
        name: "Foot Reflexology",
        description: "Therapeutic pressure-point foot therapy",
        men: true,
        women: true,
        kids: false,
        price: "₹1,200",
      },
      {
        name: "Swedish Massage",
        description: "Classic full-body relaxation massage",
        men: true,
        women: true,
        kids: false,
        price: "₹2,500",
      },
      {
        name: "Aroma Massage",
        description: "Aromatherapy massage with essential oils",
        men: true,
        women: true,
        kids: false,
        price: "₹3,000",
      },
      {
        name: "Deep Tissue Massage",
        description: "Intensive massage for deep muscle relief",
        men: true,
        women: true,
        kids: false,
        price: "₹3,500",
      },
    ],
  },
];

const Spa = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero serviceType="spa">
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
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              OUR SPA SERVICES
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Indulge in our luxurious spa treatments designed to rejuvenate your body,
              refresh your mind, and restore your spirit. Our expert therapists use only
              the finest products and techniques to ensure a truly transformative experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PremiumServiceTable categories={spaServices} showBookButton={true} />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              BENEFITS OF SPA THERAPY
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Stress Relief",
                description: "Reduce stress and anxiety through therapeutic treatments that promote deep relaxation and mental clarity."
              },
              {
                title: "Improved Circulation",
                description: "Enhance blood flow and oxygen delivery throughout your body for better overall health."
              },
              {
                title: "Detoxification",
                description: "Eliminate toxins and impurities from your body through specialized treatments and therapies."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg shadow-sm border border-foreground/10"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">{benefit.title}</h3>
                <p className="text-foreground/80 font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spa;
