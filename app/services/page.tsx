import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services | Data Entry & Processing Solutions',
  description: 'Comprehensive data entry services including data processing, form filling, document conversion, database management, and quality assurance. Professional data entry solutions tailored to your business needs.',
  keywords: [
    'data entry services',
    'data processing',
    'form filling',
    'document conversion',
    'database management',
    'data verification',
    'PDF conversion',
    'image data extraction',
    'data digitization',
  ],
  openGraph: {
    title: 'Our Services | Data Entry & Processing Solutions',
    description: 'Comprehensive data entry services tailored to meet your business requirements.',
  },
};

const services = [
  {
    id: 'data-entry',
    title: 'Data Entry & Data Processing',
    description: 'Our comprehensive data entry and processing services are designed to handle all types of data with precision and efficiency. We specialize in entering data from various sources including paper documents, digital files, forms, and databases.',
    features: [
      'Manual data entry from physical documents',
      'Digital data entry and processing',
      'Bulk data entry services',
      'Data cleaning and normalization',
      'Data formatting and structuring',
      'Multi-format data processing',
    ],
    useCases: [
      'Customer database creation and maintenance',
      'Product catalog data entry',
      'Financial records processing',
      'Inventory management data entry',
      'Survey and research data processing',
    ],
  },
  {
    id: 'form-filling',
    title: 'Form Filling & Data Digitization',
    description: 'Transform your paper-based forms and documents into digital formats with structured, searchable data. Our form filling services ensure accuracy and consistency across all your documents.',
    features: [
      'Paper form digitization',
      'Online form filling',
      'Application form processing',
      'Survey form data entry',
      'Registration form handling',
      'Custom form processing',
    ],
    useCases: [
      'Application form processing',
      'Survey data collection',
      'Registration form digitization',
      'Customer onboarding forms',
      'Compliance form processing',
    ],
  },
  {
    id: 'document-conversion',
    title: 'Document, PDF & Image Data Conversion',
    description: 'Convert your documents, PDFs, and images into structured, editable, and searchable data formats. We handle various file types and ensure high-quality conversion with OCR technology when needed.',
    features: [
      'PDF to text/data conversion',
      'Image to text extraction',
      'OCR (Optical Character Recognition)',
      'Document scanning and digitization',
      'Multi-format file conversion',
      'Structured data extraction',
    ],
    useCases: [
      'Invoice and receipt processing',
      'Legal document digitization',
      'Medical records conversion',
      'Educational certificate processing',
      'Archive document conversion',
    ],
  },
  {
    id: 'database',
    title: 'Database Creation & Management',
    description: 'Build and maintain comprehensive databases with clean, organized, and validated data structures. Our database services ensure data integrity, consistency, and accessibility.',
    features: [
      'Database design and creation',
      'Data migration services',
      'Database cleanup and optimization',
      'Data validation and deduplication',
      'Database maintenance and updates',
      'Custom database solutions',
    ],
    useCases: [
      'Customer relationship management (CRM)',
      'Product database management',
      'Employee database creation',
      'Inventory database systems',
      'Research data organization',
    ],
  },
  {
    id: 'verification',
    title: 'Data Verification & Quality Assurance',
    description: 'Multi-level verification processes ensure the highest accuracy and quality standards for your data. Our quality assurance team performs comprehensive checks to eliminate errors and inconsistencies.',
    features: [
      'Multi-level data verification',
      'Accuracy validation',
      'Data consistency checks',
      'Error detection and correction',
      'Quality control audits',
      'Compliance verification',
    ],
    useCases: [
      'Critical data verification',
      'Financial data validation',
      'Customer information verification',
      'Product data quality checks',
      'Compliance data validation',
    ],
  },
  {
    id: 'management',
    title: 'Online / Offline Data Management',
    description: 'Comprehensive data management solutions for both online and offline data processing requirements. We handle data from various sources and formats, ensuring seamless integration with your systems.',
    features: [
      'Cloud-based data management',
      'On-premise data processing',
      'Hybrid data management',
      'Real-time data updates',
      'Batch data processing',
      'Data synchronization services',
    ],
    useCases: [
      'E-commerce data management',
      'Enterprise data processing',
      'Legacy system data migration',
      'Multi-platform data integration',
      'Data backup and recovery',
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000000] mb-6">
              Our Services
            </h1>
            <p className="text-xl text-[#6E6E6E] leading-relaxed">
              Comprehensive data entry services tailored to meet your business requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const serviceImages = [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
                'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
              ];
              return (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                      <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src={serviceImages[index] || serviceImages[0]}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#B11217] to-[#8a0e12] text-white rounded-full flex items-center justify-center font-serif font-bold text-2xl flex-shrink-0 shadow-lg ring-4 ring-[#B11217]/20">
                            <span className="leading-none tracking-tight">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000]">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-lg text-[#6E6E6E] leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-serif font-bold text-[#000000] mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[#6E6E6E]">
                            <svg className="w-5 h-5 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-serif font-bold text-[#000000] mb-4">
                        Use Cases
                      </h3>
                      <ul className="space-y-3">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start text-[#6E6E6E]">
                            <svg className="w-5 h-5 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#B11217] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Contact us today to discuss your data entry requirements and get a free quote
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#B11217] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

