'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/config/navigation';
import { Button } from '@/components/ui/Button';

const OakLeafIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c0 0-8-5-8-12a8 8 0 0 1 16 0c0 7-8 12-8 12z" />
    <path d="M12 21V9" />
    <path d="M12 13l-3-3" />
    <path d="M12 17l3-3" />
  </svg>
);

export default function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <OakLeafIcon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span
              className="font-heading font-semibold tracking-[0.04em] text-[22px] text-foreground"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Greenwood Academy
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#admissions">
              <Button
                variant="primary"
                size="md"
                className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium"
              >
                Schedule a Tour
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-b border-border shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a href="#admissions" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" size="md" className="w-full rounded-full bg-accent text-accent-foreground mt-2">
                  Schedule a Tour
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
