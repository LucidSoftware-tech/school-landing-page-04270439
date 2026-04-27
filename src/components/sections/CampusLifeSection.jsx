'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ds } from '@/lib/design-system';
import Image from "next/image";


const galleryItems = [
  {
    title: 'Athletics & Sports',
    caption: '18 varsity teams, state champions in cross-country & debate',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80',
    tall: true,
  },
  {
    title: 'Visual Arts Studio',
    caption: 'Ceramics, painting, photography, and digital design',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=80',
    tall: false,
  },
  {
    title: 'Student Government',
    caption: 'Real decision-making power over school policy and events',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
    tall: false,
  },
  {
    title: 'Science & Robotics',
    caption: 'State-of-the-art lab and regional robotics competition team',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80',
    tall: true,
  },
  {
    title: 'Performing Arts',
    caption: 'Annual musical, chamber choir, and spring drama showcase',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    tall: false,
  },
  {
    title: 'Outdoor Learning',
    caption: 'Working garden, nature trails, and environmental science',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=700&q=80',
    tall: false,
  },
];

export default function CampusLifeSection() {
  return (
    <section id="campus_life" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-primary/50" />
              <span className="text-xs text-primary font-body font-medium uppercase tracking-widest">Campus Life</span>
            </div>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-[-0.02em] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              14 Acres Where Students Actually Want to Be
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Athletics, arts, student government, and 30+ extracurricular clubs give every Greenwood student a place to belong beyond the classroom.
            </p>
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            See Campus Life <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid mb-4 group relative rounded-[0.75rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`relative ${item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image src={item.image} alt={item.title} width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="font-heading text-white text-xl font-semibold mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-body text-xs leading-relaxed">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '30+', label: 'Extracurricular Clubs' },
            { value: '18', label: 'Varsity Sports Teams' },
            { value: '14', label: 'Acres of Campus' },
            { value: '100%', label: 'Students in at Least One Activity' },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-[0.75rem] border border-border/60 bg-card p-6">
              <div
                className="font-heading text-4xl font-semibold text-primary mb-1"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
