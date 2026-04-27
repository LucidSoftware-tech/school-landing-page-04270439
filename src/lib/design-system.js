export const ds = {
  // Section spacing — airy luxury
  sectionSpacing: 'py-28 md:py-36',
  sectionSpacingMd: 'py-20 md:py-28',

  // Max width container
  maxWidth: 'container mx-auto px-4 md:px-6 max-w-7xl',
  maxWidthNarrow: 'container mx-auto px-4 md:px-6 max-w-4xl',
  maxWidthWide: 'container mx-auto px-4 md:px-6 max-w-[1400px]',

  // Card styles — warm hairline
  card: 'rounded-[0.75rem] border border-border/60 bg-card p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220',
  cardFeatured: 'rounded-[0.75rem] border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-10 shadow-xl shadow-primary/10',
  cardGlass: 'rounded-[0.75rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 text-white shadow-[0_8px_32px_rgb(0_0_0/0.12)]',

  // Badge styles
  badge: {
    default: 'rounded-full bg-primary/10 text-primary text-xs font-medium px-3 py-1',
    accent: 'rounded-full bg-accent/10 text-accent text-xs font-medium px-3 py-1',
    muted: 'rounded-full bg-muted text-muted-foreground text-xs font-medium px-3 py-1',
  },

  // Page animation
  pageAnimation: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  },

  // Stagger
  stagger: {
    container: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.06 } },
    },
    item: {
      hidden: { opacity: 0, y: 16 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
    },
  },

  // Hover
  hover: 'transition-all duration-220 hover:-translate-y-0.5 hover:shadow-md',
};
