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
            font-thin
            bg-white 
            border 
            border-black/[0.1] 
            rounded-md 
            p-1 
            ps-3 
            pe-3 
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
    <section id='skills' ref={sectionRef} className='sectionBasicStyle mx-10 max-w-[45rem] '>
        <SectionHeader>Skills</SectionHeader>
        <ul className=' flex flex-wrap gap-2 justify-center text-lg text-gray-800'>{...skillEls}</ul>
    </section>
  )
}
