import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { LoginModal } from './components/Modals/LoginModal'
import { RegisterModal } from './components/Modals/RegisterModal'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Tracking Panel',
  description: 'Tracking your trucks every time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LoginModal />
        <RegisterModal />
        <div>{children}</div>
      </body>
    </html>
  )
}
