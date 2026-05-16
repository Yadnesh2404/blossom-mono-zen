import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceItem {
  name: string;
  men: string | boolean;
  women: string | boolean;
  price?: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

interface PremiumServiceTableProps {
  categories: ServiceCategory[];
  showBookButton?: boolean;
}
const renderAvailability = (value: string | boolean) => {
  if (value === false) return <span className="text-foreground/30">—</span>;
  if (value === true) return <Check className="w-5 h-5 text-brand-gold mx-auto" />;
  return <span className="text-foreground/85">{value}</span>;
};

const PremiumServiceTable: React.FC<PremiumServiceTableProps> = ({ categories, showBookButton = true }) => {
  return (
    <div className="w-full space-y-12">
      {categories.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-heading font-bold tracking-wide text-foreground/85 uppercase flex items-center gap-3">
            <span className="w-8 h-[2px] hidden md:inline-block" style={{ background: 'linear-gradient(90deg, hsl(40 47% 56%), hsl(344 64% 50%))' }}></span>
            {category.title}
          </h3>

          <div className="overflow-hidden rounded-xl border border-foreground/8 shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ background: 'linear-gradient(145deg, hsl(40 33% 97%), hsl(36 30% 96%))' }}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] md:min-w-0 table-luxury">
                <thead>
                  <tr style={{ background: 'linear-gradient(90deg, hsl(20 10% 12%), hsl(20 10% 15%))' }}>
                    <th className="py-3 px-4 md:py-4 md:px-6 text-left font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-white/95">
                      SERVICE / TREATMENT
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-20 md:w-28 text-white/95">
                      PRICE (₹)
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-16 md:w-24 text-white/95">
                      MEN
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-16 md:w-24 text-white/95">
                      WOMEN
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  {category.services.map((service, index) => (
                    <tr
                      key={index}
                      className="group transition-colors duration-200 border-b border-foreground/5 last:border-0"
                      style={{
                        background: index % 2 === 0 ? 'transparent' : 'hsl(36 30% 96% / 0.5)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'hsl(38 40% 95%)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = index % 2 === 0 ? 'transparent' : 'hsl(36 30% 96% / 0.5)';
                      }}
                    >
                      <td className="py-3 px-4 md:py-5 md:px-6">
                        <div className="font-medium text-foreground/85 text-sm md:text-base truncate">
                          {service.name}
                        </div>
                        {service.description && (
                          <p className="text-xs md:text-sm text-foreground/50 mt-1 line-clamp-2">
                            {service.description}
                          </p>
                        )}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {service.price ? (
                          <span className="text-foreground/85 font-medium text-sm md:text-base">{service.price}</span>
                        ) : (
                          <span className="text-foreground/30">—</span>
                        )}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {renderAvailability(service.men)}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {renderAvailability(service.women)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {showBookButton && (
            <div className="flex justify-end">
              <button
                onClick={() => { window.location.href = '/#contact'; }}
                className="mt-4 btn-luxury text-xs sm:text-sm w-full sm:w-auto text-center"
              >
                Book Appointment
              </button>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default PremiumServiceTable;
