import './globals.css'
import { Inter } from 'next/font/google'
import { Mulish } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Dancing_Script } from 'next/font/google'
import { Merienda } from 'next/font/google'
import Header from '@app/components/header'
import AvtiveSectionContextProvider from '@app/context/global-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@app/components/footer'
import ThemeSwitch from '@app/components/theme-switch'

const inter = Inter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'] });
const merienda = Merienda({ subsets: ['latin'] });
const tryingFont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'xxx',
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

        {/* BACKGROUND BLURRED DOTS */}
        {/* <div 
          className={`
            bg-[#fbe2e3] 
            absolute 
            top-[-6rem] 
            -z-10 
            right-[11rem] 
            h-[31.25rem] 
            w-[31.25rem] 
            rounded-full 
            blur-[10rem] 
            sm:w-[68.75rem]
            dark:bg-[rgba(82,55,56,0.4)]
          `}
        ></div>
        <div 
          className="
            bg-[#dbd7fb] 
            absolute 
            top-[-1rem] 
            -z-10 
            left-[-35rem] 
            h-[31.25rem] 
            w-[50rem] 
            rounded-full 
            blur-[10rem] 
            sm:w-[68.75rem] 
            md:left-[-33rem] 
            lg:left-[-28rem] 
            xl:left-[-15rem] 
            2xl:left-[-5rem]
            dark:bg-[rgba(56,55,73,0.4)]
          "
        ></div> */}

        <AvtiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right"/>
          <ThemeSwitch />
        </AvtiveSectionContextProvider>
      </body>
    </html>
  )
}
