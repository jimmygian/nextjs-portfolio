import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-[--cp1-gray1] dark:text-[--cp1-gray2]'>
        <small className="block b-2 text-xs mb-[0.45rem] sm:mb-[0.1rem]">
            &copy; 2024 Dimitris. All rights reserverd.
        </small>
        <p className='text-xs'>
            <span className='text-xs font-semibold'>About this website:</span> built with React & Next.js (App Router &
            Server Actions), TypeScript, Tailwind CSS, React Email, Resend, Vercel hosting.
        </p>
    </footer>

  )
}
