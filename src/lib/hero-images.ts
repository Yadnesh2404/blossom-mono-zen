// Hero images configuration for consistent usage across the app
export const heroImages = {
  hair: {
    image: '/images/hero/hair.jpg',
    title: 'LUXURY HAIR STUDIO ',
    description: 'Luxury haircuts, hair colour, keratin, smoothening and premium hair care services in Andheri West, Mumbai.',
    overlay: 'rgba(0, 0, 0, 0.4)' as const,
    textColor: 'text-white' as const
  },
  skin: {
    image: '/images/hero/skin.jpg',
    title: 'LUXURY SKIN & BEAUTY CARE',
    description: 'Premium facials, glow care and luxury skin services in Andheri West, Mumbai.',
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
    title: 'LUXURY MAKEUP STUDIO',
    description: 'Luxury bridal makeup, party makeup and glam beauty services in Andheri West, Mumbai designed to enhance your elegance, confidence and special moments.',
    overlay: 'rgba(0, 0, 0, 0.4)' as const,
    textColor: 'text-white' as const
  },
  spa: {
    image: '/images/hero/spa.jpg',
    title: 'LUXURY SPA & WELLNESS',
    description: 'Premium spa, body massage and relaxation therapies in Andheri West, Mumbai designed to restore calm, comfort and luxury wellness. ',
    overlay: 'rgba(0, 0, 0, 0.4)' as const,
    textColor: 'text-white' as const
  }
} as const;

// Dedicated service-page hero images (separate from the homepage carousel)
// Falls back to hero images when a service-specific image is not yet available
export const servicePageImages: Record<keyof typeof heroImages, { image: string; title: string; description: string; overlay: string; textColor: string }> = {
  hair: {
    ...heroImages.hair,
    // TODO: Replace with '/images/services/HAIR/hair_hero.png' when available
  },
  skin: {
    ...heroImages.skin,
    // TODO: Replace with '/images/services/SKIN/skin_hero.png' when available
  },
  nails: {
    ...heroImages.nails,
    // TODO: Replace with '/images/services/NAILS/nails_hero.png' when available
  },
  makeup: {
    ...heroImages.makeup,
    // TODO: Replace with '/images/services/MAKEUP/makeup_hero.png' when available
  },
  spa: {
    ...heroImages.spa,
    // TODO: Replace with '/images/services/SPA/spa_hero.png' when available
  },
};

export type ServiceType = keyof typeof heroImages;
