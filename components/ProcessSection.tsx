import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Client Onboarding',
    description: 'We begin by understanding your specific requirements, data formats, and project timelines. Our team works closely with you to establish clear communication channels and project parameters.',
  },
  {
    number: '02',
    title: 'Data Collection & Classification',
    description: 'Your data is securely collected and systematically classified according to predefined categories. We ensure proper organization and structure from the outset.',
  },
  {
    number: '03',
    title: 'Entry & Verification',
    description: 'Trained professionals enter your data using established protocols and quality standards. Each entry is immediately verified for accuracy and completeness.',
  },
  {
    number: '04',
    title: 'Quality Assurance',
    description: 'Multi-level quality checks are performed by our QA team. We validate data accuracy, consistency, and compliance with your specifications before final approval.',
  },
  {
    number: '05',
    title: 'Delivery & Support',
    description: 'Finalized data is delivered in your preferred format with comprehensive documentation. Our support team remains available for any clarifications or follow-up requirements.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-4">
            Our Process
          </h2>
          <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            How Kinora Works - A streamlined approach to data excellence
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const processImages = [
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
                'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
              ];
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-full md:w-64 flex-shrink-0">
                    <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={processImages[index] || processImages[0]}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#B11217] to-[#8a0e12] text-white rounded-full flex items-center justify-center font-serif font-bold text-2xl shadow-lg ring-4 ring-[#B11217]/20 flex-shrink-0">
                        <span className="leading-none tracking-tight">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-[#000000]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#6E6E6E] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

