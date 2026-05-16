import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCTAsProps {
  onViewServices: () => void;
  onBookNow: () => void;
  variant?: 'default' | 'outline';
  className?: string;
}

export const ServiceCTAs = ({ onViewServices, onBookNow, variant = 'default', className = '' }: ServiceCTAsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
      className={`mt-2 flex flex-wrap justify-center gap-4 ${className}`}
    >
      <Button
        className="inline-flex items-center justify-center bg-gradient-to-r from-[#b89552] via-[#d4b977] to-[#b89552] hover:bg-gradient-to-br text-[#1A1A1A] px-8 py-3.5 text-[0.9rem] font-semibold tracking-wider transition-all duration-300 shadow-md rounded-sm transform hover:scale-105 border-0 hover:text-[#1A1A1A] h-auto uppercase"
        onClick={onBookNow}
      >
        <span className="flex items-center gap-2">
          Book Now
          <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </Button>
    </motion.div>
  );
};

export const ConsultationCTA = ({ onBookConsultation }: { onBookConsultation: () => void }) => {
  return (
    <Button
      className="inline-flex items-center justify-center bg-gradient-to-r from-[#b89552] via-[#d4b977] to-[#b89552] hover:bg-gradient-to-br text-[#1A1A1A] px-8 py-3.5 text-[0.9rem] font-semibold tracking-wider transition-all duration-300 shadow-md rounded-sm transform hover:scale-105 border-0 hover:text-[#1A1A1A] h-auto uppercase mt-2"
      onClick={onBookConsultation}
    >
      <span className="flex items-center gap-2">
        Book Your Makeup Experience
        <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </Button>
  );
};
