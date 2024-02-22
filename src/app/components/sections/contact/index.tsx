"use client";

import React, { useRef } from 'react';
import SectionHeader from '@app/components/sections/section-header';
import { useIntersectionObserver, useSectionInView } from '@lib/hooks';
import { personalInfo } from '@lib/data';
import animate from '@app/components/css/animations.module.css'
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitBtn from './components/submit-btn';
import toast from 'react-hot-toast';



export default function Contact() {
    const {sectionRef} = useSectionInView("Contact", [0.1, 0.4]);

    const formRef = useRef(null);
    const {inView} = useIntersectionObserver(formRef)

    

    console.log("contact")

  return (
    <section ref={sectionRef} id="contact" className="sectionBasicStyle !mb-[4.5rem] flex flex-col justify-center w-[98%] lg:w-[54rem] p-5 xs:m-5 sm:m-1">
        <SectionHeader>Contact me</SectionHeader>
        <p className='text-xs text-zinc-800 -mt-[1.5rem] px-[2rem] dark:text-zinc-500'>Please contact me directly at <a href={`mailto:${personalInfo.email}`} className='underline'>{personalInfo.email}</a> or through this form.</p>

        <form 
          ref={formRef} 
          action={ async (formData) => { 
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }
            return toast.success("Email sent successfully!");
          }} 
          className={`${inView ? `${animate.animate} ${animate.down} ${animate.anmFillBoth} ${animate.anmDel01} ${animate.anmDur02}` : "opacity-0"}  mt-10 flex flex-col`}>

          <label className='text-start text-sm pt-3' htmlFor="email">Email:</label>
          <input 
            id="email" 
            className='h-14 rounded-lg borderBlack px-4 dark:bg-zinc-700 dark:bg-opacity-70' 
            type="email" 
            required 
            maxLength={80} 
            placeholder='Your email'
            name={`senderEmail`}
          />

          <label className='text-start text-sm pt-3' htmlFor="message">Message:</label>
          <textarea 
            className='borderBlack rounded-lg mb-3 px-4 pt-4 dark:bg-zinc-800' 
            required 
            maxLength={5000} 
            name={`message`} 
            id="message" 
            cols={30} rows={10} 
            placeholder='Your message'
          >
          </textarea>

         <SubmitBtn />
        </form>
    </section>
  )
}
