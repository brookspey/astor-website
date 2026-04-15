import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — Custom Software for Service Businesses',
  description: 'We build custom software for construction companies, medical offices, HVAC, plumbing, and roofing businesses doing $1M+ in annual revenue.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — Custom Software for Service Businesses',
    description: 'Custom software built around how your business actually works.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — Custom Software for Service Businesses',
    description: 'Custom software for service businesses doing $1M+.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300..800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">{children}</body>
    </html>
  )
}
