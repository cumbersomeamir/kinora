import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Data Entry & Data Processing',
    description: 'Accurate and efficient data entry services for all your business needs. We handle large volumes of data with precision and speed.',
    icon: '📊',
  },
  {
    title: 'Form Filling & Data Digitization',
    description: 'Convert your paper forms and documents into digital formats with structured data that\'s ready for your systems.',
    icon: '📝',
  },
  {
    title: 'Document, PDF & Image Data Conversion',
    description: 'Transform documents, PDFs, and images into searchable, editable, and structured data formats.',
    icon: '📄',
  },
  {
    title: 'Database Creation & Management',
    description: 'Build and maintain comprehensive databases with clean, organized, and validated data structures.',
    icon: '🗄️',
  },
  {
    title: 'Data Verification & Quality Assurance',
    description: 'Multi-level verification processes ensure the highest accuracy and quality standards for your data.',
    icon: '✅',
  },
  {
    title: 'Online / Offline Data Management',
    description: 'Comprehensive data management solutions for both online and offline data processing requirements.',
    icon: '💾',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            Comprehensive data entry services tailored to meet your business requirements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const images = [
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
              'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
              'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
              'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
            ];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={images[index] || images[0]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-[#000000] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-[#B11217] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#8a0e12] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

