import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Kinora
            </h3>
            <p className="text-[#6E6E6E] text-sm mb-4">
              Reliable Roots, Endless Growth.
            </p>
            <p className="text-[#6E6E6E] text-sm">
              Professional data entry and information services company committed to supporting businesses with accurate and efficient data management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  About Kinora
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#data-entry" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Data Entry & Processing
                </Link>
              </li>
              <li>
                <Link href="/services#form-filling" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Form Filling & Digitization
                </Link>
              </li>
              <li>
                <Link href="/services#document-conversion" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Document Conversion
                </Link>
              </li>
              <li>
                <Link href="/services#database" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                  Database Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-[#6E6E6E]">
              <li>
                <a href="mailto:kinoraservicesinfopvtltd@gmai.com" className="hover:text-white transition-colors">
                  kinoraservicesinfopvtltd@gmai.com
                </a>
              </li>
              <li>
                <a href="tel:+918853932809" className="hover:text-white transition-colors">
                  +91 8853932809
                </a>
              </li>
              <li className="pt-2">
                <Link href="/data-security" className="text-[#6E6E6E] hover:text-white transition-colors">
                  Data Security
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6E6E6E] hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#6E6E6E] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6E6E6E] text-sm">
              © {currentYear} Kinora Services Info Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#6E6E6E] hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


