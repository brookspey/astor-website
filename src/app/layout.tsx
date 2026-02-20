import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astor — AI Consulting for Small Business',
  description: 'We help small businesses work smarter with AI. Save time, reduce costs, and grow revenue with practical AI solutions tailored to your operations.',
  metadataBase: new URL('https://tryastor.com'),
  openGraph: {
    title: 'Astor — AI Consulting for Small Business',
    description: 'We help small businesses work smarter with AI. Save time, reduce costs, and grow revenue.',
    url: 'https://tryastor.com',
    siteName: 'Astor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astor — AI Consulting for Small Business',
    description: 'We help small businesses work smarter with AI.',
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
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">{children}</body>
    </html>
  )
}
