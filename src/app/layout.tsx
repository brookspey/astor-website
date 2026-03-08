import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — AI Marketing Agency for Local Businesses',
  description: 'We help local businesses get found online. Websites, SEO, Google Ads, and review generation — powered by AI, built to grow your business.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — AI Marketing Agency for Local Businesses',
    description: 'We help local businesses get found online. Websites, SEO, Google Ads, and review generation.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — AI Marketing Agency for Local Businesses',
    description: 'We help local businesses get found online.',
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
