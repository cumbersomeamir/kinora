import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kinora Services Info Pvt. Ltd. | Reliable Roots, Endless Growth.",
    template: "%s | Kinora Services",
  },
  description: "Kinora Services Info Pvt. Ltd. delivers reliable, secure, and high-quality data entry and information processing solutions. Professional data entry services with accuracy, confidentiality, and timely delivery.",
  keywords: [
    'data entry services',
    'data processing',
    'data digitization',
    'document conversion',
    'database management',
    'data verification',
    'quality assurance',
    'data entry company',
    'information processing',
    'form filling services',
  ],
  authors: [{ name: "Kinora Services Info Pvt. Ltd." }],
  creator: "Kinora Services Info Pvt. Ltd.",
  publisher: "Kinora Services Info Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kinora.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Kinora Services Info Pvt. Ltd.",
    title: "Kinora Services Info Pvt. Ltd. | Reliable Roots, Endless Growth.",
    description: "Professional data entry and information processing solutions with accuracy, confidentiality, and timely delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinora Services Info Pvt. Ltd.",
    description: "Professional data entry and information processing solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
