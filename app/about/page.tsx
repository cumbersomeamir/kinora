import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Kinora | Our Mission, Vision & Expertise',
  description: 'Learn about Kinora Services Info Pvt. Ltd. - A professional data entry and information services company committed to supporting businesses with accurate and efficient data management through skilled manpower and technology-driven processes.',
  keywords: [
    'about kinora',
    'data entry company',
    'information services',
    'data management company',
    'professional data entry',
    'data processing expertise',
  ],
  openGraph: {
    title: 'About Kinora | Our Mission, Vision & Expertise',
    description: 'Learn about Kinora Services Info Pvt. Ltd. and our commitment to accurate and efficient data management.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#000000] mb-6">
              About Kinora
            </h1>
            <p className="text-xl text-[#6E6E6E] leading-relaxed">
              Professional data entry and information services company committed to supporting businesses with accurate and efficient data management
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Kinora team working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-6">
                  Who We Are
                </h2>
              <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                Kinora Services Info Pvt. Ltd. is a professional data entry and information services company committed to supporting businesses with accurate and efficient data management through skilled manpower and technology-driven processes.
              </p>
                <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                  With years of experience in the industry, we have built a reputation for delivering high-quality data entry services that meet the most stringent accuracy and security standards. Our team of trained professionals works diligently to ensure every project is completed with precision and delivered on time.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                Our mission is to empower businesses with reliable, accurate, and secure data entry and information processing solutions. We strive to be the trusted partner that helps organizations streamline their data management processes, reduce operational costs, and focus on their core business activities.
              </p>
              <p className="text-lg text-[#6E6E6E] leading-relaxed">
                We are committed to maintaining the highest standards of quality, security, and confidentiality in every project we undertake. Our goal is to exceed client expectations through continuous improvement, innovation, and exceptional service delivery.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                To become the leading provider of data entry and information processing services globally, recognized for our commitment to excellence, innovation, and client satisfaction. We envision a future where businesses can rely on us as their strategic partner for all data management needs.
              </p>
              <p className="text-lg text-[#6E6E6E] leading-relaxed">
                We aim to continuously evolve our services, adopt cutting-edge technologies, and expand our capabilities to serve a diverse range of industries and business requirements.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-6">
                Our Expertise
              </h2>
              <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                Our team consists of highly skilled professionals with extensive experience in data entry, data processing, and information management. We have successfully completed thousands of projects across various industries, including healthcare, finance, retail, education, and government sectors.
              </p>
              <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
                We understand that data is the backbone of modern business operations. That&apos;s why we&apos;ve developed comprehensive workflows and quality control measures that guarantee the integrity and confidentiality of your information throughout every stage of processing.
              </p>
              <p className="text-lg text-[#6E6E6E] leading-relaxed">
                Our expertise extends to handling various data formats, including structured and unstructured data, documents, images, PDFs, and databases. We are proficient in multiple data entry software and tools, ensuring compatibility with your existing systems and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000000] mb-6">
                  Why Choose Us
                </h2>
              <ul className="space-y-4 text-lg text-[#6E6E6E]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Years of industry experience and proven track record</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Highly trained and experienced team of professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strict quality control and accuracy standards</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive security and confidentiality measures</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scalable solutions for projects of any size</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#B11217] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Competitive pricing and flexible engagement models</span>
                </li>
              </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Professional data entry services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

