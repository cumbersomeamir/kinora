import Image from 'next/image';

const features = [
  {
    title: 'Experienced Team',
    description: 'Our team consists of highly trained professionals with extensive experience in data entry and information processing across various industries.',
  },
  {
    title: 'Fast Turnaround',
    description: 'We understand the importance of timely delivery. Our efficient workflows and dedicated resources ensure quick turnaround times without compromising quality.',
  },
  {
    title: 'Competitive Pricing',
    description: 'We offer transparent, competitive pricing that provides excellent value for money. No hidden costs, just honest pricing for quality services.',
  },
  {
    title: 'High Accuracy',
    description: 'Our multi-level quality control processes ensure accuracy rates exceeding 99%. We take pride in delivering error-free data that you can trust.',
  },
  {
    title: 'Dedicated Support',
    description: 'Every client is assigned a dedicated account manager who ensures seamless communication and prompt resolution of any queries or concerns.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Whether you need to process hundreds or millions of records, our scalable infrastructure can handle projects of any size efficiently.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-4">
            Why Choose Kinora
          </h2>
          <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            What Makes Us Different - Excellence in every aspect of data processing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={featureImages[index] || featureImages[0]}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-[#B11217] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="text-xl font-serif font-bold text-[#000000]">
                  {feature.title}
                </h3>
              </div>
                <p className="text-[#6E6E6E] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

