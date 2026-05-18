import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs } from "@/components/services/ServiceCTAs";
import NailServiceShowcase from "@/components/services/NailServiceShowcase";
import { Gem } from "lucide-react";

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
          title="BOOK YOUR LUXURY NAIL EXPERIENCE"
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
            className="text-center mb-6"
          >
            <h2 className="section-heading-luxury">
              NAIL CARE SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/70 mb-4">
              Premium manicure, pedicure, nail extensions, gel polish and luxury nail care services in Andheri
              West, Mumbai. Experience elegant nail artistry, premium hygiene and personalised beauty care
              designed to leave your hands and feet looking polished, stylish and beautifully maintained.
              At Blossom Salon & Academy, our expert nail artists specialise in modern nail designs, classic
              manicures, spa pedicures and long-lasting gel finishes using trusted premium products in a
              relaxing luxury salon environment.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          <NailServiceShowcase />

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={nailServices} />
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
            LUXURY <span className="text-brand-gold">NAIL EXPERIENCES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm md:text-base font-light text-foreground/60 max-w-2xl mx-auto tracking-[0.1em] uppercase mb-10"
          >
            Indulge in premium manicure, pedicure, nail art and gel polish services designed for elegance,
            beauty and long-lasting perfection. Experience luxury nail care in a relaxing salon environment
            in Andheri West, Mumbai.
          </motion.p>


          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              'Premium Hygiene Standards',
              'Expert Nail Artists',
              'Luxury Nail Studio',
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

export default Nails;
