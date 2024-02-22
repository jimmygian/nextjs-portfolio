"use client";

import React from 'react'
import SectionHeader from '@app/components/sections/section-header'
import { skillsData } from '@lib/data'
import { useSectionInView } from '@lib/hooks'

export default function Skills() {
    const {sectionRef} = useSectionInView("Skills", [0.5])

    const skillEls = skillsData.map((skill, index) => (
        <li 
          key={index} 
          className='
            xs-styles
            font-extralight
            bg-white 
            border 
            border-black/[0.1] 
            rounded-md 
            p-1
            px-3
            hover:scale-[1.05] 
            transition 
            dark:bg-white/10
            dark:text-white/80
          '
        >
          {skill}
        </li>
    ))

    console.log("skills")

  return (
    <section id='skills' ref={sectionRef} className='sectionBasicStyle mx-[0.5rem] xs:mx-5 max-w-[45rem] '>
        <SectionHeader>Skills</SectionHeader>
        <ul className=' flex flex-wrap gap-2 justify-center text-lg text-zinc-800'>{...skillEls}</ul>
    </section>
  )
}
