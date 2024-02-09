import React from 'react'
import SectionHeader from '../section-header'
import { projectsData } from '@lib/data'
import ProjectCard from './components/project'

export default function Projects() {
  return (
    <section>
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
