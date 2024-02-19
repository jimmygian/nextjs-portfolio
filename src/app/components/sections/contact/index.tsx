"use client";

import React, { useRef } from 'react';
import SectionHeader from '@app/components/sections/section-header';
import { useIntersectionObserver, useSectionInView } from '@lib/hooks';
import { personalInfo } from '@lib/data';
import { FaPaperPlane } from 'react-icons/fa';
import animate from '@app/components/css/animations.module.css'

export default function Contact() {
    const {sectionRef} = useSectionInView("Contact", [0.1, 0.4]);

    const formRef = useRef(null);
    const {inView} = useIntersectionObserver(formRef)

    console.log("contact")

  return (
    <section ref={sectionRef} id="contact" className="sectionBasicStyle flex flex-col justify-center w-[min(100% ,38rem)] m-5 sm:m-1">
        <SectionHeader>Contact me</SectionHeader>
        <p className='text-xs text-gray-800 -mt-[1.5rem] px-[2rem]'>Please contact me directly at <a href={`mailto:${personalInfo.email}`} className='underline'>{personalInfo.email}</a> or through this form.</p>

        <form ref={formRef} action="" className={`${inView ? `${animate.animate} ${animate.down} ${animate.anmFillBoth} ${animate.anmDel01} ${animate.anmDur02}` : "opacity-0"}  mt-10 flex flex-col`}>

          <label className='text-start text-sm pt-3' htmlFor="email">Email:</label>
          <input id="email" className='h-14 rounded-lg borderBlack px-4' type="email" placeholder='Your email'/>

          <label className='text-start text-sm pt-3' htmlFor="message">Message:</label>
          <textarea className='borderBlack rounded-lg mb-3 px-4 pt-4' name="" id="message" cols={30} rows={10} placeholder='Your message'></textarea>

          <button 
            className='
              group 
              flex items-center gap-2 justify-center 
              h-[3rem] w-[8rem] 
              text-white bg-gray-900 
              rounded-full 
              outline-none 
              px-4
              hover:bg-gray-950
              transition-all 
              hover:scale-110
              focus:scale-105
              active:scale-105
            ' 
            type="submit"
          >
          
            Submit 

            <FaPaperPlane 
              className='
                text-xs opacity-70 transition-all
                group-hover:translate-x-1 
                group-hover:-translate-y-1
                focus:scale-105 
                hover:scale-110 
                active:scale-105
                "
              ' 
            />
          
          </button>
        </form>
    </section>
  )
}
