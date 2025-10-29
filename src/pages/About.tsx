import { motion } from "framer-motion";
import aboutSalon from "@/assets/about-salon.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={aboutSalon}
          alt="Blossom Salon Interior"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold text-background"
          >
            ABOUT US
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              OUR STORY
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              Born from a passion for timeless beauty, Blossom Salon represents 
              the evolution of Harisha Rakesh Salon into a modern sanctuary of 
              elegance. Our journey began with a simple belief: beauty services 
              should be more than routine appointments—they should be transformative 
              experiences.
            </p>
            <p className="text-lg leading-relaxed font-light">
              With years of expertise and a commitment to excellence, we've created 
              a space where sophistication meets comfort, where every detail is 
              considered, and where your beauty journey is treated with the reverence 
              it deserves.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              OUR PHILOSOPHY
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              We believe in the power of simplicity. True beauty doesn't shout—it 
              whispers with confidence. Our approach is rooted in understanding that 
              each client is unique, with individual needs, preferences, and beauty goals.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Every service we offer is delivered with precision, care, and an 
              unwavering attention to detail. We don't follow trends blindly; we 
              craft timeless looks that enhance your natural elegance and make you 
              feel like the best version of yourself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              OUR COMMITMENT
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              We are committed to using premium products and maintaining the highest 
              standards of hygiene and professionalism. Our team of experts continuously 
              refines their craft, staying updated with techniques while honoring 
              classic methods that have stood the test of time.
            </p>
            <p className="text-lg leading-relaxed font-light">
              When you visit Blossom Salon, you're not just receiving a service—you're 
              experiencing a moment of tranquility, a celebration of your individuality, 
              and an investment in your confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            OUR VALUES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "EXCELLENCE", desc: "We pursue perfection in every detail, every service, every interaction." },
              { title: "ELEGANCE", desc: "Timeless beauty that transcends fleeting trends and celebrates individuality." },
              { title: "EXPERIENCE", desc: "Every visit is crafted to be a moment of calm, care, and transformation." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
                <p className="text-sm leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
