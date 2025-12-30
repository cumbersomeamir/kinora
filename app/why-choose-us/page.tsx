import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Why Choose Kinora | What Makes Us Different',
  description: 'Discover why businesses choose Kinora for data entry services: Experienced team, fast turnaround, competitive pricing, high accuracy, dedicated support, and scalable solutions.',
  keywords: [
    'why choose kinora',
    'data entry company benefits',
    'professional data entry',
    'accurate data entry',
    'reliable data processing',
  ],
  openGraph: {
    title: 'Why Choose Kinora | What Makes Us Different',
    description: 'Excellence in every aspect of data processing.',
  },
};

const features = [
  {
    title: 'Experienced Team',
    description: 'Our team consists of highly trained professionals with extensive experience in data entry and information processing across various industries. We invest in continuous training and development to ensure our team stays updated with the latest tools, techniques, and industry best practices.',
    icon: '👥',
    details: [
      'Years of collective industry experience',
      'Continuous training and skill development',
      'Expertise across multiple industries',
      'Certified data entry professionals',
    ],
  },
  {
    title: 'Fast Turnaround',
    description: 'We understand the importance of timely delivery. Our efficient workflows and dedicated resources ensure quick turnaround times without compromising quality. We have the capacity to handle urgent projects and meet tight deadlines.',
    icon: '⚡',
    details: [
      'Efficient workflow processes',
      'Dedicated project resources',
      'Flexible scheduling for urgent projects',
      'Real-time progress tracking',
    ],
  },
  {
    title: 'Competitive Pricing',
    description: 'We offer transparent, competitive pricing that provides excellent value for money. No hidden costs, just honest pricing for quality services. Our flexible pricing models accommodate projects of all sizes and budgets.',
    icon: '💰',
    details: [
      'Transparent pricing with no hidden fees',
      'Flexible pricing models',
      'Cost-effective solutions',
      'Value for money guarantee',
    ],
  },
  {
    title: 'High Accuracy',
    description: 'Our multi-level quality control processes ensure accuracy rates exceeding 99%. We take pride in delivering error-free data that you can trust. Every piece of data goes through multiple verification stages before final delivery.',
    icon: '✅',
    details: [
      '99%+ accuracy guarantee',
      'Multi-level quality control',
      'Comprehensive verification processes',
      'Error-free data delivery',
    ],
  },
  {
    title: 'Dedicated Support',
    description: 'Every client is assigned a dedicated account manager who ensures seamless communication and prompt resolution of any queries or concerns. Our support team is available throughout the project lifecycle.',
    icon: '🎯',
    details: [
      'Dedicated account manager',
      '24/7 project support',
      'Quick response times',
      'Personalized service approach',
    ],
  },
  {
    title: 'Scalable Solutions',
    description: 'Whether you need to process hundreds or millions of records, our scalable infrastructure can handle projects of any size efficiently. We can quickly ramp up resources to meet your growing needs.',
    icon: '📈',
    details: [
      'Handles projects of any size',
      'Scalable infrastructure',
      'Flexible resource allocation',
      'Enterprise-level capacity',
    ],
  },
];

const additionalBenefits = [
  {
    title: 'Security & Confidentiality',
    description: 'Strict security protocols and confidentiality measures protect your data at every stage of processing.',
  },
  {
    title: 'Technology-Driven',
    description: 'We leverage the latest tools and technologies to enhance efficiency and accuracy in data processing.',
  },
  {
    title: 'Industry Expertise',
    description: 'Experience across multiple industries including healthcare, finance, retail, education, and government.',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored services designed to meet your specific business requirements and workflow needs.',
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000000] mb-6">
              Why Choose Kinora
            </h1>
            <p className="text-xl text-[#6E6E6E] leading-relaxed">
              What Makes Us Different - Excellence in every aspect of data processing
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const featureImages = [
                  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80',
                  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
                  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
                ];
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={featureImages[index] || featureImages[0]}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h2 className="text-2xl font-serif font-bold text-[#000000] mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-[#6E6E6E] mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#6E6E6E]">
                        <svg className="w-4 h-4 text-[#B11217] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-12 text-center">
              Additional Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#6E6E6E] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-12 text-center">
              Kinora vs. Others
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#B11217] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-2">
                      Multi-Level Quality Control
                    </h3>
                    <p className="text-[#6E6E6E]">
                      Unlike many competitors who perform single-pass verification, we implement multiple quality checkpoints to ensure 99%+ accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#B11217] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-2">
                      Dedicated Account Management
                    </h3>
                    <p className="text-[#6E6E6E]">
                      Every client gets a dedicated account manager, ensuring personalized service and seamless communication throughout the project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#B11217] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-[#6E6E6E]">
                      Our security protocols exceed industry standards, with encrypted systems, strict access controls, and comprehensive confidentiality measures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#B11217] text-white rounded-full flex items-center justify-center font-bold mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#000000] mb-2">
                      Flexible & Scalable
                    </h3>
                    <p className="text-[#6E6E6E]">
                      We adapt to your needs, whether you require small batch processing or enterprise-level data management solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#B11217] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Experience the Kinora Difference
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Join hundreds of satisfied clients who trust Kinora for their data entry needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#B11217] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

