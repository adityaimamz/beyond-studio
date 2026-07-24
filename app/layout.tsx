import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css'; // Global styles
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beyondstudio.site'),
  title: 'Beyond Studio - Jasa Pembuatan Website Custom Profesional',
  description: 'Beyond Studio melayani pembuatan website custom untuk bisnis, portofolio, dan pengerjaan skripsi/tugas akhir mahasiswa.',
  keywords: [
    'jasa pembuatan website',
    'website custom',
    'bikin website skripsi',
    'landing page umkm',
    'website portofolio',
    'jasa web developer',
    'beyond studio'
  ],
  alternates: {
    canonical: 'https://www.beyondstudio.site',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Beyond Studio - Jasa Pembuatan Website Custom Profesional',
    description: 'Beyond Studio melayani pembuatan website custom untuk bisnis, portofolio, dan pengerjaan skripsi/tugas akhir mahasiswa.',
    url: 'https://www.beyondstudio.site',
    siteName: 'Beyond Studio',
    images: [
      {
        url: '/images/logo-light.png',
        width: 1200,
        height: 630,
        alt: 'Beyond Studio Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Studio - Jasa Pembuatan Website Custom Profesional',
    description: 'Beyond Studio melayani pembuatan website custom untuk bisnis, portofolio, dan pengerjaan skripsi/tugas akhir mahasiswa.',
    images: ['/images/logo-light.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ENP25V7E3K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ENP25V7E3K');
          `}
        </Script>

        <ThemeProvider>
          <SmoothScrollProvider>
            <ScrollIndicator />
            {children}
            <ScrollToTop />
            <Analytics />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
