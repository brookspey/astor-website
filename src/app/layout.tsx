import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — Software for Production-Home Finish Trades',
  description: 'Astor builds software for cabinet, countertop, door, and flooring supplier-installer subs running 50–200 lots for Lennar, D.R. Horton, NVR, and other production builders. One queue from PO to draw.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — Software for Production-Home Finish Trades',
    description: 'One queue from PO to draw for cabinet, countertop, door, and flooring subs working production-builder tracts.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — Software for Production-Home Finish Trades',
    description: 'For cabinet, countertop, door, and flooring subs on production-builder tracts.',
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
