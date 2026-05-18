import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs } from "@/components/services/ServiceCTAs";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";
import HairServiceShowcase from "@/components/services/HairServiceShowcase";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero serviceType="hair">
        <ServiceCTAs
          title="BOOK YOUR LUXURY HAIR EXPERIENCE"
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
      <section id="services" className="py-12 md:py-20 px-4 bg-luxury relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse,hsl(40_60%_70%/0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20"
          >
            <h2 className="section-heading-luxury">
              HAIR SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/70 mb-4">
              Experience luxury hair services at Blossom Salon & Academy in Andheri West, Mumbai. From
              precision haircuts and glossy blow-dries to keratin, smoothening, hair spa and premium hair
              colour, our expert stylists create personalised looks designed to elevate your confidence and
              style.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          <HairServiceShowcase />

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={hairServices} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbf7]/90 to-[#f5f2eb]/40 pointer-events-none z-[-1]" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(40_60%_70%/0.04),transparent_60%)] blur-3xl pointer-events-none z-[-1]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(30_20%_50%/0.02),transparent_60%)] blur-3xl pointer-events-none z-[-1]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none z-[-1]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-8"
          />
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-wide text-foreground/90 uppercase"
          >
            READY FOR YOUR <span className="text-brand-gold">HAIR TRANSFORMATION</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm md:text-base font-light text-foreground/60 max-w-2xl mx-auto tracking-[0.1em] uppercase mb-10"
          >
            Experience glossy finishes, luxury blow-dries, smoothening, balayage and personalised hair
            services designed to elevate your style and confidence.

            At Blossom Salon & Academy in Andheri West, Mumbai, our expert stylists create premium hair
            experiences tailored for modern elegance and long-lasting beauty.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#b89552] via-[#d4b977] to-[#b89552] hover:bg-gradient-to-br text-[#1A1A1A] px-8 py-3.5 text-[0.9rem] font-semibold tracking-wider transition-all duration-300 shadow-md rounded-sm transform hover:scale-105 border-0 hover:text-[#1A1A1A] h-auto uppercase"
              onClick={() => { window.location.href = '/#contact'; }}
            >
              <span className="flex items-center gap-2">
                BOOK YOUR HAIR EXPERIENCE
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              'Premium Hair Products',
              'Expert Hair Stylists',
              'Luxury Salon Experience',
              'Trusted in Andheri West',
            ].map((label) => (
              <div key={label} className="trust-badge">
                <Gem className="trust-badge-icon" />
                <span className="trust-badge-text">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hair;
