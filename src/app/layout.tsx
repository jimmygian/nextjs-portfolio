import './globals.css'
import GlobalSectionContextProvider from '@app/context/global-context'
import Footer from '@app/components/footer'
import Header from '@app/components/header'
import { Montserrat } from 'next/font/google'
import ThemeSwitch from '@app/components/theme-switch'
import { Toaster } from 'react-hot-toast'

const tryingFont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Dimitris | Web Dev Portfolio',
  description: 'Dimitris is a full-stack web developer with design and marketing experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`
          ${tryingFont.className} 
          relative
          bg-[--cp1-white1] 
          text-[--cp1-black2]
          dark:bg-[--cp1-black2]
          dark:text-[--cp1-white1]
          dark:text-opacity-90 
        `}>

        <GlobalSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right"/>
          <ThemeSwitch />
        </GlobalSectionContextProvider>
      </body>
    </html>
  )
}
