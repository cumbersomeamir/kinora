import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Kinora',
  description: 'Contact Kinora Services Info Pvt. Ltd. for all your data entry needs. Get a free quote, discuss your requirements, or ask questions. We\'re here to help.',
  keywords: [
    'contact kinora',
    'data entry quote',
    'data entry services contact',
    'get in touch',
    'data entry inquiry',
  ],
  openGraph: {
    title: 'Contact Us | Get in Touch with Kinora',
    description: 'Contact Kinora for all your data entry needs. Get a free quote today.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

