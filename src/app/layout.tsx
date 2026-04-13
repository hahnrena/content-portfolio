import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rena Hahn — Frontend Engineer, Knowledge Systems & AI Workflows',
  description:
    'I build systems that make complex workflows and information usable at scale through structured content design, frontend engineering, and AI automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
