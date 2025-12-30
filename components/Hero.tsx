import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Professional data entry and business services"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#000000] mb-6 leading-tight">
            Empowering Your Data Entry Success
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#6E6E6E] mb-8 max-w-2xl mx-auto">
            Reliable • Accurate • Secure
          </p>
          <p className="text-base md:text-lg text-[#6E6E6E] mb-10 max-w-2xl mx-auto leading-relaxed">
            Kinora Services Info Pvt. Ltd. delivers reliable, secure, and high-quality data entry and information processing solutions. Our structured workflows and trained professionals ensure accuracy, confidentiality, and timely delivery for every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#B11217] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#8a0e12] transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/about"
              className="bg-white text-[#000000] border-2 border-[#000000] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#000000] hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

