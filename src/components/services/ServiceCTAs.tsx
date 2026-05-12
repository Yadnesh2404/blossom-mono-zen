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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`mt-8 flex flex-wrap justify-center gap-4 ${className}`}
    >
      <Button 
        variant={variant === 'default' ? 'outline' : 'outline'}
        size="lg"
        className={`px-8 py-3 text-base rounded-full font-medium ${variant === 'default' ? 'bg-transparent text-white border-2 border-white hover:bg-white/10' : 'border-2 border-white text-white hover:bg-white/10'}`}
        onClick={onViewServices}
      >
        View Services
      </Button>
      <Button 
        variant="outline"
        size="lg"
        className="px-8 py-3 text-base rounded-full font-medium bg-transparent text-white border-2 border-white hover:bg-white/10 hover:text-white"
        onClick={onBookNow}
      >
        Book Now
      </Button>
    </motion.div>
  );
};

export const ConsultationCTA = ({ onBookConsultation }: { onBookConsultation: () => void }) => {
  return (
    <Button 
      variant="outline"
      className="border-2 border-foreground/90 text-foreground/90 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-background transition-all duration-300 rounded-full"
      onClick={onBookConsultation}
    >
      Book Your Consultation
    </Button>
  );
};
