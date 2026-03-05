import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Popo Taxi - Güvenilir Taksi Hizmeti | Reliable Taxi Service',
    template: '%s | Popo Taxi'
  },
  description: 'Güvenilir taksi hizmeti. 8 yıllık deneyim, şeffaf fiyat, 24/7 hizmet. WhatsApp\'tan hemen rezervasyon yapın. Reliable taxi service in Turkey with 8 years experience.',
  keywords: [
    'taksi hizmeti',
    'taxi service',
    'havalimanı transfer',
    'airport transfer',
    'güvenilir taksi',
    'reliable taxi',
    'profesyonel şoför',
    'professional driver',
    '24 saat taksi',
    '24 hour taxi'
  ],
  authors: [{ name: 'Popo Taxi Service' }],
  creator: 'Popo Taxi Service',
  publisher: 'Popo Taxi Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://popotaxi.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://popotaxi.com',
    siteName: 'Popo Taxi',
    title: 'Popo Taxi - Güvenilir Taksi Hizmeti',
    description: 'Güvenilir taksi hizmeti. 8 yıllık deneyim, şeffaf fiyat, 24/7 hizmet.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Popo Taxi - Güvenilir Taksi Hizmeti',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Popo Taxi - Güvenilir Taksi Hizmeti',
    description: 'Güvenilir taksi hizmeti. 8 yıllık deneyim, şeffaf fiyat, 24/7 hizmet.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}