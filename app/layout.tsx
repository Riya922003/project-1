import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Accredian Enterprise | Next-Gen Expertise For Your Enterprise',
  description: 'Cultivate high-performance teams through expert learning. Tailored corporate training solutions by Accredian.',
  keywords: 'corporate training, enterprise learning, upskilling, L&D, Accredian',
  openGraph: {
    title: 'Accredian Enterprise',
    description: 'Next-Gen Expertise For Your Enterprise',
    url: 'https://your-vercel-url.vercel.app',
    siteName: 'Accredian Enterprise',
    images: [
      {
        url: '/image/corporate-big-hero-v4.webp',
        width: 1200,
        height: 630,
        alt: 'Accredian Enterprise',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise',
    description: 'Next-Gen Expertise For Your Enterprise',
    images: ['/image/corporate-big-hero-v4.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
