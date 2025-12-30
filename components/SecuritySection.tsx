import Link from 'next/link';
import Image from 'next/image';

const securityFeatures = [
  {
    title: 'Encrypted Systems',
    description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols. We employ SSL/TLS encryption for data transmission and AES-256 encryption for data storage.',
  },
  {
    title: 'Confidential Handling',
    description: 'Every team member signs strict non-disclosure agreements (NDAs). We maintain complete confidentiality and never share your data with any third parties without explicit authorization.',
  },
  {
    title: 'Secure Storage',
    description: 'Your data is stored in secure, access-controlled environments with regular backups and disaster recovery protocols. We maintain multiple redundant storage systems for maximum reliability.',
  },
  {
    title: 'Access Controls',
    description: 'Role-based access controls ensure that only authorized personnel can access your data. All access is logged and monitored for security compliance.',
  },
];

export default function SecuritySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-4">
              Data Security & Confidentiality
            </h2>
            <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
              Your Data Is Safe With Us - Comprehensive security measures protect your information
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {securityFeatures.map((feature, index) => {
              const securityImages = [
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
                'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
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
                <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                  {feature.title}
                </h3>
                  <p className="text-[#6E6E6E] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-[#B11217] text-white p-8 rounded-lg text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Trust & Compliance
              </h3>
              <p className="text-white/95 mb-6 leading-relaxed">
                Kinora implements controlled access, secure storage, and confidentiality protocols to protect client information at every stage. We are committed to maintaining the highest standards of data security and privacy.
              </p>
              <Link
                href="/data-security"
                className="inline-block bg-white text-[#B11217] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More About Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

