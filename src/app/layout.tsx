import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/header'
import AvtiveSectionContextProvider from '@/app/context/global-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@app/components/footer'
import ThemeSwitch from '@app/components/theme-switch'

const inter = Inter({ subsets: ['latin'] })

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
          ${inter.className} 
          relative
          bg-zinc-80 
          text-zinc-950
          dark:bg-zinc-950
          dark:text-zinc-50
          dark:text-opacity-90 
        `}>

        {/* BACKGROUND BLURRED DOTS */}
        <div 
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
        ></div>

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
