import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'E-BOX | Online events marketplace',
  description: 'Explore and attend online events tailored to your interests.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'relative w-full font-sans'}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
