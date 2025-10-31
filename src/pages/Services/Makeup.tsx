import { motion } from "framer-motion";
// High-quality makeup application image from Pexels
const heroMakeup = 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';
import PremiumServiceTable from "@/components/services/PremiumServiceTable";

const makeupServices = [
  {
    title: "Special Occasion",
    services: [
      {
        name: "Bridal Makeup",
        description: "Flawless, long-lasting makeup for your special day",
        men: false,
        women: true,
        kids: false,
        products: [
          { name: "Long-Wear Foundation", brand: "Estée Lauder", description: "24-hour wear, transfer-resistant formula" },
          { name: "Setting Spray", brand: "Urban Decay", description: "All-nighter setting spray for 16-hour wear" },
          { name: "False Lashes", brand: "Ardell", description: "Natural-looking lash extensions" }
        ]
      },
      {
        name: "Special Event Makeup",
        description: "Glamorous looks for parties, galas, and celebrations",
        men: false,
        women: true,
        kids: "16+",
        products: [
          { name: "Highlighter Palette", brand: "Fenty Beauty", description: "Versatile highlighting shades" },
          { name: "Liquid Lipstick", brand: "Huda Beauty", description: "Long-wearing, matte finish" },
          { name: "Glitter Pigments", brand: "Stila", description: "Eye and face glitters" }
        ]
      },
      {
        name: "Photoshoot Makeup",
        description: "Camera-ready makeup for professional shoots",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "HD Foundation", brand: "Make Up For Ever", description: "Camera-friendly, medium to full coverage" },
          { name: "Color Corrector", brand: "LA Girl", description: "Professional color correcting palette" },
          { name: "Matte Powder", brand: "Laura Mercier", description: "Translucent setting powder" }
        ]
      }
    ]
  },
  {
    title: "Everyday Makeup",
    services: [
      {
        name: "Natural/Everyday Makeup",
        description: "Subtle enhancement for daily confidence",
        men: false,
        women: true,
        kids: false,
        products: [
          { name: "Tinted Moisturizer", brand: "NARS", description: "Sheer, buildable coverage" },
          { name: "Cream Blush", brand: "Glossier", description: "Natural, dewy flush" },
          { name: "Mascara", brand: "Benefit", description: "Lengthening and defining" }
        ]
      },
      {
        name: "Men's Grooming Makeup",
        description: "Subtle coverage for professional appearances",
        men: true,
        women: false,
        kids: false,
        products: [
          { name: "BB Cream", brand: "Kiehl's", description: "Light coverage, natural finish" },
          { name: "Concealer", brand: "Tom Ford", description: "Undetectable coverage" },
          { name: "Brow Gel", brand: "Anastasia Beverly Hills", description: "Tames and defines brows" }
        ]
      },
      {
        name: "Teen Makeup",
        description: "Age-appropriate looks for special occasions",
        men: false,
        women: true,
        kids: "13-17"
      }
    ]
  },
  {
    title: "Education & Enhancement",
    services: [
      {
        name: "Makeup Lessons",
        description: "Learn professional techniques tailored to your features",
        men: true,
        women: true,
        kids: "16+"
      },
      {
        name: "Bridal Trial",
        description: "Custom makeup trial before your wedding day",
        men: false,
        women: true,
        kids: false
      },
      {
        name: "Makeup for Special Effects",
        description: "Theatrical and special effects makeup",
        men: true,
        women: true,
        kids: false
      }
    ]
  }
];

const Makeup = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroMakeup}
          alt="Makeup Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background text-center px-4"
          >
            MAKEUP EXCELLENCE
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
              MAKEUP SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/80 mb-4">
              Our professional makeup artists create looks that enhance your natural beauty,
              whether you're seeking subtle elegance or dramatic glamour for any occasion.
            </p>
            <div className="w-24 h-0.5 bg-foreground/20 mx-auto mt-8"></div>
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
            <button className="border-2 border-foreground/90 text-foreground/90 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              Book Now
            </button>
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
