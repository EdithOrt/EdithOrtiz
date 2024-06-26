import type { Metadata } from 'next'
import './globals.scss'
import { roboto } from './ui/fonts'
import { Navbar } from './ui/navbar'
import ButtonScroll from './ui/buttons/buttonScroll'
import styles from '@/app/ui/styles/buttons.module.scss'

import { GetSectionProvider } from '@/contexts/getSection'

export const metadata: Metadata = {
  title: 'Edith Ortiz | Portfolio',
  description:
    "I'm a front end developer with 3 years of experience developing websites with javascript."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <GetSectionProvider>
          <Navbar />
          {children}
          <div
            className={
              styles.buttonScrollContainer
            }
          >
            <ButtonScroll />
          </div>
        </GetSectionProvider>
      </body>
    </html>
  )
}
