import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

type SectionHeadingProps = {
    children: React.ReactNode;
    title?: string;
}


export default function SectionHeader({ title, children }: SectionHeadingProps) {
  return (
    <>
        <h2 className={`${inter.className} text-3xl font-medium capitalize mb-8`}>{children}</h2>
        { title && <h2 className='text-3xl font-medium capitalize mb-8'>{title}</h2>}
    </>
  )
}
