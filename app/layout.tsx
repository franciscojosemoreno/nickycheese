import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans, Lobster } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lobster',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nicky Cheese | American Bistró · Buenos Aires',
  description:
    'Specialty coffee, pancakes, cheesecakes y mucho más. Dos locales en Buenos Aires. #SayCheese',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${jakarta.variable} ${lobster.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
