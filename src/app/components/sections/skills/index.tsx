"use client";

import React from 'react'
import SectionHeader from '@app/components/sections/section-header'
import { skillsData } from '@lib/data'
import { useSectionInView } from '@lib/hooks'

export default function Skills() {
    const {sectionRef} = useSectionInView("Skills")

    const skillEls = skillsData.map((skill, index) => (
        <li key={index} className='bg-white border border-black/[0.1] rounded-md p-1 ps-3 pe-3 hover:scale-[1.05] transition'>{skill}</li>
    ))

  return (
    <section id='skills' ref={sectionRef} className='mb-28 max-w-[53rem] m-10 scroll-mt-28 text-center sm:mb-40'>
        <SectionHeader>Skills</SectionHeader>
        <ul className=' flex flex-wrap gap-2 justify-center text-lg text-gray-800'>{...skillEls}</ul>
    </section>
  )
}
