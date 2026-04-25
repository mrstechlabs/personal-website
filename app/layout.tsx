import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const BASE_URL = 'https://mrsajib.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'MR Sajib | Software Engineer & Founder',
    template: '%s | MR Sajib',
  },
  description:
    'Mostafijur Rahman (MR Sajib) — Software Engineer. Founder of MRS Tech Labs, building APIs, scalable backends, and digital products.',
  keywords: [
    'MR Sajib',
    'Mostafijur Rahman',
    'Software Engineer',
    'Software Engineer Bangladesh',
    'Software Engineer Bangladesh',
    'Node.js Developer',
    'API Development',
    'MRS Tech Labs',
    'mrstechlabs.com',
    'Full Stack Developer',
    'Bangladesh',
    'Web Development',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Mostafijur Rahman', url: BASE_URL }],
  creator: 'Mostafijur Rahman',
  publisher: 'Mostafijur Rahman',
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
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'MR Sajib',
    title: 'MR Sajib | Software Engineer & Founder',
    description:
      'Mostafijur Rahman (MR Sajib) — Software Engineer from Bangladesh. Founder of MRS Tech Labs, building APIs, scalable backends, and digital products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MR Sajib — Software Engineer & Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MR Sajib | Software Engineer & Founder',
    description:
      'Mostafijur Rahman (MR Sajib) — Software Engineer from Bangladesh. Founder of MRS Tech Labs, building APIs, scalable backends, and digital products.',
    images: ['/og-image.png'],
    creator: '@mrsajib',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: '',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAFAF8',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mostafijur Rahman',
  alternateName: 'MR Sajib',
  url: BASE_URL,
  image: `${BASE_URL}/profile.png`,
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer from Bangladesh, building APIs, scalable backends, and digital products as founder of MRS Tech Labs.',
  worksFor: {
    '@type': 'Organization',
    name: 'MRS Tech Labs',
    url: 'https://mrstechlabs.com',
  },
  sameAs: [
    'https://github.com/mostafijsajib',
    'https://x.com/mostafijsajib',
    'https://www.linkedin.com/in/mostafijsajib/',
    'https://mrstechlabs.com',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
