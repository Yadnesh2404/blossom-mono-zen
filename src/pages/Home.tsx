import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
// Using a high-quality color image from Pexels
const aboutSalon = 'https://images.pexels.com/photos/3992871/pexels-photo-3992871.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2';
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            in a serene, sophisticated setting. At Blossom Salon, we're dedicated 
            to bringing you an elevated beauty experience that's truly exceptional.
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
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className="relative w-full h-[500px] will-change-transform"
            >
              <div className="absolute inset-0 bg-foreground/5 animate-pulse rounded-md"></div>
              <img
                src="/images/hero/salon-interior.jpg"
                alt="Elegant salon interior with modern design and natural light"
                width={1920}
                height={1280}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover border-2 border-foreground will-change-transform"
                style={{
                  contentVisibility: 'auto',
                  imageRendering: '-webkit-optimize-contrast',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)'
                }}
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.opacity = '1';
                  img.previousElementSibling?.remove();
                }}
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
                Born from a passion for timeless beauty, Blossom Salon stands as 
                a modern sanctuary of elegance in the heart of the city. Our journey 
                is built on a simple belief: beauty services should be more than 
                routine appointments—they should be transformative experiences that 
                celebrate your unique beauty.
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

        </div>
      </section>


      {/* Testimonials Carousel */}
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

          <div className="relative">
            <TestimonialCarousel testimonials={testimonials} />
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
                      A WING, SHOP NO 4, NAYADEEP APARTMENT,<br />
                      NEAR KALINGA RESTAURANT, RAVI RAJ COMPLEX,<br />
                      NEW LINK ROAD, ANDHERI WEST,<br />
                      MUMBAI, MAHARASHTRA 400053
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
                      Monday - Tuesday: 10:00 AM - 10:00 PM<br />
                      Wednesday: Closed<br />
                      Thursday - Sunday: 10:00 AM - 10:00 PM
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
            className="mt-16 h-96 bg-muted border-2 border-foreground"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3314616901635!2d72.82915063599928!3d19.136962889969418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b737f0afc9c5%3A0x6e21a61e214f4bde!2sBlossom%20Salon%2C%20Andheri%20West-%20Best%20Salon%20in%20Andheri%20West%2CSAB%20TV%20Rd%20%7C%20Hair%20%7C%20Skin%20%7C%20Nails%20%7C%20Academy!5e0!3m2!1sen!2sin!4v1761765114748!5m2!1sen!2sin" 
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

// Star Rating Component
const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <ul className="flex justify-center mb-6">
    {[...Array(5)].map((_, i) => (
      <li key={i} className="mx-0.5">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 576 512" 
          className="w-5 h-5 fill-current text-amber-400"
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </li>
    ))}
  </ul>
);

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials }: { testimonials: typeof testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Auto-scroll every 5 seconds when not hovered
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const getAdjacentIndexes = (index: number) => {
    const prev = index - 1 >= 0 ? index - 1 : testimonials.length - 1;
    const next = index + 1 < testimonials.length ? index + 1 : 0;
    return { prev, next };
  };

  const { prev: prevIndex, next: nextIndex } = getAdjacentIndexes(currentIndex);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="bg-background p-10 border-2 border-foreground relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-foreground/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              <StarRating />
            </div>

            {/* Testimonial Content */}
            <blockquote className="relative z-10 mb-8">
              <p className="text-lg md:text-xl leading-relaxed text-center font-light italic">
                "{testimonials[currentIndex].quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="font-heading font-bold text-lg">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm opacity-60 uppercase tracking-wider mt-1">
                {testimonials[currentIndex].service}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center rounded-full bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center rounded-full bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-foreground' : 'bg-foreground/20'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
