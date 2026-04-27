'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ds } from '@/lib/design-system';

const steps = [
  {
    number: '01',
    title: 'Submit Your Inquiry',
    description:
      'Complete our brief online inquiry form — it takes under five minutes. A dedicated admissions advisor will reach out within one business day to answer your questions and schedule a campus tour.',
  },
  {
    number: '02',
    title: 'Campus Visit & Application',
    description:
      'Tour our 14-acre campus with your child. After your visit, submit the full application including academic records, a teacher recommendation, and a brief student essay. No standardized test scores required for Grades K–6.',
  },
  {
    number: '03',
    title: 'Enrollment Confirmation',
    description:
      'Admission decisions are released on a rolling basis. Once accepted, secure your seat with an enrollment deposit. Our financial aid team is available to discuss tuition assistance at any point in the process.',
  },
];

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="py-28 md:py-36 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: header + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-primary/50" />
              <span className="text-xs text-primary font-body font-medium uppercase tracking-widest">Admissions</span>
            </div>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Three Steps to a Greenwood Seat
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Our admissions process is designed to be transparent and family-friendly — from your first inquiry to your enrollment confirmation, a dedicated advisor guides every step.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: 'Rolling Admissions', sub: 'Apply any time of year' },
                { label: 'Financial Aid', sub: 'Available for all grades' },
                { label: 'Open Houses', sub: 'Monthly, Sept–March' },
                { label: 'Decision Timeline', sub: '2–3 weeks after application' },
              ].map((fact) => (
                <div key={fact.label} className="rounded-[0.75rem] border border-border/60 bg-background p-4">
                  <div className="font-heading text-base font-semibold text-foreground mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{fact.label}</div>
                  <div className="text-xs text-muted-foreground font-body">{fact.sub}</div>
                </div>
              ))}
            </div>

            <a href="#contact">
              <Button
                size="lg"
                className="rounded-full bg-accent text-white hover:bg-accent/90 font-body font-medium px-8 gap-2"
              >
                Start Your Application <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Right: numbered editorial steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative pl-8 pb-14 last:pb-0"
              >
                {/* Vertical connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[11px] top-10 bottom-0 w-px bg-border" />
                )}

                {/* Step dot */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-card flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Giant number behind */}
                <div
                  className="font-heading text-8xl font-semibold text-muted-foreground/10 leading-none mb-2 -mt-2 select-none"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {step.number}
                </div>

                <h3
                  className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 -mt-6"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
