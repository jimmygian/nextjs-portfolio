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
  console.log("experience")

  const expCount = experiencesData.length;
  return (
    <section ref={sectionRef} id="experience" className="sectionBasicStyle flex flex-col justify-center">
      <SectionHeader>Experience</SectionHeader>
      <div className={`${exp.timeline}`}>

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
