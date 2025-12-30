import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Process | How Kinora Works',
  description: 'Learn about Kinora&apos;s streamlined data entry process: Client onboarding, data collection, entry & verification, quality assurance, and delivery. Discover how we ensure accuracy and timely delivery.',
  keywords: [
    'data entry process',
    'data processing workflow',
    'quality assurance process',
    'data verification process',
    'data entry workflow',
  ],
  openGraph: {
    title: 'Our Process | How Kinora Works',
    description: 'Learn about Kinora&apos;s streamlined approach to data excellence.',
  },
};

const steps = [
  {
    number: '01',
    title: 'Client Onboarding',
    description: 'We begin by understanding your specific requirements, data formats, and project timelines. Our team works closely with you to establish clear communication channels and project parameters.',
    details: [
      'Initial consultation to understand your needs',
      'Project scope and timeline discussion',
      'Data format and delivery requirements',
      'Communication channel setup',
      'NDA and confidentiality agreement',
      'Project kickoff meeting',
    ],
  },
  {
    number: '02',
    title: 'Data Collection & Classification',
    description: 'Your data is securely collected and systematically classified according to predefined categories. We ensure proper organization and structure from the outset.',
    details: [
      'Secure data collection from various sources',
      'Data format analysis and classification',
      'Data organization and structuring',
      'Initial quality assessment',
      'Data inventory creation',
      'Classification schema development',
    ],
  },
  {
    number: '03',
    title: 'Entry & Verification',
    description: 'Trained professionals enter your data using established protocols and quality standards. Each entry is immediately verified for accuracy and completeness.',
    details: [
      'Data entry by trained professionals',
      'Real-time verification during entry',
      'Format consistency checks',
      'Completeness validation',
      'Initial accuracy review',
      'Progress tracking and reporting',
    ],
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Multi-level quality checks are performed by our QA team. We validate data accuracy, consistency, and compliance with your specifications before final approval.',
    details: [
      'Multi-level quality control checks',
      'Accuracy validation and error detection',
      'Data consistency verification',
      'Compliance with client specifications',
      'Random sampling and audits',
      'Final quality approval process',
    ],
  },
  {
    number: '05',
    title: 'Delivery & Support',
    description: 'Finalized data is delivered in your preferred format with comprehensive documentation. Our support team remains available for any clarifications or follow-up requirements.',
    details: [
      'Data delivery in preferred format',
      'Comprehensive documentation provided',
      'Delivery confirmation and acceptance',
      'Post-delivery support and assistance',
      'Feedback collection and analysis',
      'Ongoing maintenance and updates if required',
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000000] mb-6">
              Our Process
            </h1>
            <p className="text-xl text-[#6E6E6E] leading-relaxed">
              How Kinora Works - A streamlined approach to data excellence
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {steps.map((step, index) => {
              const processImages = [
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
              ];
              return (
                <div key={index} className="relative">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-xl mb-4">
                        <Image
                          src={processImages[index] || processImages[0]}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#B11217] to-[#8a0e12] text-white rounded-full flex items-center justify-center font-serif font-bold text-2xl shadow-lg ring-4 ring-[#B11217]/20">
                          <span className="leading-none tracking-tight">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-serif font-semibold text-[#000000] mb-4">
                        Process Details
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-[#6E6E6E]">
                            <svg className="w-5 h-5 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
                )}
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-8 text-center">
              Why Our Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                  Structured Approach
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  Our well-defined process ensures consistency and reliability across all projects. Each step is carefully planned and executed to meet the highest standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                  Quality Focus
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  Multiple quality checkpoints throughout the process ensure that errors are caught and corrected early, resulting in high accuracy rates.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                  Transparent Communication
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  Regular updates and clear communication channels keep you informed about project progress at every stage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                  Scalable & Flexible
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  Our process adapts to projects of any size, from small batches to enterprise-level data processing requirements.
                </p>
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
              Ready to Experience Our Process?
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Get started with Kinora today and see how our streamlined process delivers results
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#B11217] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

