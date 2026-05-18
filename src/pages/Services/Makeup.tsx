import { motion } from "framer-motion";
import PremiumServiceTable from "@/components/services/PremiumServiceTable";
import ServiceHero from "@/components/services/ServiceHero";
import { ServiceCTAs } from "@/components/services/ServiceCTAs";
import { Gem } from "lucide-react";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero serviceType="makeup">
        <ServiceCTAs
          title="BOOK YOUR LUXURY MAKEUP EXPERIENCE"
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
            className="text-center mb-20"
          >
            <h2 className="section-heading-luxury">
              MAKEUP SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/70 mb-4">
              Our professional makeup artists create looks that enhance your natural beauty,
              whether you're seeking subtle elegance or dramatic glamour for any occasion.
            </p>
            <div className="w-24 brand-divider mx-auto mt-8"></div>
          </motion.div>

          {/* Premium Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-16 md:mb-24 max-w-5xl mx-auto px-4 sm:px-0"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground/90 uppercase tracking-wide">
                Our Signature Makeup Experiences
              </h3>
              <p className="text-base md:text-lg font-light text-foreground/70 max-w-2xl mx-auto">
                From bridal elegance to glamorous party looks, crafted for every special moment.
              </p>
            </div>
            
            <div className="relative rounded-2xl p-2 md:p-3 bg-gradient-to-br from-[#fdfbf7] to-[#f5f2eb] shadow-[0_10px_40px_rgba(184,149,82,0.08)] border border-brand-gold/10">
              {/* Soft ambient glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold/10 via-transparent to-brand-gold/10 blur-xl z-[-1] rounded-3xl" />
              
              <div className="relative rounded-xl overflow-hidden border border-black/5 bg-white">
                <img
                  src="/images/services/MAKEUP/makeup-visual-card.jpg"
                  alt="Signature Makeup Experiences"
                  className="w-full h-auto object-contain rounded-xl block" 
                />
              </div>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <PremiumServiceTable categories={makeupServices} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-16 md:mt-24 text-center max-w-3xl mx-auto"
          >
            <div className="luxury-accent-line mx-auto mb-8"></div>
            <h3 className="text-2xl font-heading font-bold mb-6 text-foreground/85">
              BOOK YOUR MAKEUP EXPERIENCE
            </h3>
            <p className="text-foreground/60 font-light mb-8 leading-relaxed">
              Experience luxury makeup services at Blossom Salon & Academy in Andheri West, Mumbai.
              From bridal and engagement makeup to party glam and soft elegant looks, our expert makeup
              artists create personalised beauty experiences designed for flawless finishes and timeless
              confidence.
            </p>

          </motion.div>
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
            YOUR PERFECT <span className="text-brand-gold">LOOK</span> STARTS HERE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm md:text-base font-light text-foreground/60 max-w-2xl mx-auto tracking-[0.1em] uppercase mb-10"
          >
            Premium bridal, engagement, party glam and HD makeup services crafted to make every
            moment unforgettable.
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
                BOOK YOUR MAKEUP EXPERIENCE
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
              'Premium Makeup Products',
              'Expert Makeup Artists',
              'Luxury Beauty Experience',
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

export default Makeup;
