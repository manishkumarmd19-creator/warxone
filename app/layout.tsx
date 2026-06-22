import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'warxone',
  description: 'Immersive 3D hero experience built with Spline and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
