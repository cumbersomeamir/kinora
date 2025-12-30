import Link from 'next/link';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-4">
              Contact Kinora
            </h2>
            <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
              Get in Touch - We&apos;re here to help with all your data entry needs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80"
                alt="Contact Kinora Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-[#B11217] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-serif font-bold text-[#000000]">Email</h3>
              </div>
              <a
                href="mailto:info@kinora.com"
                className="text-[#6E6E6E] hover:text-[#B11217] transition-colors"
              >
                info@kinora.com
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-[#B11217] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="text-xl font-serif font-bold text-[#000000]">Phone</h3>
              </div>
              <a
                href="tel:+919876543210"
                className="text-[#6E6E6E] hover:text-[#B11217] transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-[#B11217] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#8a0e12] transition-colors"
                >
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

