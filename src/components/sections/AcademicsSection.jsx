'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { ds } from '@/lib/design-system';
import Image from "next/image";


const programs = [
  {
    id: 'lower',
    label: 'Lower School',
    grades: 'Grades K–4',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    headline: 'Curiosity-Led Learning in the Early Years',
    description:
      'Our Socratic Lower School classrooms spark a lifelong love of learning. Small class sizes, project-based inquiry, and dedicated literacy coaches ensure every child builds a strong academic foundation.',
    highlights: [
      'Socratic discussion from Kindergarten',
      'Dedicated reading & literacy specialists',
      'Integrated arts and music curriculum',
      'Social-emotional learning woven into every day',
      'Average class size of 16 students',
    ],
  },
  {
    id: 'middle',
    label: 'Middle School',
    grades: 'Grades 5–8',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80',
    headline: 'Building Depth, Voice, and Independence',
    description:
      'Middle school is where students discover who they are as learners. Interdisciplinary projects, elective exploration, and advisory programs help students develop their voice and navigate adolescence with confidence.',
    highlights: [
      'Interdisciplinary humanities & STEM projects',
      'Weekly advisory with a dedicated mentor',
      'Introduction to research and debate',
      'Elective rotation: coding, ceramics, drama, robotics',
      'Annual community service requirement',
    ],
  },
  {
    id: 'upper',
    label: 'Upper School',
    grades: 'Grades 9–12',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
    headline: 'AP, Dual Enrollment, and College-Ready Mastery',
    description:
      'Our Upper School offers 18 AP courses, dual-enrollment partnerships with regional universities, and a senior capstone program. Every graduate leaves with a portfolio, a plan, and the resilience to execute it.',
    highlights: [
      '18 AP courses across all disciplines',
      'Dual-enrollment with regional universities',
      'Senior Capstone: year-long independent project',
      'College counseling beginning in Grade 10',
      '98% four-year college acceptance rate',
    ],
  },
];

export default function AcademicsSection() {
  const [active, setActive] = useState('lower');
  const activeProgram = programs.find((p) => p.id === active);

  return (
    <section id="academics" className="py-28 md:py-36 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-primary/50" />
            <span className="text-xs text-primary font-body font-medium uppercase tracking-widest">Academics</span>
          </div>
          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-[-0.02em] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Rigorous Curriculum, Taught by Real Mentors
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            From our Socratic Lower School classrooms to AP and dual-enrollment courses in Grade 12, every program is designed to stretch thinking and build mastery.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-body font-medium transition-all duration-200 ${
                active === p.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {p.label}
              <span className="ml-2 text-xs opacity-70">{p.grades}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          {activeProgram && (
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-[0.75rem] overflow-hidden shadow-xl">
                <Image src={activeProgram.image} alt={activeProgram.label} width={800} height={600} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-primary text-primary-foreground text-xs font-body font-medium px-3 py-1">
                    {activeProgram.grades}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {activeProgram.headline}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  {activeProgram.description}
                </p>
                <ul className="space-y-3">
                  {activeProgram.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground font-body text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 mt-8 text-primary font-body font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  View Academic Programs <span>&#8594;</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
