import type { Metadata } from 'next'
import {
  Fraunces,
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
  Bebas_Neue,
  Space_Mono,
  Press_Start_2P,
  Space_Grotesk,
  Caveat,
  Unbounded,
} from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactBanner from '@/components/ContactBanner'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'
import './case-study.css'

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const caveat = Caveat({
  variable: '--font-hand',
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

const unbounded = Unbounded({
  variable: '--font-funky',
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shruthy Nair · Product Designer',
  description: 'Product designer focused on the connective tissue between people and the products they use.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${bebasNeue.variable} ${spaceMono.variable} ${pressStart2P.variable} ${spaceGrotesk.variable} ${caveat.variable} ${unbounded.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg text-sm font-medium"
          style={{ backgroundColor: 'var(--ink)', color: '#fff' }}
        >
          Skip to main content
        </a>
        <CustomCursor />
        <Nav />
        <div className="flex-1 page">
          <div id="main-content">
            {children}
          </div>
          <ContactBanner />
          <Footer />
        </div>
      </body>
    </html>
  )
}
