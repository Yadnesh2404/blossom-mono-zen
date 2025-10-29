import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Blossom Salon transformed my wedding day look into something absolutely magical. The attention to detail was extraordinary.",
    author: "Sarah M.",
    service: "Bridal Makeup & Hair"
  },
  {
    quote: "I've been going to Blossom for years. The consistency in quality and the calm atmosphere keep me coming back every time.",
    author: "Michael T.",
    service: "Haircut & Beard Grooming"
  },
  {
    quote: "The nail artistry here is unmatched. Every visit feels like a mini luxury retreat.",
    author: "Jessica L.",
    service: "Gel Manicure"
  },
  {
    quote: "Finally found a salon that understands exactly what I want. Professional, elegant, and always perfect results.",
    author: "Priya K.",
    service: "Hair Coloring"
  },
  {
    quote: "The makeup artist made me feel confident and beautiful for my photoshoot. Highly recommend!",
    author: "Amanda R.",
    service: "Photoshoot Makeup"
  },
  {
    quote: "Impeccable service from start to finish. The staff is knowledgeable and genuinely cares about their craft.",
    author: "David C.",
    service: "Precision Haircut"
  },
];

const Testimonials = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            TESTIMONIALS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed font-light"
          >
            Hear from our valued clients about their Blossom experience
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-foreground pb-16 last:border-b-0"
              >
                <blockquote className="mb-6">
                  <p className="text-xl md:text-2xl leading-relaxed font-light italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <p className="font-heading font-bold text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm opacity-60 uppercase tracking-wider">
                    {testimonial.service}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            BECOME PART OF OUR STORY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed font-light"
          >
            Experience the Blossom difference for yourself
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
