import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import AcademicsSection from '@/components/sections/AcademicsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AdmissionsSection from '@/components/sections/AdmissionsSection';
import CampusLifeSection from '@/components/sections/CampusLifeSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTAFinalSection from '@/components/sections/CTAFinalSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata = {
  title: 'Greenwood Academy — Where Curious Kids Become Confident Leaders',
  description:
    'Greenwood Academy is a K-12 private school blending rigorous academics with social-emotional learning across all 13 grade levels.',
};

export default function HomePage() {
  return (
    <main className="noise-bg">
      <HeroSection />
      <StorySection />
      <AcademicsSection />
      <FeaturesSection />
      <AdmissionsSection />
      <CampusLifeSection />
      <TestimonialsSection />
      <FAQSection />
      <CTAFinalSection />
      <ContactSection />
    </main>
  );
}
