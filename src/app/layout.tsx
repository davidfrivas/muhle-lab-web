import '@/styles/globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Muhle Lab',
    template: '%s | Muhle Lab',
  },
  description:
    'The Muhle Lab, led by Dr. Rebecca Muhle, is a part of the New York State Psychiatric Institute and Columbia University Department of Psychiatry.',
  keywords: [
    'Muhle Lab',
    'muhlelab',
    'Rebecca Muhle',
    'Columbia University',
    'NYSPI',
    'psychiatry',
    'CHD8',
    'autism',
    'molecular genomics',
    'neuroscience',
    'neurodevelopment',
    'research',
  ],
  icons: {
    icon: '/icons/favicon.png',
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GQ8QPV9BZ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GQ8QPV9BZ9');
          `}
        </Script>
        {/* Ionicons for social icons */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <div id="main">{children}</div>
      </body>
    </html>
  )
}
