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
            backgroundImage: `linear-gradient(to right, ${overlay}, ${overlay}), url(${image})`,
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
              <div className="text-center flex flex-col items-center">
                {title.startsWith('LUXURY') ? (
                  <>
                    <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading text-[#C8AA6E] leading-none mb-0.5 drop-shadow-md">
                      LUXURY
                    </h1>
                    <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading tracking-[0.05em] text-[#FDFBF7] mb-1.5 drop-shadow-md sm:whitespace-nowrap">
                      {title.replace('LUXURY ', '').trim()}
                    </h2>
                  </>
                ) : (
                  <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading tracking-[0.05em] text-[#FDFBF7] mb-1.5 drop-shadow-md sm:whitespace-nowrap">
                    {title}
                  </h1>
                )}

                <div className="flex items-center gap-2 mb-3 md:mb-6 w-full max-w-[80%] md:max-w-[400px]">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8AA6E]/50 to-[#C8AA6E] md:from-transparent md:via-[#C8AA6E]/50 md:to-[#C8AA6E]"></div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C8AA6E]">
                    <path d="M12 4C12 4 14.5 7.5 16 9C17.5 10.5 20 11 20 11C20 11 16.5 13 15 15C13.5 17 12 20 12 20C12 20 10.5 17 9 15C7.5 13 4 11 4 11C4 11 7.5 10.5 9 9C10.5 7.5 12 4 12 4Z" fill="currentColor" />
                    <path d="M12 4C12 4 13.5 7 14 9C14.5 11 15 11 15 11C15 11 14.5 11 14 13C13.5 15 12 20 12 20C12 20 10.5 15 10 13C9.5 11 9 11 9 11C9 11 9.5 11 10 9C10.5 7 12 4 12 4Z" fill="white" fillOpacity="0.3" />
                  </svg>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C8AA6E]/50 to-[#C8AA6E] md:from-transparent md:via-[#C8AA6E]/50 md:to-[#C8AA6E]"></div>
                </div>

                <p className="text-[0.8rem] sm:text-lg md:text-xl font-light leading-relaxed drop-shadow-sm mb-4 md:mb-6 max-w-xl text-[#e8e4db] mx-auto text-center">
                  {description}
                </p>

                <div className="mb-2 w-full flex justify-center">
                  {children}
                </div>

                <div className="mt-6 md:mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8 w-full max-w-3xl mx-auto">
                  <div className="flex flex-col items-center text-center gap-1.5 md:gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-7 md:h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <span className="text-[0.55rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-tight">
                      PREMIUM<br />
                      {serviceType.toUpperCase()} PRODUCTS
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 md:gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-7 md:h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="text-[0.55rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-tight">
                      EXPERT<br />
                      {serviceType === "hair" ? "HAIR STYLISTS" : serviceType === "skin" ? "SKIN THERAPISTS" : serviceType === "nails" ? "NAIL ARTISTS" : serviceType === "makeup" ? "MAKEUP ARTISTS" : "SPA THERAPISTS"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 md:gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="text-[0.55rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-tight">
                      LUXURY<br />SALON EXPERIENCE
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 md:gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#C8AA6E]/60 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#C8AA6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-[0.55rem] md:text-[0.7rem] uppercase tracking-wider text-[#FDFBF7] font-medium leading-tight">
                      TRUSTED IN<br />ANDHERI WEST
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
