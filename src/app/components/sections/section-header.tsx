import React from 'react'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: "100" });
const poppinsbold = Poppins({ subsets: ['latin'], weight: "300" });

type SectionHeadingProps = {
    children: React.ReactNode;
    title?: string;
}


export default function SectionHeader({ title, children }: SectionHeadingProps) {
  return (
    <div className='h-fit flex justify-center sticky top-[0%] pt-[3.8rem] bg-white z-50 text-center'>
        {/* <h2 className={`${poppins.className} absolute translate-x-[0.15rem] text-[--cp1-color1] top-[0.15rem] opacity-30 text-xl capitalize font-semibold tracking-wide scale-y-[1] scale-x-[0.9] mb-8`}>{children}</h2> */}
        <h2 className={`${poppins.className} text-xl capitalize font-extralight tracking-wide scale-y-[1] scale-x-[0.9] mb-8`}>{children}</h2>
        { title && <h2 className='text-xl uppercase font-extralight mb-8'>{title}</h2>}
    </div>
  )
}
