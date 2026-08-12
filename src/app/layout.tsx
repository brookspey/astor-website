import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — The Subcontractor’s Side of Hyphen',
  description: 'Astor is the source of truth built for residential production home subcontractors. Hyphen was built for the builder — Astor is built for the sub: one record per lot where the office and the field finally agree.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — The Subcontractor’s Side of Hyphen',
    description: 'Hyphen was built for the builder. Astor is built for the sub — one record per lot where the office and your field super finally agree, so you get paid and can prove the work.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — The Subcontractor’s Side of Hyphen',
    description: 'The source of truth for residential production home subcontractors.',
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
