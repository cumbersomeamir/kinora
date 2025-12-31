import { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import SecuritySection from '@/components/SecuritySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Kinora Services Info Pvt. Ltd. | Reliable Roots, Endless Growth.',
  description: 'Kinora Services Info Pvt. Ltd. delivers reliable, secure, and high-quality data entry and information processing solutions. Professional data entry services with accuracy, confidentiality, and timely delivery.',
  keywords: [
    'data entry services',
    'data processing',
    'data digitization',
    'document conversion',
    'database management',
    'data verification',
    'quality assurance',
    'data entry company',
    'information processing',
    'form filling services',
    'PDF data extraction',
    'image data conversion',
    'secure data entry',
    'confidential data processing',
    'professional data entry',
  ],
  openGraph: {
    title: 'Kinora Services Info Pvt. Ltd. | Reliable Roots, Endless Growth.',
    description: 'Professional data entry and information processing solutions with accuracy, confidentiality, and timely delivery.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseSection />
      <SecuritySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
