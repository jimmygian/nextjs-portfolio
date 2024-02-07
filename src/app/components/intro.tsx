import Image from 'next/image'
import React from 'react'
import animate from './css/animations.module.css';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <Image 
                    className='h-24 w-24 rounded-full w-[7rem] h-[7rem] border p-[0.2rem] shadow-sm transition-shadow shadow-[#6394bf] rounded-full' 
                    src="/prof-pic-linkedin.jpeg" 
                    alt="Profile Picture of Dimitris Giannoulis." 
                    height={192} width={192}
                    priority={true}
                />
                <span className={`${animate.animate} ${animate.animationGreet} absolute bottom-[0rem] right-[0.2rem] text-4xl`}>👋</span>
            </div>
        </div>
    </section>
  )
}
