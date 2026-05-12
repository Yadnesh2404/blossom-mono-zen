import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs, ConsultationCTA } from "@/components/services/ServiceCTAs";

const hairServices = [
  {
    title: "Hair Services — Men",
    services: [
      {
        name: "Hair Cut (Master Stylist)",
        description: "Precision cut by our master-level stylist",
        men: true,
        women: false,
        kids: false,
        price: "₹1,500",
      },
      {
        name: "Hair Cut (Sr. Stylist)",
        description: "Expert cut by our senior stylist",
        men: true,
        women: false,
        kids: false,
        price: "₹2,000",
      },
      {
        name: "Beard Crafting",
        description: "Precision beard shaping and sculpting",
        men: true,
        women: false,
        kids: false,
        price: "₹600",
      },
      {
        name: "Hair Wash + Styling",
        description: "Refreshing wash with professional styling",
        men: true,
        women: false,
        kids: false,
        price: "₹500",
      },
      {
        name: "Beard Clean Shave",
        description: "Classic clean shave with hot towel finish",
        men: true,
        women: false,
        kids: false,
        price: "₹500",
      },
      {
        name: "Steam Shave",
        description: "Luxury steam shave for the smoothest finish",
        men: true,
        women: false,
        kids: false,
        price: "₹2,000",
      },
    ],
  },
  {
    title: "Colour for Men",
    services: [
      {
        name: "Moustache / Side Locks",
        description: "Targeted colour for moustache or side locks",
        men: true,
        women: false,
        kids: false,
        price: "₹500",
      },
      {
        name: "Beard Colour",
        description: "Full beard colour for a refined look",
        men: true,
        women: false,
        kids: false,
        price: "₹1,000",
      },
      {
        name: "Touch Up",
        description: "Root touch-up colour to cover greys",
        men: true,
        women: false,
        kids: false,
        price: "₹1,800 onwards",
      },
      {
        name: "Global Colour",
        description: "Complete head-to-tip colour transformation",
        men: true,
        women: false,
        kids: false,
        price: "₹2,500 onwards",
      },
      {
        name: "Highlights",
        description: "Dimensional highlights for added texture",
        men: true,
        women: false,
        kids: false,
        price: "₹3,000 onwards",
      },
    ],
  },
  {
    title: "Hair Rituals",
    services: [
      {
        name: "Head Massage (30 mins)",
        description: "Relaxing therapeutic head massage",
        men: true,
        women: true,
        kids: false,
        price: "₹800",
      },
      {
        name: "Head Massage with Wash",
        description: "Soothing massage followed by a revitalising wash",
        men: true,
        women: true,
        kids: false,
        price: "₹1,200",
      },
      {
        name: "Loreal Hair Spa",
        description: "Deep conditioning spa treatment with L'Oréal products",
        men: true,
        women: true,
        kids: false,
        price: "₹1,500",
        products: [
          { name: "Hair Spa Cream", brand: "L'Oréal Professionnel", description: "Deep nourishing treatment" },
        ],
      },
      {
        name: "Moroccan Spa",
        description: "Restorative spa infused with Moroccan argan oil",
        men: true,
        women: true,
        kids: false,
        price: "₹2,000",
        products: [
          { name: "Argan Oil Treatment", brand: "Moroccanoil", description: "Rich hydration and shine" },
        ],
      },
      {
        name: "Scalp Treatment",
        description: "Therapeutic treatment targeting scalp health",
        men: true,
        women: true,
        kids: false,
        price: "₹1,200",
      },
    ],
  },
  {
    title: "Hair Treatments",
    services: [
      {
        name: "Keratin",
        description: "Smoothing keratin treatment for frizz-free hair",
        men: true,
        women: true,
        kids: false,
        price: "₹3,000",
      },
      {
        name: "QOD Cysteine",
        description: "Advanced cysteine-based smoothing treatment",
        men: true,
        women: true,
        kids: false,
        price: "₹3,000",
      },
      {
        name: "Botox",
        description: "Hair botox for deep repair and rejuvenation",
        men: true,
        women: true,
        kids: false,
        price: "₹3,500",
      },
    ],
  },
  {
    title: "Wax for Men",
    services: [
      {
        name: "Forehead",
        men: true,
        women: false,
        kids: false,
        price: "₹250",
      },
      {
        name: "Side & Jawline",
        men: true,
        women: false,
        kids: false,
        price: "₹300",
      },
      {
        name: "Full Face",
        men: true,
        women: false,
        kids: false,
        price: "₹650",
      },
      {
        name: "Underarms",
        men: true,
        women: false,
        kids: false,
        price: "₹350",
      },
      {
        name: "Full Arms / Stomach",
        men: true,
        women: false,
        kids: false,
        price: "₹750",
      },
      {
        name: "Full Arms & Underarms",
        men: true,
        women: false,
        kids: false,
        price: "₹1,000",
      },
      {
        name: "Half Legs Front/Back",
        men: true,
        women: false,
        kids: false,
        price: "₹750",
      },
      {
        name: "Full Legs Front/Back",
        men: true,
        women: false,
        kids: false,
        price: "₹1,000",
      },
      {
        name: "Full Body",
        men: true,
        women: false,
        kids: false,
        price: "₹5,000",
      },
    ],
  },
];

const Hair = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServiceHero serviceType="hair">
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
              HAIR SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/80 mb-4">
              Experience the perfect blend of artistry and precision with our comprehensive hair services.
              Our expert stylists are dedicated to enhancing your natural beauty with personalized care.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={hairServices} />
          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-24 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-heading font-medium mb-6 text-foreground/90">
              PERSONALIZED CONSULTATION
            </h3>
            <p className="text-foreground/70 font-light mb-8 leading-relaxed">
              Our expert stylists are here to help you achieve your perfect look.
              Schedule a complimentary consultation to discuss your hair goals and
              receive personalized recommendations tailored to your unique style.
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
            READY FOR YOUR TRANSFORMATION?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed mb-8 font-light"
          >
            Book your appointment today and experience the Blossom difference.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hair;
