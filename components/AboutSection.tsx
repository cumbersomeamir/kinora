import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Professional team working together"
                fill
                className="object-cover"
              />
            </div>
            <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-6 text-center">
            About Kinora
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
              Kinora Services Info Pvt. Ltd. is a professional data entry and information services company committed to supporting businesses with accurate and efficient data management through skilled manpower and technology-driven processes.
            </p>
            <p className="text-lg text-[#6E6E6E] mb-6 leading-relaxed">
              With years of experience in the industry, we have built a reputation for delivering high-quality data entry services that meet the most stringent accuracy and security standards. Our team of trained professionals works diligently to ensure every project is completed with precision and delivered on time.
            </p>
            <p className="text-lg text-[#6E6E6E] leading-relaxed">
              We understand that data is the backbone of modern business operations. That&apos;s why we&apos;ve developed comprehensive workflows and quality control measures that guarantee the integrity and confidentiality of your information throughout every stage of processing.
            </p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

