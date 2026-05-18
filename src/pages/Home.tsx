import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import HeroCarousel from "@/components/HeroCarousel";
import MomentsGallery from "@/components/MomentsGallery";
import BlossomMoments from "@/components/BlossomMoments";
import { ChevronLeft, ChevronRight, User, Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react";

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

type Testimonial = {
  quote: string;
  author: string;
  service: string;
};

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return;
    }

    try {
      // Here you would typically make an API call to submit the form
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent",
        description: "We'll get back to you within 24-48 hours!",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
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
      <section className="pt-0 pb-0 px-4 bg-luxury relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,hsl(40_60%_70%/0.06),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] mx-auto mt-4 mb-4 md:mb-6 brand-divider"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-2"
          >
            WELCOME TO <span className="text-brand-gold">BLOSSOM SALON & ACADEMY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/45 font-light mb-4 md:mb-6"
          >
            Luxury Unisex Salon in Andheri West, Mumbai
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-base md:text-lg leading-relaxed mb-6 font-light"
          >
            Blossom Salon & Academy offers expert hair, skin, nail and beauty services in a luxurious and
            relaxing environment in the heart of Andheri West. Conveniently located near SAB TV Tower,
            Fun Republic, CitiMall and Moxy Hotel, we are known for premium beauty experiences,
            professional stylists and personalised care for women and men.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm md:text-base leading-relaxed mb-8 font-light text-foreground/65 italic"
          >
            At Blossom, every appointment is designed to deliver elegance, comfort, confidence and a truly
            premium self-care experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="rounded-full px-8 tracking-wider text-sm">
              <Link to="/services/hair">EXPLORE SERVICES</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 tracking-wider text-sm border-foreground/20 hover:bg-brand-rose hover:text-white hover:border-brand-rose transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              BOOK APPOINTMENT
            </Button>
          </motion.div>

          {/* Trust Signals */}

        </div>
      </section>

      {/* Moments Gallery Section */}
      <MomentsGallery />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 bg-luxury-muted relative overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,hsl(40_60%_70%/0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              className="relative w-full will-change-transform"
            >
              <div className="absolute inset-0 bg-foreground/5 animate-pulse rounded-lg"></div>
              <img
                src="/images/Our story.JPG"
                alt="Dhara Joshi, founder of Blossom Salon, with the DD logo"
                loading="lazy"
                decoding="async"
                className="relative w-full h-auto max-h-[650px] object-cover object-top rounded-lg border border-brand-gold/30 will-change-transform shadow-lg"
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
                OUR <span className="text-brand-gold">STORY</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-light">
                Blossom Salon & Academy is more than a salon — it is a royal beauty destination inspired by
                the elegance and luxury of Dubai, thoughtfully brought to the heart of Andheri West, Mumbai.
                Designed with stunning gold and white interiors, soft ambient lighting, and the rich aroma of
                bakhoor infused through the air, every corner of Blossom is created to make you feel pampered,
                confident and truly luxurious.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-light">
                At Blossom, beauty is not just a service — it is an experience. From the moment you step in, our
                goal is to offer a calm, hygienic and premium environment where relaxation meets
                transformation. Every detail is thoughtfully curated to deliver sophistication, comfort and
                personalised care in a setting inspired by international luxury.
              </p>
              <p className="text-lg leading-relaxed mb-6 font-light">
                Our expert team specialises in haircuts, hair styling, hair spa, smoothening, keratin, hair colour,
                root touch-ups, premium hair care, facials, beauty grooming, manicure, pedicure, nail care, body
                polishing, waxing and relaxing wellness experiences using trusted premium products and
                modern techniques.
              </p>
              <p className="text-base leading-relaxed mb-6 font-light text-foreground/65">
                Located near SAB TV Tower, Nyayadeep Society in Andheri West, Mumbai, Blossom Salon &
                Academy combines affordable luxury with professional expertise, creating a space where every
                client feels beautiful, valued and royal.
              </p>
              <p className="text-base leading-relaxed font-light text-foreground/65">
                With a vision to spread luxury beauty experiences across the globe, Blossom is continuously
                evolving to bring world-class beauty and wellness services to modern clients who appreciate
                elegance, comfort and quality. As part of this journey, Blossom will soon introduce an authentic
                Moroccan Hammam experience in Muscat, Oman — bringing timeless rituals of relaxation and
                luxury to an international audience.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Blossom Moments Video Showcase */}
      <BlossomMoments />

      <div className="brand-divider max-w-xs mx-auto"></div>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-16 md:py-24 px-4 bg-luxury-glow relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[radial-gradient(ellipse,hsl(344_64%_50%/0.03),transparent)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-24 h-[2px] mx-auto mb-6 brand-divider"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-center mb-16"
          >
            WHAT OUR <span className="text-brand-gold">CLIENTS</span> SAY
          </motion.h2>

          <div className="relative">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>



      <div className="brand-divider max-w-xs mx-auto"></div>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 bg-luxury relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,hsl(40_60%_70%/0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-24 brand-divider mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              GET IN <span className="text-brand-gold">TOUCH</span>
            </h2>
            <p className="text-foreground/60 font-light max-w-xl mx-auto">
              We'd love to hear from you. Book an appointment or send us a message and we'll get back to you soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form — takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="card-luxury p-6 md:p-10 rounded-xl">
                <h3 className="text-xl font-heading font-bold mb-1 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-gold" />
                  SEND US A MESSAGE
                </h3>
                <p className="text-sm text-foreground/45 mb-8 font-light">All fields marked are required</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 pl-10 border-foreground/10 focus:border-brand-gold focus:ring-brand-gold/20 input-luxury rounded-lg"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone *"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        className="h-12 pl-10 border-foreground/10 focus:border-brand-gold focus:ring-brand-gold/20 input-luxury rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email (optional)"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 pl-10 border-foreground/10 focus:border-brand-gold focus:ring-brand-gold/20 input-luxury rounded-lg"
                      />
                    </div>
                    <div className="relative">
                      <select
                        name="service"
                        id="service-select"
                        aria-label="Select service of interest"
                        value={formData.service || ''}
                        onChange={handleChange as any}
                        className="w-full h-12 pl-4 pr-10 border border-foreground/10 input-luxury rounded-lg text-sm font-body focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/20 outline-none appearance-none cursor-pointer text-foreground/70"
                      >
                        <option value="">Interested in... (optional)</option>
                        <option value="hair">Hair Services</option>
                        <option value="skin">Skin Treatments</option>
                        <option value="nails">Nail Studio</option>
                        <option value="makeup">Makeup</option>
                        <option value="spa">Spa & Wellness</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-foreground/10 focus:border-brand-gold focus:ring-brand-gold/20 resize-none input-luxury rounded-lg p-4"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-brand-rose hover:text-white transition-all duration-300 h-12 text-sm tracking-wider rounded-full"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map — takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="flex-1 min-h-[350px] card-luxury overflow-hidden rounded-xl">
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
              </div>

              {/* Compact Contact Info */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <p className="text-[11px] font-light text-foreground/60 leading-relaxed">
                    SHOP NO 4 & 5,<br />NYAYA DEEP SOC,<br />MUMBAI 400053
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Phone className="w-4 h-4 text-brand-rose" />
                  <a href="tel:+919892657908" className="text-[11px] font-light text-foreground/60 hover:text-brand-gold transition-colors">
                    09892657908
                  </a>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-green" />
                  <p className="text-[11px] font-light text-foreground/60">
                    All days<br />10 AM – 10 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
          className="w-5 h-5 fill-current text-brand-gold"
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      </li>
    ))}
  </ul>
);

// Testimonial Carousel Component - Memoized to prevent unnecessary re-renders
const TestimonialCarousel = memo(({ testimonials }: { testimonials: Testimonial[] }) => {
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
          <div className="card-luxury p-10 rounded-xl relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-brand-gold/15">
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
              <div className="text-sm text-foreground/50 uppercase tracking-wider mt-1">
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
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 flex items-center justify-center rounded-full bg-background border border-foreground/15 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 shadow-sm z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 flex items-center justify-center rounded-full bg-background border border-foreground/15 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 shadow-sm z-10"
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
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-brand-gold scale-125' : 'bg-foreground/15 hover:bg-foreground/30'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});
TestimonialCarousel.displayName = 'TestimonialCarousel';

export default Home;
