'use client';
import { motion } from 'framer-motion';
import { Users, BookOpen, Leaf, Trophy, Heart, Globe } from 'lucide-react';
import { ds } from '@/lib/design-system';
import Image from "next/image";


const features = [
  {
    icon: Users,
    title: '18:1 Student-Teacher Ratio',
    description:
      'Every student is known by name. Our intentionally small classes mean teachers can meet each learner exactly where they are — and push them further.',
    size: 'large',
  },
  {
    icon: BookOpen,
    title: 'Socratic Classrooms',
    description:
      'Discussion-based learning from Kindergarten builds the critical thinking and articulation skills that define Greenwood graduates.',
    size: 'small',
  },
  {
    icon: Leaf,
    title: '14-Acre Green Campus',
    description:
      'Outdoor learning spaces, a working garden, and nature trails make the campus itself a teaching tool.',
    size: 'small',
  },
  {
    icon: Trophy,
    title: '30+ Extracurricular Clubs',
    description:
      'From robotics to student government to chamber choir, every student finds their place beyond the classroom.',
    size: 'wide',
  },
  {
    icon: Heart,
    title: 'Dedicated Advisory Program',
    description:
      'Every student has a faculty advisor who meets with them weekly — a consistent adult advocate throughout their Greenwood years.',
    size: 'small',
  },
  {
    icon: Globe,
    title: 'Global Perspectives Curriculum',
    description:
      'Mandatory language study, international exchange programs, and a global issues seminar prepare students for a connected world.',
    size: 'small',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-primary/50" />
            <span className="text-xs text-primary font-body font-medium uppercase tracking-widest">The Greenwood Difference</span>
          </div>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Six Things Greenwood Families Notice First
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            Parents tell us these are the details that made Greenwood feel unmistakably different from the first open-house visit.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">
          {/* Large featured card — col-span-2 row-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[0.75rem] overflow-hidden shadow-lg group"
          >
            <Image src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80" alt="Students in a Greenwood classroom" width={800} height={600} className="w-full h-full object-cover min-h-[320px] transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3
                className="font-heading text-white text-3xl font-semibold mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                18:1 Student-Teacher Ratio
              </h3>
              <p className="text-white/75 font-body text-sm leading-relaxed max-w-sm">
                Every student is known by name. Our intentionally small classes mean teachers can meet each learner exactly where they are — and push them further.
              </p>
            </div>
          </motion.div>

          {/* Small cards */}
          {features.slice(1, 3).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="rounded-[0.75rem] border border-border/60 bg-card p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3
                className="font-heading text-xl font-semibold text-foreground mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}

          {/* Wide card — col-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="md:col-span-2 rounded-[0.75rem] border border-primary/20 bg-gradient-to-br from-primary/8 via-card to-accent/5 p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220"
          >
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3
                  className="font-heading text-xl font-semibold text-foreground mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  30+ Extracurricular Clubs
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  From robotics to student government to chamber choir, every student finds their place beyond the classroom. Greenwood students average 2.4 activities per year.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Last two small cards */}
          {features.slice(4).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 + i * 0.06 }}
              className="rounded-[0.75rem] border border-border/60 bg-card p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3
                className="font-heading text-xl font-semibold text-foreground mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
