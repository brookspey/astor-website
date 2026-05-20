import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — Source of Truth for Production-Home Subcontractors',
  description: 'Astor is project management software for door and window supplier-installer subs. One source of truth from every job site — so the office can fabricate and dispatch with confidence.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — Source of Truth for Production-Home Subcontractors',
    description: 'One source of truth from every job site, so your fab shop and dispatchers can release material and bill draws with confidence.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — Source of Truth for Production-Home Subcontractors',
    description: 'Project management for door and window subs on production-builder tracts.',
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
