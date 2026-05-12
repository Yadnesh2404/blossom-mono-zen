import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Product {
  name: string;
  brand: string;
  description?: string;
}

interface ServiceItem {
  name: string;
  men: string | boolean;
  women: string | boolean;
  kids: string | boolean;
  price?: string;
  description?: string;
  products?: Product[];
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
  if (value === false) return <span className="text-foreground/40">—</span>;
  if (value === true) return <Check className="w-5 h-5 text-brand-gold mx-auto" />;
  return <span className="text-foreground/90">{value}</span>;
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
          <h3 className="text-xl md:text-2xl font-heading font-bold tracking-wide text-foreground/90 uppercase flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-gold hidden md:inline-block"></span>
            {category.title}
          </h3>

          <div className="overflow-hidden rounded-xl border border-foreground/5 bg-background shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] md:min-w-0">
                <thead>
                  <tr className="bg-foreground text-background/95">
                    <th className="py-3 px-4 md:py-4 md:px-6 text-left font-heading font-bold text-xs md:text-sm uppercase tracking-wider">
                      SERVICE / TREATMENT
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-20 md:w-28">
                      PRICE (₹)
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-16 md:w-24">
                      MEN
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-16 md:w-24">
                      WOMEN
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-16 md:w-24">
                      KIDS
                    </th>
                    <th className="py-3 px-2 md:py-4 md:px-4 text-center font-heading font-bold text-xs md:text-sm uppercase tracking-wider w-40 md:w-56">
                      <span className="inline-flex items-center justify-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                        </svg>
                        PREMIUM PRODUCTS
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/5">
                  {category.services.map((service, index) => (
                    <tr
                      key={index}
                      className="group hover:bg-foreground/3 transition-colors duration-200 border-b border-foreground/5 last:border-0"
                    >
                      <td className="py-3 px-4 md:py-5 md:px-6">
                        <div className="font-medium text-foreground/90 text-sm md:text-base truncate">
                          {service.name}
                        </div>
                        {service.description && (
                          <p className="text-xs md:text-sm text-foreground/60 mt-1 line-clamp-2">
                            {service.description}
                          </p>
                        )}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {service.price ? (
                          <span className="text-foreground/90 font-medium text-sm md:text-base">{service.price}</span>
                        ) : (
                          <span className="text-foreground/40">—</span>
                        )}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {renderAvailability(service.men)}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {renderAvailability(service.women)}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4 text-center">
                        {renderAvailability(service.kids)}
                      </td>
                      <td className="py-3 px-2 md:py-5 md:px-4">
                        {service.products && service.products.length > 0 ? (
                          <div className="space-y-2">
                            {service.products.map((product, idx) => (
                              <TooltipProvider key={idx} delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div className="group flex items-center space-x-2 text-xs text-foreground/80 hover:text-foreground transition-colors cursor-pointer px-2 py-1.5 rounded-md hover:bg-foreground/5">
                                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                          <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                        </svg>
                                      </span>
                                      <span className="font-medium truncate flex-1 text-left">{product.name}</span>
                                      <span className="text-foreground/40 group-hover:text-foreground/60 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <line x1="12" y1="16" x2="12" y2="12"></line>
                                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        </svg>
                                      </span>
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent
                                    className="bg-background/95 backdrop-blur-sm border border-foreground/10 shadow-lg p-4 max-w-[280px]"
                                    sideOffset={5}
                                  >
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                                        <p className="font-medium text-foreground/90">{product.brand}</p>
                                      </div>
                                      {product.description && (
                                        <p className="text-foreground/70 text-sm leading-relaxed">
                                          {product.description}
                                        </p>
                                      )}
                                    </div>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>
                        ) : (
                          <span className="inline-flex items-center justify-center text-foreground/30 text-xs italic">
                            Not specified
                          </span>
                        )}
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
                className="mt-4 border border-foreground/30 hover:bg-brand-rose hover:border-brand-rose hover:text-white px-4 py-2 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center"
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
