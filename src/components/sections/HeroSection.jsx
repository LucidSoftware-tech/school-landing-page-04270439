'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from "next/image";


export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80" alt="Students learning at Greenwood Academy" width={800} height={600} className="absolute inset-0 w-full h-full object-cover" />

      {/* Dark scrim overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl pt-24">
        <div className="max-w-2xl">
          {/* Eyebrow with hairline motif */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-primary/70" />
            <span className="text-white/80 text-sm font-body font-medium tracking-widest uppercase">
              K-12 Private School &middot; Est. in Greenwood
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Where Curious Kids Become Confident Leaders
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white/80 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl"
          >
            Greenwood Academy blends rigorous academics with social-emotional learning across all 13 grade levels — so every child graduates ready for college, career, and life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#admissions">
              <Button
                size="lg"
                className="rounded-full bg-accent text-white hover:bg-accent/90 font-body font-medium px-8 gap-2 text-base"
              >
                Schedule a Tour <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#academics">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-body font-medium px-8 text-base"
              >
                Explore Our Programs
              </Button>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Image src={`https://i.pravatar.cc/40?u=parent${i}`} alt="Greenwood parent" width={800} height={600} className="w-9 h-9 rounded-full border-2 border-white/30 object-cover" />
              ))}
            </div>
            <p className="text-white/70 text-sm font-body">
              Trusted by <span className="text-white font-medium">500+ families</span> across the region
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-16 right-8 md:right-16 hidden md:block"
      >
        <div className="bg-card/95 backdrop-blur-sm rounded-[0.75rem] border border-border/60 p-5 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="font-heading text-3xl font-semibold text-primary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>98%</div>
              <div className="text-xs text-muted-foreground font-body mt-0.5">College Acceptance</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-heading text-3xl font-semibold text-primary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>18:1</div>
              <div className="text-xs text-muted-foreground font-body mt-0.5">Student-Teacher Ratio</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-heading text-3xl font-semibold text-primary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>20+</div>
              <div className="text-xs text-muted-foreground font-body mt-0.5">Years of Excellence</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
