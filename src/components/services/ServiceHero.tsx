import { motion } from "framer-motion";
import { heroImages, type ServiceType } from "@/lib/hero-images";

interface ServiceHeroProps {
  serviceType: ServiceType;
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceHero({ 
  serviceType, 
  children,
  className = ""
}: ServiceHeroProps) {
  const { image, title, description, overlay, textColor } = heroImages[serviceType];

  return (
    <section className={`relative ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundColor: overlay,
            backgroundBlendMode: 'multiply'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[60vh] flex items-center justify-center text-center px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-6xl font-heading font-bold mb-6 ${textColor}`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-xl md:text-2xl font-light mb-8 ${textColor} max-w-2xl mx-auto`}
          >
            {description}
          </motion.p>
          {children}
        </div>
      </div>
    </section>
  );
}
