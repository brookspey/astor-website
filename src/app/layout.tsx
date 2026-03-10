import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — Your AI Marketing Agent',
  description: 'Fire your marketing agency. Hire Astor — an AI marketing agent that dominates Google search and Meta ads for your business. 24/7.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — Your AI Marketing Agent',
    description: 'Fire your marketing agency. Hire Astor — AI-powered marketing that actually works.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — Your AI Marketing Agent',
    description: 'Fire your marketing agency. Hire Astor.',
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
