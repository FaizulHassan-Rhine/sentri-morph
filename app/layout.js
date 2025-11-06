import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

