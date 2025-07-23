import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ParticleBackground } from '@/components/effects/ParticleBackground'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'AugmentCode.in - The Ultimate Hub for AI Development',
  description: 'Discover the best MCP servers, AI development tools, and resources for the AugmentCode ecosystem. Built with cutting-edge web technologies.',
  keywords: ['AI development', 'MCP servers', 'AugmentCode', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'AugmentCode Team' }],
  creator: 'AugmentCode',
  publisher: 'AugmentCode',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://augmentcode.in',
    title: 'AugmentCode.in - The Ultimate Hub for AI Development',
    description: 'Discover the best MCP servers, AI development tools, and resources for the AugmentCode ecosystem.',
    siteName: 'AugmentCode.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AugmentCode.in - The Ultimate Hub for AI Development',
    description: 'Discover the best MCP servers, AI development tools, and resources for the AugmentCode ecosystem.',
    creator: '@augmentcode',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen ethereal-bg">
            <ParticleBackground />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
