import { motion } from "framer-motion";
// High-quality skin treatment image from Pexels
const heroSkin = 'https://images.pexels.com/photos/6621344/pexels-photo-6621344.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';
import PremiumServiceTable from "@/components/services/PremiumServiceTable";

const skinServices = [
  {
    title: "Facials & Treatments",
    services: [
      {
        name: "Signature Facial",
        description: "Deep cleansing, exfoliation, and hydration for all skin types",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Cleanser", brand: "CeraVe", description: "Gentle foaming cleanser for all skin types" },
          { name: "Exfoliator", brand: "Dermalogica", description: "Daily microfoliant for smooth, radiant skin" },
          { name: "Hydrating Mask", brand: "Drunk Elephant", description: "Ultra-hydrating mask with vitamin E" }
        ]
      },
      {
        name: "Anti-Aging Facial",
        description: "Targeted treatment to reduce fine lines and improve elasticity",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Retinol Serum", brand: "SkinCeuticals", description: "Advanced anti-aging formula" },
          { name: "Peptide Complex", brand: "The Ordinary", description: "Boosts collagen production" },
          { name: "Hyaluronic Acid", brand: "The Inkey List", description: "Intense hydration plumping" }
        ]
      },
      {
        name: "Teen Facial",
        description: "Gentle treatment for young, acne-prone skin",
        men: true,
        women: true,
        kids: "12+",
        products: [
          { name: "Salicylic Acid Cleanser", brand: "La Roche-Posay", description: "Gentle yet effective acne treatment" },
          { name: "Tea Tree Oil", brand: "The Body Shop", description: "Natural antibacterial properties" },
          { name: "Oil-Free Moisturizer", brand: "Neutrogena", description: "Lightweight hydration without clogging pores" }
        ]
      }
    ]
  },
  {
    title: "Advanced Skin Solutions",
    services: [
      {
        name: "Chemical Peels",
        description: "Professional exfoliation for smoother, brighter skin",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Glycolic Acid Solution", brand: "The Ordinary", description: "30% AHA + BHA peeling solution" },
          { name: "Lactic Acid Peel", brand: "Drunk Elephant", description: "Gentle exfoliation for sensitive skin" },
          { name: "Post-Peel Balm", brand: "First Aid Beauty", description: "Calms and soothes after treatment" }
        ]
      },
      {
        name: "Microdermabrasion",
        description: "Non-invasive exfoliation for refined skin texture",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Diamond Tip Wand", brand: "DiamondGlow", description: "Professional-grade exfoliation tool" },
          { name: "Crystal-Free Solution", brand: "Dermalogica", description: "Gentle alternative to traditional microdermabrasion" },
          { name: "Soothing Serum", brand: "SkinMedica", description: "Post-treatment calming complex" }
        ]
      },
      {
        name: "LED Light Therapy",
        description: "Targeted light treatment for various skin concerns",
        men: true,
        women: true,
        kids: false
      }
    ]
  },
  {
    title: "Specialty Treatments",
    services: [
      {
        name: "Dermaplaning",
        description: "Precise exfoliation for ultra-smooth skin",
        men: false,
        women: true,
        kids: false
      },
      {
        name: "Men's Grooming Facial",
        description: "Designed for men's specific skin needs",
        men: true,
        women: false,
        kids: false
      },
      {
        name: "Back Treatment",
        description: "Deep cleansing and treatment for back acne",
        men: true,
        women: true,
        kids: "16+"
      }
    ]
  }
];

const Skin = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroSkin}
          alt="Skin Care Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background text-center px-4"
          >
            SKIN SOLUTIONS
          </motion.h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-background/50">
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
            <div className="w-24 h-0.5 bg-foreground/20 mx-auto mt-8"></div>
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
            <button className="border-2 border-foreground/90 text-foreground/90 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              Book Your Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skin;
