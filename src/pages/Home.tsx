import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";

const Home = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            WELCOME TO BLOSSOM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed mb-12 font-light"
          >
            Where elegance meets expertise. Experience premium beauty services 
            in a serene, sophisticated setting. Formerly Harisha Rakesh Salon, 
            we've evolved to bring you an elevated beauty experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg">
              <Link to="/services/hair">EXPLORE SERVICES</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">BOOK APPOINTMENT</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            OUR SERVICES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "HAIR", desc: "Precision cuts, coloring, and styling for every occasion", link: "/services/hair" },
              { title: "NAILS", desc: "Luxurious manicures and pedicures with attention to detail", link: "/services/nails" },
              { title: "MAKEUP", desc: "Professional makeup for events, photoshoots, and everyday beauty", link: "/services/makeup" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="bg-background border-2 border-foreground p-8 h-full transition-all duration-300 hover:bg-foreground hover:text-background">
                    <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-sm leading-relaxed mb-6">{service.desc}</p>
                    <span className="text-sm font-medium uppercase tracking-wider group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-8"
          >
            OUR PHILOSOPHY
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed font-light mb-8"
          >
            At Blossom Salon, we believe beauty is an art form. Each service is a 
            carefully crafted experience, tailored to enhance your natural elegance. 
            We combine timeless techniques with contemporary style to deliver results 
            that speak volumes through their simplicity and refinement.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
