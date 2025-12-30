import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Data Security & Confidentiality | Your Data Is Safe With Us',
  description: 'Learn about Kinora\'s comprehensive data security measures: Encrypted systems, confidential handling, secure storage, access controls, and compliance protocols. Your data is protected at every stage.',
  keywords: [
    'data security',
    'data confidentiality',
    'secure data entry',
    'data encryption',
    'NDA data processing',
    'secure data storage',
    'data privacy',
  ],
  openGraph: {
    title: 'Data Security & Confidentiality | Your Data Is Safe With Us',
    description: 'Comprehensive security measures protect your information.',
  },
};

const securityFeatures = [
  {
    title: 'Encrypted Systems',
    description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols. We employ SSL/TLS encryption for data transmission and AES-256 encryption for data storage.',
    details: [
      'SSL/TLS encryption for data transmission',
      'AES-256 encryption for data at rest',
      'End-to-end encryption for sensitive data',
      'Regular security audits and updates',
      'Compliance with encryption standards',
    ],
  },
  {
    title: 'Confidential Handling',
    description: 'Every team member signs strict non-disclosure agreements (NDAs). We maintain complete confidentiality and never share your data with any third parties without explicit authorization.',
    details: [
      'Mandatory NDAs for all team members',
      'Strict confidentiality protocols',
      'No third-party data sharing',
      'Regular confidentiality training',
      'Confidentiality breach prevention measures',
    ],
  },
  {
    title: 'Secure Storage',
    description: 'Your data is stored in secure, access-controlled environments with regular backups and disaster recovery protocols. We maintain multiple redundant storage systems for maximum reliability.',
    details: [
      'Access-controlled storage environments',
      'Regular automated backups',
      'Disaster recovery protocols',
      'Redundant storage systems',
      'Secure data retention policies',
    ],
  },
  {
    title: 'Access Controls',
    description: 'Role-based access controls ensure that only authorized personnel can access your data. All access is logged and monitored for security compliance.',
    details: [
      'Role-based access control (RBAC)',
      'Multi-factor authentication',
      'Access logging and monitoring',
      'Regular access reviews',
      'Principle of least privilege',
    ],
  },
  {
    title: 'Physical Security',
    description: 'Our facilities are secured with physical access controls, surveillance systems, and restricted access areas. Only authorized personnel can access data processing areas.',
    details: [
      'Secure facility access controls',
      'Surveillance and monitoring systems',
      'Restricted access areas',
      'Visitor management protocols',
      'Physical security audits',
    ],
  },
  {
    title: 'Compliance & Certifications',
    description: 'We adhere to industry standards and compliance requirements. Our processes are designed to meet data protection regulations and industry best practices.',
    details: [
      'GDPR compliance measures',
      'Data protection regulations adherence',
      'Industry best practices',
      'Regular compliance audits',
      'Certification maintenance',
    ],
  },
];

const securityProtocols = [
  {
    stage: 'Data Collection',
    measures: [
      'Secure upload portals with encryption',
      'Verified client authentication',
      'Secure file transfer protocols',
      'Initial data validation',
    ],
  },
  {
    stage: 'Data Processing',
    measures: [
      'Isolated processing environments',
      'Access-controlled workstations',
      'No external device connections',
      'Real-time monitoring',
    ],
  },
  {
    stage: 'Data Storage',
    measures: [
      'Encrypted storage systems',
      'Regular backup procedures',
      'Access logging and audit trails',
      'Secure data retention',
    ],
  },
  {
    stage: 'Data Delivery',
    measures: [
      'Secure delivery channels',
      'Encrypted file transfer',
      'Delivery confirmation',
      'Post-delivery data handling',
    ],
  },
];

export default function DataSecurityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000000] mb-6">
              Data Security & Confidentiality
            </h1>
            <p className="text-xl text-[#6E6E6E] leading-relaxed">
              Your Data Is Safe With Us - Comprehensive security measures protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {securityFeatures.map((feature, index) => {
                const securityImages = [
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
                  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
                  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
                ];
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg overflow-hidden"
                  >
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={securityImages[index] || securityImages[0]}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
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

      {/* Security Protocols by Stage */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-12 text-center">
              Security at Every Stage
            </h2>
            <div className="space-y-8">
              {securityProtocols.map((protocol, index) => {
                const protocolImages = [
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
                  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
                  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
                ];
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={protocolImages[index] || protocolImages[0]}
                          alt={protocol.stage}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-[#000000] mb-4">
                          {protocol.stage}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {protocol.measures.map((measure, idx) => (
                            <div key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              <span className="text-[#6E6E6E]">{measure}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24 bg-[#B11217] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Trust & Compliance
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              Kinora implements controlled access, secure storage, and confidentiality protocols to protect client information at every stage. We are committed to maintaining the highest standards of data security and privacy.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-left max-w-3xl mx-auto border border-white/20">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Our Commitment
              </h3>
              <ul className="space-y-4 text-lg text-white/95">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zero tolerance for data breaches or unauthorized access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous improvement of security measures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent security practices and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-6">
              Have Questions About Security?
            </h2>
            <p className="text-lg text-[#6E6E6E] mb-8">
              Our security team is available to discuss our security measures and address any concerns you may have.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#B11217] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#8a0e12] transition-colors"
            >
              Contact Our Security Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

