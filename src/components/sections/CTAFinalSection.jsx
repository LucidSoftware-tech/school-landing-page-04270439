'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import Image from "next/image";


export default function CTAFinalSection() {
  return (
    <section id="cta_final" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
      <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80" alt="Greenwood Academy campus grounds" width={800} height={600} className="absolute inset-0 w-full h-full object-cover" />
      {/* Dark scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-6 h-px bg-white/40" />
            <span className="text-xs text-white/70 font-body font-medium uppercase tracking-widest">Ready to Take the Next Step?</span>
            <div className="w-6 h-px bg-white/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-[-0.02em] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Come See Greenwood for Yourself
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 font-body text-lg leading-relaxed mb-10"
          >
            A 60-minute campus tour is the fastest way to know if Greenwood is the right fit. Our admissions team is available Monday through Saturday.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="rounded-full bg-accent text-white hover:bg-accent/90 font-body font-medium px-10 gap-2 text-base"
              >
                Schedule a Tour <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-body font-medium px-10 gap-2 text-base"
              >
                <Phone className="w-4 h-4" /> {siteConfig.contact.phone}
              </Button>
            </a>
          </motion.div>

          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 font-body text-sm"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contact.email}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Mon – Sat, 8am – 5pm</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
