"use client";

import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../section-header'
import { projectsData } from '@lib/data'
import ProjectCard from './components/project'
import { useSectionInView } from '@lib/hooks';

export default function Projects() {
  const { sectionRef } = useSectionInView("Projects", [0.2]);

  return (
    <section ref={sectionRef} id='projects' className='text-center scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeader>My projects</SectionHeader>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  
  )
}
