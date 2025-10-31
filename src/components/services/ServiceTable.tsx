import React from 'react';

import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ServiceTableProps {
  title: string;
  services: {
    name: string;
    men: string | React.ReactNode;
    women: string | React.ReactNode;
    kids: string | React.ReactNode;
    products?: {
      name: string;
      brand: string;
      description?: string;
    }[];
  }[];
}

const ServiceTable: React.FC<ServiceTableProps> = ({ title, services }) => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-foreground/10">
          <thead>
            <tr className="bg-background/50">
              <th className="py-4 px-6 text-left font-medium text-foreground/80 border-b border-foreground/10 w-2/5">
                Service / Treatment
              </th>
              <th className="py-4 px-6 text-center font-medium text-foreground/80 border-b border-l border-foreground/10">
                Men
              </th>
              <th className="py-4 px-6 text-center font-medium text-foreground/80 border-b border-l border-foreground/10">
                Women
              </th>
              <th className="py-4 px-6 text-center font-medium text-foreground/80 border-b border-l border-foreground/10">
                Kids
              </th>
              <th className="py-4 px-6 text-center font-medium text-foreground/80 border-b border-foreground/10 w-1/4">
                Products Used
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {services.map((service, index) => (
              <tr 
                key={index} 
                className="hover:bg-foreground/2 transition-colors"
              >
                <td className="py-4 px-6 text-foreground/90 font-medium">
                  {service.name}
                </td>
                <td className="py-4 px-6 text-center text-foreground/80 border-l border-foreground/5">
                  {service.men}
                </td>
                <td className="py-4 px-6 text-center text-foreground/80 border-l border-foreground/5">
                  {service.women}
                </td>
                <td className="py-4 px-6 text-center border-b border-foreground/10">
                  {service.kids}
                </td>
                <td className="py-4 px-6 border-b border-foreground/10">
                  {service.products ? (
                    <div className="space-y-2">
                      {service.products.map((product, idx) => (
                        <TooltipProvider key={idx}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center space-x-1 text-sm text-foreground/80 hover:text-foreground">
                                <span>{product.name}</span>
                                <Info className="w-3.5 h-3.5" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-[300px] p-3">
                              <p className="font-medium">{product.brand}</p>
                              {product.description && (
                                <p className="text-sm mt-1 text-foreground/80">{product.description}</p>
                              )}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  ) : (
                    <span className="text-foreground/40 text-sm">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTable;
