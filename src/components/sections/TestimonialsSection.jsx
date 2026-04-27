'use client';
import { motion } from 'framer-motion';
import { ds } from '@/lib/design-system';
import Image from "next/image";


const testimonials = [
  {
    quote:
      'Greenwood saw our daughter as a whole person from day one. By Grade 8, she was leading student council and writing for the school paper. She arrived shy — she leaves confident.',
    name: 'Margaret & David Chen',
    role: 'Parents of a Grade 10 student',
    avatar: 'https://i.pravatar.cc/150?u=parent_chen',
    years: '6 years at Greenwood',
  },
  {
    quote:
      'The 18:1 ratio isn\'t just a number. My son\'s math teacher noticed he was struggling in October and had him caught up by November. That kind of attention is rare.',
    name: 'Priya Nair',
    role: 'Parent of a Grade 7 student',
    avatar: 'https://i.pravatar.cc/150?u=parent_nair',
    years: '3 years at Greenwood',
  },
  {
    quote:
      'We toured six schools. Greenwood was the only one where the students looked genuinely happy to be there. That told us everything we needed to know.',
    name: 'James & Sofia Reyes',
    role: 'Parents of Grade 4 and Grade 9 students',
    avatar: 'https://i.pravatar.cc/150?u=parent_reyes',
    years: '5 years at Greenwood',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image with dark scrim */}
      <Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80" alt="Greenwood Academy campus" width={800} height={600} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
      {/* Primary color overlay for brand moment */}
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px bg-white/40" />
            <span className="text-xs text-white/70 font-body font-medium uppercase tracking-widest">What Greenwood Families Say</span>
            <div className="w-6 h-px bg-white/40" />
          </div>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Heard Straight from Our Parent Community
          </h2>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto leading-relaxed">
            These are the words of real Greenwood families — parents who once sat exactly where you are now, wondering if this was the right school.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-[0.75rem] border border-white/10 bg-white/5 backdrop-blur-md p-8 text-white shadow-[0_8px_32px_rgb(0_0_0/0.12)] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-220"
            >
              {/* Quote mark */}
              <div
                className="font-heading text-5xl text-white/20 leading-none mb-4 -mt-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                &ldquo;
              </div>
              <p className="font-heading italic text-lg text-white/90 leading-relaxed mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Image src={t.avatar} alt={t.name} width={800} height={600} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                <div>
                  <div className="font-body font-medium text-white text-sm">{t.name}</div>
                  <div className="font-body text-white/60 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="rounded-full bg-white/10 text-white/70 text-xs font-body px-3 py-1">
                    {t.years}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-white/50 font-body text-sm">
            Join <span className="text-white/80 font-medium">500+ families</span> who call Greenwood home
          </p>
        </motion.div>
      </div>
    </section>
  );
}
