import type { Metadata } from 'next'
import './globals.scss'
import { roboto } from './ui/fonts'
import { Navbar } from './ui/navbar'
import ButtonScroll from './ui/buttons/buttonScroll'
import styles from '@/app/ui/styles/buttons.module.scss'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar />
        {children}
        <div
          className={styles.buttonScrollContainer}
        >
          <ButtonScroll />
        </div>
      </body>
    </html>
  )
}
