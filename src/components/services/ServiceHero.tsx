import { motion } from "framer-motion";
import { servicePageImages, type ServiceType } from "@/lib/hero-images";

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
  const { image, title, description, overlay } = servicePageImages[serviceType];

  return (
    <section className={`relative h-[100dvh] sm:h-[70vh] md:h-[80vh] w-screen max-w-full overflow-hidden bg-foreground ${className}`} style={{ marginLeft: 'calc((100% - 100vw) / 2)' }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            opacity: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 1, ease: [0.4, 0, 0.2, 1] }
          }
        }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center pt-20 md:pt-0 pb-12 md:pb-0 overflow-y-auto md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              className="px-6 sm:px-8 md:px-12 lg:px-16 max-w-4xl w-full mx-auto py-4 md:py-0"
            >
              <div className="text-center flex flex-col items-center mt-[25vh] md:mt-[30vh]">
                <div className="w-full flex justify-center">
                  {children}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
