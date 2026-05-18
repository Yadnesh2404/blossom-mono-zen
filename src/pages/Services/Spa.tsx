import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs } from "@/components/services/ServiceCTAs";
import { Gem, Flame, Flower2, Droplets } from "lucide-react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero serviceType="spa">
        <ServiceCTAs
          title="BOOK YOUR LUXURY SPA EXPERIENCE"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="section-heading-luxury">
              OUR SPA SERVICES
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed font-light text-foreground/70">
              Indulge in our luxurious spa treatments designed to rejuvenate your body,
              refresh your mind, and restore your spirit. Our expert therapists use only
              the finest products and techniques to ensure a truly transformative experience.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PremiumServiceTable categories={spaServices} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 relative overflow-hidden z-0">
        {/* Restrained luxury background: warm ivory, gentle candlelight blur, practically invisible */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbf7]/90 to-[#f5f2eb]/40 pointer-events-none z-[-1]" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(40_60%_70%/0.04),transparent_60%)] blur-3xl pointer-events-none z-[-1]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(30_20%_50%/0.02),transparent_60%)] blur-3xl pointer-events-none z-[-1]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none z-[-1]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-wide text-foreground/90 uppercase">
              EXPERIENCE THE ART OF <span className="text-brand-gold">WELLNESS</span>
            </h2>
            <p className="text-sm md:text-base font-light text-foreground/60 max-w-2xl mx-auto tracking-[0.1em] uppercase">
              Relax. Rejuvenate. Restore.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Relax. Rejuvenate. Restore.",
                Icon: Flame,
                description: "Reduce stress and anxiety through therapeutic treatments that promote deep relaxation and mental clarity."
              },
              {
                title: "Luxury Spa Benefits",
                Icon: Droplets,
                description: "Enhance blood flow and oxygen delivery throughout your body for better overall health."
              },
              {
                title: "The Art of Wellness",
                Icon: Flower2,
                description: "Eliminate toxins and impurities from your body through specialized treatments and therapies."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#fcfaf7] p-10 rounded-2xl text-center border border-brand-gold/10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-brand-gold/20 hover:shadow-[0_8px_30px_-12px_rgba(200,170,110,0.12)] hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="flex justify-center mb-6 relative z-10">
                  <benefit.Icon strokeWidth={1} className="w-7 h-7 text-brand-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3 text-foreground/85 relative z-10">{benefit.title}</h3>
                <p className="text-foreground/60 font-light text-sm md:text-base leading-relaxed relative z-10">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {[
              'Premium Hygiene Standards',
              'Expert Spa Therapists',
              'Luxury Wellness Experience',
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <Gem className="w-3.5 h-3.5 text-brand-gold/60" />
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-foreground/50">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Spa;
