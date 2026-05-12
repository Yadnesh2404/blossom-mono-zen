// Hero images configuration for consistent usage across the app
export const heroImages = {
  hair: {
    image: '/images/hero/hair.jpg',
    title: 'HAIR ARTISTRY',
    description: 'Precision cuts and stunning styles',
    overlay: 'rgba(0, 0, 0, 0.4)' as const,
    textColor: 'text-white' as const
  },
  skin: {
    image: '/images/hero/skin.jpg',
    title: 'SKIN SOLUTIONS',
    description: 'Rejuvenating treatments for glowing skin',
    overlay: 'rgba(0, 0, 0, 0.45)' as const,
    textColor: 'text-white' as const
  },
  nails: {
    image: '/images/hero/nails.jpg',
    title: 'NAIL PERFECTION',
    description: 'Elegant manicures and pedicures',
    overlay: 'rgba(0, 0, 0, 0.45)' as const,
    textColor: 'text-white' as const
  },
  makeup: {
    image: '/images/hero/makeup.jpg',
    title: 'MAKEUP EXCELLENCE',
    description: 'Flawless beauty, expertly crafted',
    overlay: 'rgba(0, 0, 0, 0.4)' as const,
    textColor: 'text-white' as const
  },
  spa: {
    image: '/images/hero/spa.jpg',
    title: 'SPA',
    description: 'Ultimate relaxation and rejuvenation',
    overlay: 'rgba(0, 0, 0, 0.4)' as const,
    textColor: 'text-white' as const
  }
} as const;

export type ServiceType = keyof typeof heroImages;
