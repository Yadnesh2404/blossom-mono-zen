import React from 'react';

interface ServiceTableProps {
  title: string;
  services: {
    name: string;
    men: string | React.ReactNode;
    women: string | React.ReactNode;
  }[];
}

const ServiceTable: React.FC<ServiceTableProps> = ({ title, services }) => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-heading font-bold text-foreground/90 mb-8 text-center">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-xl overflow-hidden border border-foreground/8 shadow-md table-luxury"
          style={{ background: 'linear-gradient(145deg, hsl(40 33% 97%), hsl(36 30% 96%))' }}>
          <thead>
            <tr style={{ background: 'linear-gradient(90deg, hsl(20 10% 12%), hsl(20 10% 15%))' }}>
              <th className="py-4 px-6 text-left font-heading font-bold text-sm uppercase tracking-wider text-white/95 w-2/5">
                Service / Treatment
              </th>
              <th className="py-4 px-6 text-center font-heading font-bold text-sm uppercase tracking-wider text-white/95 border-l border-white/10">
                Men
              </th>
              <th className="py-4 px-6 text-center font-heading font-bold text-sm uppercase tracking-wider text-white/95 border-l border-white/10">
                Women
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/5">
            {services.map((service, index) => (
              <tr
                key={index}
                className="transition-colors duration-200"
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
                <td className="py-4 px-6 text-foreground/85 font-medium">
                  {service.name}
                </td>
                <td className="py-4 px-6 text-center text-foreground/75 border-l border-foreground/5">
                  {service.men}
                </td>
                <td className="py-4 px-6 text-center text-foreground/75 border-l border-foreground/5">
                  {service.women}
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
