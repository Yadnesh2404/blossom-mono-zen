import { motion } from "framer-motion";
// High-quality hair service image from Pexels
const heroHair = 'https://images.pexels.com/photos/3993313/pexels-photo-3993313.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';
import PremiumServiceTable from "@/components/services/PremiumServiceTable";

const hairServices = [
  {
    title: "Haircuts & Styling",
    services: [
      {
        name: "Classic Haircut",
        description: "Precision cut to suit your face shape and lifestyle",
        men: true,
        women: true,
        kids: true,
        products: [
          { name: "Scissors & Clippers", brand: "Hattori Hanzo", description: "Professional-grade cutting tools for precision" },
          { name: "Shampoo", brand: "Kerastase", description: "Gentle cleansing for all hair types" },
          { name: "Conditioner", brand: "Kerastase", description: "Nourishing formula for soft, manageable hair" }
        ]
      },
      {
        name: "Hair Styling",
        description: "Professional blowouts and styling for any occasion",
        men: true,
        women: true,
        kids: true,
        products: [
          { name: "Heat Protectant", brand: "GHD", description: "Protects hair from heat damage up to 230°C" },
          { name: "Hair Spray", brand: "Oribe", description: "Long-lasting hold with a natural finish" },
          { name: "Serum", brand: "Moroccanoil", description: "Adds shine and reduces frizz" }
        ]
      },
      {
        name: "Beard Trim & Grooming",
        description: "Precision beard shaping and grooming",
        men: true,
        women: false,
        kids: false,
        products: [
          { name: "Beard Oil", brand: "The Art of Shaving", description: "Softens and conditions facial hair" },
          { name: "Beard Balm", brand: "Jack Black", description: "Provides hold and tames flyaways" },
          { name: "Trimmer", brand: "Wahl", description: "Professional-grade precision trimming" }
        ]
      }
    ]
  },
  {
    title: "Hair Color",
    services: [
      {
        name: "Full Color",
        description: "Complete color transformation with premium products",
        men: "Basic",
        women: "Full range",
        kids: false,
        products: [
          { name: "Hair Color", brand: "L'Oréal Professionnel", description: "Vibrant, long-lasting color" },
          { name: "Developer", brand: "L'Oréal Professionnel", description: "Professional strength developer" },
          { name: "Color Gloss", brand: "Redken", description: "Adds shine and enhances tone" }
        ]
      },
      {
        name: "Highlights",
        description: "Dimensional color with foiling or balayage techniques",
        men: "Basic",
        women: "Full range",
        kids: false,
        products: [
          { name: "Lightener", brand: "Schwarzkopf", description: "Gentle lightening for beautiful highlights" },
          { name: "Foil", brand: "Joico", description: "Professional foils for precise application" },
          { name: "Toner", brand: "Wella", description: "Perfects the final tone" }
        ]
      },
      {
        name: "Color Correction",
        description: "Expert color correction and toning",
        men: false,
        women: true,
        kids: false,
        products: [
          { name: "Color Remover", brand: "Malibu", description: "Gently removes unwanted color" },
          { name: "Olaplex", brand: "Olaplex", description: "Bond builder for damaged hair" },
          { name: "Deep Conditioner", brand: "K18", description: "Repairs and strengthens hair bonds" }
        ]
      }
    ]
  },
  {
    title: "Hair Treatments",
    services: [
      {
        name: "Keratin Treatment",
        description: "Smoothing treatment for frizzy and unmanageable hair",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Keratin Complex", brand: "Brazilian Blowout", description: "Professional smoothing treatment" },
          { name: "Clarifying Shampoo", brand: "Nexxus", description: "Removes buildup before treatment" },
          { name: "Aftercare Shampoo", brand: "Brazilian Blowout", description: "Sulfate-free for lasting results" }
        ]
      },
      {
        name: "Hair Spa",
        description: "Deep conditioning and scalp treatment",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Deep Conditioner", brand: "Moroccanoil", description: "Intensive hydration treatment" },
          { name: "Scalp Serum", brand: "Aveda", description: "Nourishes and soothes the scalp" },
          { name: "Hair Mask", brand: "Olaplex", description: "Repairing treatment for damaged hair" }
        ]
      },
      {
        name: "Scalp Treatment",
        description: "Therapeutic treatment for scalp conditions",
        men: true,
        women: true,
        kids: false,
        products: [
          { name: "Scalp Scrub", brand: "Christophe Robin", description: "Exfoliates and purifies the scalp" },
          { name: "Scalp Serum", brand: "The Ordinary", description: "Targets specific scalp concerns" },
          { name: "Scalp Massager", brand: "Tangle Teezer", description: "Stimulates blood circulation" }
        ]
      }
    ]
  }
];

const Hair = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroHair}
          alt="Hair Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background"
          >
            HAIR ARTISTRY
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
              HAIR SERVICES
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto font-light text-foreground/80 mb-4">
              Experience the perfect blend of artistry and precision with our comprehensive hair services.
              Our expert stylists are dedicated to enhancing your natural beauty with personalized care.
            </p>
            <div className="w-24 h-0.5 bg-foreground/20 mx-auto mt-8"></div>
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
            <button className="border-2 border-foreground/90 text-foreground/90 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300">
              Book Your Consultation
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
