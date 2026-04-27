'use client';
import { motion } from 'framer-motion';
import { ds } from '@/lib/design-system';
import Image from "next/image";


export default function StorySection() {
  return (
    <section id="story" className="py-28 md:py-36 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[0.75rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" alt="Greenwood Academy founders and students" width={800} height={600} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating pull-quote card */}
            <div className="absolute -bottom-8 -right-6 md:-right-10 bg-card rounded-[0.75rem] border border-border/60 shadow-xl p-6 max-w-[220px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-px bg-primary/50" />
                <span className="text-xs text-muted-foreground font-body uppercase tracking-widest">Founded</span>
              </div>
              <p className="font-heading text-2xl font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Over two decades of trust</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="pt-8 md:pt-0"
          >
            {/* Eyebrow with hairline motif */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-primary/50" />
              <span className="text-xs text-primary font-body font-medium uppercase tracking-widest">Our Story</span>
            </div>

            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Built on One Belief: Every Child Thrives
            </h2>

            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Greenwood Academy was founded on the conviction that academic rigor and genuine care for each student are not a trade-off — they are inseparable.
            </p>

            {/* Pull-quote */}
            <blockquote className="border-l-2 border-primary/40 pl-5 my-8">
              <p className="font-heading italic text-xl text-foreground/80 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                &ldquo;For over two decades, Greenwood families have trusted us to see the whole child — not just the transcript.&rdquo;
              </p>
            </blockquote>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Our founders — two educators who believed that a school could be both demanding and deeply humane — built Greenwood from a single classroom into a thriving K-12 community of 600 students. That founding spirit still shapes every decision we make today.
            </p>

            <a
              href="#academics"
              className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all duration-200"
            >
              Meet Our Founders
              <span className="text-primary">&#8594;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
