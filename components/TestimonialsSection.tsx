import Image from 'next/image';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Tech Solutions Inc.',
    role: 'Operations Manager',
    content: 'Kinora has been instrumental in digitizing our entire document archive. Their accuracy and attention to detail are exceptional. We\'ve processed over 50,000 documents with zero errors.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Global Enterprises',
    role: 'Data Manager',
    content: 'The team at Kinora understands our business needs perfectly. Their turnaround time is impressive, and the quality of work consistently exceeds our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'Digital Services Ltd.',
    role: 'CEO',
    content: 'Working with Kinora has transformed our data management processes. Their professional approach, security measures, and cost-effective solutions make them our preferred partner.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#000000] mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto">
            Real feedback from our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const testimonialImages = [
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
            ];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={testimonialImages[index] || testimonialImages[0]}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000]">{testimonial.name}</p>
                    <p className="text-sm text-[#6E6E6E]">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#6E6E6E] mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

