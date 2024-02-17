"use client";

import React from "react";
import SectionHeader from "@app/components/sections/section-header";
import exp from "./exp.module.css";
import ExpCard from "./components/expCard";
import { experiencesData } from "@lib/data";
import { useSectionInView } from "@lib/hooks";
import { ExperenceContextProvider } from "@app/context/dialog-context";

export default function Experience() {
  const {sectionRef} = useSectionInView("Experience")

  const expCount = experiencesData.length;
  return (
    <section ref={sectionRef} id="experience" className="mb-28 scroll-mt-28 sm:mb-40 text-center flex flex-col justify-center">
      <SectionHeader>Experience</SectionHeader>
      <div className={`${exp.timeline}`}>
        
        {/* Line */}
        {/* <div className={`${exp.line}`} style={{height: `${(12 * expCount)}rem`}}></div> */}

        <ExperenceContextProvider>
          {/* EXPERIENCE Cards Mapping */}
          {experiencesData.map((expData, index) => {
            let side: string = "right";
            if (index % 2 === 0) {
              side = "left";
            }
            return (
            <div key={index}>
              <ExpCard side={side} data={expData} />
            </div>
            );
          })}
        </ExperenceContextProvider>

      </div>
    </section>
  );
}
