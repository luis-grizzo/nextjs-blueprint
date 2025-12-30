import type { Metadata } from 'next'

import { geistMono, geistSans } from '@/app/fonts'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Next.js Blueprint',
  description: 'Next.js boilerplate for new projects'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
