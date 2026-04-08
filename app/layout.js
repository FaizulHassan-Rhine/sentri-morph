import './globals.css'
import '@fontsource/instrument-sans/500.css'
import '@fontsource/instrument-sans/600.css'
import '@fontsource/instrument-sans/700.css'

export const metadata = {
  icons: {
    icon: '/images/logo2.png',
  },
  title: 'SentriMorph - Advanced Cyber Defense Partner',
  description: 'Protect your business with intelligent, adaptive security. SentriMorph identifies, responds, and strengthens.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  )
}

