import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs, ConsultationCTA } from "@/components/services/ServiceCTAs";

const skinServices = [
  {
    title: "Threading",
    services: [
      {
        name: "Eyebrow",
        men: true,
        women: true,
        kids: false,
        price: "₹200",
      },
      {
        name: "Side & Jawline",
        men: true,
        women: true,
        kids: false,
        price: "₹150",
      },
      {
        name: "Upperlip / Lowerlip / Chin / Nose",
        description: "Per area",
        men: false,
        women: true,
        kids: false,
        price: "₹100",
      },
      {
        name: "Forehead",
        men: true,
        women: true,
        kids: false,
        price: "₹100",
      },
      {
        name: "Full Face",
        men: true,
        women: true,
        kids: false,
        price: "₹400",
      },
    ],
  },
  {
    title: "Clean Ups",
    services: [
      {
        name: "Face Massage",
        description: "Relaxing facial massage to improve circulation",
        men: true,
        women: true,
        kids: false,
        price: "₹750",
      },
      {
        name: "Hydra Clean Up",
        description: "Deep hydrating clean-up for a refreshed glow",
        men: true,
        women: true,
        kids: false,
        price: "₹1,000",
      },
      {
        name: "Seaweed Clean Up",
        description: "Mineral-rich seaweed clean-up for nourished skin",
        men: true,
        women: true,
        kids: false,
        price: "₹1,250",
      },
      {
        name: "Lightening Clean Up",
        description: "Brightening clean-up for a radiant complexion",
        men: true,
        women: true,
        kids: false,
        price: "₹1,500",
      },
      {
        name: "DNA Clean Up",
        description: "Advanced DNA-based skin rejuvenation",
        men: true,
        women: true,
        kids: false,
        price: "₹2,000",
      },
      {
        name: "Mineral Express Clean Up",
        description: "Quick mineral-infused clean-up for busy schedules",
        men: true,
        women: true,
        kids: false,
        price: "₹2,500",
      },
    ],
  },
  {
    title: "Advanced Facial",
    services: [
      {
        name: "Lightening Facial",
        description: "Targeted brightening for an even skin tone",
        men: true,
        women: true,
        kids: false,
        price: "₹2,000",
      },
      {
        name: "Seaweed Facial",
        description: "Nutrient-rich facial with marine-based actives",
        men: true,
        women: true,
        kids: false,
        price: "₹2,500",
      },
      {
        name: "Whitening + C Pure Facial",
        description: "Vitamin C-infused whitening treatment for luminous skin",
        men: true,
        women: true,
        kids: false,
        price: "₹3,500",
      },
      {
        name: "Brightening Facial",
        description: "Multi-step brightening treatment for lasting glow",
        men: true,
        women: true,
        kids: false,
        price: "₹3,500",
      },
      {
        name: "DNA Facial",
        description: "Cutting-edge DNA facial for deep cellular renewal",
        men: true,
        women: true,
        kids: false,
        price: "₹4,000",
      },
      {
        name: "Mineral Facial",
        description: "Mineral-enriched facial for balanced, healthy skin",
        men: true,
        women: true,
        kids: false,
        price: "₹4,500",
      },
    ],
  },
  {
    title: "Luxurious Facial",
    services: [
      {
        name: "Sensitive Facial",
        description: "Gentle, calming treatment for sensitive skin types",
        men: true,
        women: true,
        kids: false,
        price: "₹5,000",
      },
      {
        name: "Precious Mineral Facial",
        description: "Premium mineral-infused luxury facial",
        men: true,
        women: true,
        kids: false,
        price: "₹7,000",
      },
      {
        name: "Nutrimoor Facial",
        description: "Ultimate nourishing facial with moor extracts",
        men: true,
        women: true,
        kids: false,
        price: "₹8,000",
      },
    ],
  },
];

const Skin = () => {
  return (
    <div>
      {/* Hero Section */}
      <ServiceHero serviceType="skin">
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
              SKIN CARE SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/80 mb-4">
              Rejuvenate your skin with our expert treatments designed for all skin types and concerns.
              Our licensed estheticians use premium products to reveal your healthiest, most radiant skin.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={skinServices} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-24 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-heading font-medium mb-6 text-foreground/90">
              SKIN CONSULTATION
            </h3>
            <p className="text-foreground/70 font-light mb-8 leading-relaxed">
              Our skin care experts will analyze your skin and recommend personalized treatments
              to address your specific concerns and help you achieve your skincare goals.
            </p>
            <ConsultationCTA
              onBookConsultation={() => {
                window.location.href = '/#contact';
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skin;
