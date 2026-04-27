'use client';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ds } from '@/lib/design-system';
import Image from "next/image";


const faqs = [
  {
    q: 'What is the tuition range at Greenwood Academy?',
    a: 'Tuition ranges from $18,500 per year for Kindergarten to $26,800 per year for Grade 12. Tuition includes all textbooks, technology fees, and most extracurricular activities. A detailed fee schedule is available upon request.',
  },
  {
    q: 'Does Greenwood offer financial aid or scholarships?',
    a: 'Yes. Approximately 28% of Greenwood students receive need-based financial aid. We also offer merit scholarships for exceptional academic achievement and performing arts talent. Aid applications are reviewed on a rolling basis alongside admissions decisions.',
  },
  {
    q: 'What is the average class size?',
    a: 'Our school-wide student-teacher ratio is 18:1. Average class sizes are 14 students in Lower School (K–4), 16 in Middle School (5–8), and 18 in Upper School (9–12). AP and elective courses are often smaller.',
  },
  {
    q: 'When is the application deadline?',
    a: 'Greenwood uses rolling admissions — there is no single deadline. We encourage families to apply by January 15 for priority consideration for the following fall. Applications received after that date are reviewed as space permits.',
  },
  {
    q: 'Are standardized test scores required for admission?',
    a: 'Standardized test scores are not required for Grades K–6. For Grades 7–12, we accept ISEE or SSAT scores but do not require them. We take a holistic view of each applicant, including academic records, teacher recommendations, and a student interview.',
  },
  {
    q: 'How does the advisory program work?',
    a: 'Every Greenwood student is assigned a faculty advisor who meets with them weekly in a small group of 8–10 students. Advisors serve as the primary point of contact for parents and are responsible for monitoring academic progress and social-emotional wellbeing.',
  },
  {
    q: 'Does Greenwood offer transportation?',
    a: 'We partner with a regional transportation provider to offer bus service from 12 pickup zones across the area. Transportation fees are separate from tuition. Many families also participate in our carpool coordination program.',
  },
  {
    q: 'What college counseling support is available?',
    a: 'College counseling begins formally in Grade 10 with a dedicated college counselor. By Grade 12, each student has a personalized college list, essay support, and interview preparation. Our counselors maintain relationships with admissions offices at over 200 colleges.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 md:py-36 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-primary/50" />
              <span className="text-xs text-primary font-body font-medium uppercase tracking-widest">Admissions FAQ</span>
            </div>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Answers to What Every Parent Asks First
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Tuition, financial aid, enrollment timelines, class sizes — we&apos;ve answered the questions families ask most before scheduling their first tour.
            </p>

            {/* Decorative image */}
            <div className="relative aspect-[4/3] rounded-[0.75rem] overflow-hidden shadow-lg hidden lg:block">
              <Image src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80" alt="Greenwood Academy library" width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p
                  className="font-heading italic text-white text-xl"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  &ldquo;Every question deserves a real answer.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-[0.75rem] border border-border/60 bg-card px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="font-body font-medium text-foreground text-left py-5 hover:no-underline hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
