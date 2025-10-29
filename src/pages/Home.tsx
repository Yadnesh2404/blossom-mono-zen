import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
import aboutSalon from "@/assets/about-salon.jpg";

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

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <a href="#contact">BOOK APPOINTMENT</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutSalon}
                alt="Blossom Salon Interior"
                className="w-full h-[500px] object-cover grayscale border-2 border-foreground"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              <p className="text-lg leading-relaxed mb-6 font-light">
                With years of expertise and a commitment to excellence, we've created 
                a space where sophistication meets comfort, where every detail is 
                considered, and where your beauty journey is treated with the reverence 
                it deserves.
              </p>
              <p className="text-lg leading-relaxed font-light">
                We believe in the power of simplicity. True beauty doesn't shout—it 
                whispers with confidence. Our approach is rooted in understanding that 
                each client is unique, with individual needs, preferences, and beauty goals.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mt-24">
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
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 px-4">
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>

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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            GET IN TOUCH
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-8">
                SEND US A MESSAGE
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 border-foreground focus:ring-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 border-foreground focus:ring-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="border-foreground focus:ring-foreground resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  SEND MESSAGE
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-8">
                  VISIT US
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2">ADDRESS</h4>
                    <p className="leading-relaxed font-light">
                      123 Luxury Avenue<br />
                      City, State 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2">PHONE</h4>
                    <p className="font-light">(555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2">EMAIL</h4>
                    <p className="font-light">hello@blossomsalon.com</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-2">HOURS</h4>
                    <p className="font-light">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 h-96 bg-muted border-2 border-foreground grayscale"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blossom Salon Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
