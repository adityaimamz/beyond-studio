import type {Metadata} from 'next';
import './globals.css'; // Global styles
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://beyond-studio-lac.vercel.app'),
  title: 'Beyond Studio - Jasa Pembuatan Website Custom Profesional',
  description: 'Beyond Studio melayani pembuatan website custom untuk bisnis, portofolio, dan pengerjaan skripsi/tugas akhir mahasiswa.',
  openGraph: {
    title: 'Beyond Studio - Jasa Pembuatan Website Custom Profesional',
    description: 'Beyond Studio melayani pembuatan website custom untuk bisnis, portofolio, dan pengerjaan skripsi/tugas akhir mahasiswa.',
    url: '/',
    siteName: 'Beyond Studio',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
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
