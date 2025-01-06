// app/layout.tsx
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Krefelder Laden',
  description: 'Dein Portal für regionale und nachhaltige Produkte',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <div id="skip-link">
          <a href="#main-content">Zum Hauptinhalt springen</a>
        </div>
        {children}
      </body>
    </html>
  )
}