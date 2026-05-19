import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs } from "@/components/services/ServiceCTAs";
import SkinServiceShowcase from "@/components/services/SkinServiceShowcase";
import { Gem } from "lucide-react";

const skinServices = [
  {
    title: "Threading",
    services: [
      {
        name: "Eyebrow",
        men: true,
        women: true,
        kids: false,
        price: "₹100",
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
          title="BOOK YOUR LUXURY SKIN EXPERIENCE"
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
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse,hsl(40_60%_70%/0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-6"
          >
            <h2 className="section-heading-luxury">
              SKIN CARE SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/70 mb-4">
              Experience premium skin care services at Blossom Salon & Academy in Andheri West, Mumbai.
              From glow facials and clean-ups to hydration care, beauty grooming and relaxing skin rituals,
              our expert team delivers personalised luxury experiences using trusted premium products in a
              calm and elegant environment.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          {/* Signature Treatments Showcase */}
          <SkinServiceShowcase />

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={skinServices} />
          </div>

          {/* Luxury Skin Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 md:mt-16 max-w-6xl mx-auto"
          >
            {/* Gold divider */}
            <div className="w-24 brand-divider mx-auto mb-12"></div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              {/* Text content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-gold mb-4"
                >
                  Personalised Care
                </motion.span>

                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-5 text-foreground/85 tracking-wide uppercase">
                  Luxury Skin Experience
                </h3>

                <div className="luxury-accent-line mx-auto lg:mx-0 mb-6"></div>

                <p className="text-foreground/60 font-light mb-8 leading-relaxed text-sm md:text-base max-w-xl mx-auto lg:mx-0">
                  Discover personalised skin care and glow rituals designed to refresh, nourish and enhance your
                  natural beauty. Our beauty experts help you choose the perfect facial and luxury skin care
                  experience based on your skin type, glow goals and self-care preferences — all in a relaxing
                  and elegant environment.
                </p>



                {/* Trust Signals */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                  {[
                    'Premium Hygiene',
                    'Expert Beauty Team',
                    'Trusted in Andheri West',
                  ].map((label) => (
                    <div key={label} className="trust-badge">
                      <Gem className="trust-badge-icon" />
                      <span className="trust-badge-text">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Luxury image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-full max-w-sm lg:w-[380px]"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-gold/15">
                  <img
                    src="/images/services/SKIN/luxury glow rituals.jpg"
                    alt="Luxury Glow Rituals at Blossom Salon"
                    className="w-full h-auto block object-contain"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skin;
