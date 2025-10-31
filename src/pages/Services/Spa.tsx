import { motion } from "framer-motion";
// High-quality spa service image from Pexels
const heroSpa = 'https://images.pexels.com/photos/6621333/pexels-photo-6621333.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';
import PremiumServiceTable from "@/components/services/PremiumServiceTable";

const spaServices = [
  {
    title: "Body Treatments",
    services: [
      {
        name: "Aromatherapy Massage",
        description: "Therapeutic massage using essential oils to enhance physical and emotional well-being",
        duration: "60 min",
        price: 120,
        men: true,
        women: true,
        kids: false
      },
      {
        name: "Hot Stone Therapy",
        description: "Warm stones and massage techniques to relieve tension and improve circulation",
        duration: "90 min",
        price: 150,
        men: true,
        women: true,
        kids: false
      },
      {
        name: "Body Wrap",
        description: "Detoxifying and hydrating treatment with natural ingredients",
        duration: "75 min",
        price: 135,
        men: true,
        women: true,
        kids: false
      }
    ]
  },
  {
    title: "Facial Treatments",
    services: [
      {
        name: "Signature Facial",
        description: "Customized facial treatment for your specific skin needs",
        duration: "60 min",
        price: 110,
        men: true,
        women: true,
        kids: false
      },
      {
        name: "Anti-Aging Treatment",
        description: "Advanced treatment to reduce fine lines and improve skin elasticity",
        duration: "75 min",
        price: 145,
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
        name: "Couples Massage",
        description: "Side-by-side massage experience in a private suite",
        duration: "90 min",
        price: 250,
        men: true,
        women: true,
        kids: false
      },
      {
        name: "Prenatal Massage",
        description: "Specialized massage for expectant mothers",
        duration: "60 min",
        price: 120,
        men: false,
        women: true,
        kids: false
      }
    ]
  }
];

const Spa = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroSpa}
          alt="Luxury Spa Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background text-center px-4"
          >
            SPA
          </motion.h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              OUR SPA SERVICES
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Indulge in our luxurious spa treatments designed to rejuvenate your body, 
              refresh your mind, and restore your spirit. Our expert therapists use only 
              the finest products and techniques to ensure a truly transformative experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PremiumServiceTable categories={spaServices} showBookButton={true} />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              BENEFITS OF SPA THERAPY
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Stress Relief",
                description: "Reduce stress and anxiety through therapeutic treatments that promote deep relaxation and mental clarity."
              },
              {
                title: "Improved Circulation",
                description: "Enhance blood flow and oxygen delivery throughout your body for better overall health."
              },
              {
                title: "Detoxification",
                description: "Eliminate toxins and impurities from your body through specialized treatments and therapies."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-lg shadow-sm border border-foreground/10"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">{benefit.title}</h3>
                <p className="text-foreground/80 font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spa;
