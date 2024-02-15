import React from 'react';
import SectionHeader from '@app/components/sections/section-header';
import exp from './exp.module.css';

export default function Experience() {
  return (
    <section id="experience" className='mb-28 scroll-mt-28 sm:mb-40'>
        <SectionHeader>Experience</SectionHeader>
        <div className={`${exp.timeline}`}>
            {/* <div className={`${exp.line}`}>
            </div> */}
            
            <div className={`${exp.container} ${exp.leftContainer}`}>
                <article className={`${exp.textBox}`}>
                        <h2 className='text-xl'>FED Bootcamp</h2>
                        <small>2023 - 2024</small>
                        <p>Rigorous 4-month Front End Bootcamp bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem illum quo rerum alias nemo dolor. </p>
                </article>
            </div>
            
            <div className={`${exp.container} ${exp.rightContainer}`}>
                <article className={`${exp.textBox}`}>
                        <h2 className='text-xl'>FED Bootcamp</h2>
                        <small>2023 - 2024</small>
                        <p>Rigorous 4-month Front End Bootcamp bla bla Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem illum quo rerum alias nemo dolor. </p>
                </article>
            </div>
        </div>
    </section>
  )
}
