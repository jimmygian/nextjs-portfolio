"use client";

import React from "react";
import SectionHeader from "@app/components/sections/section-header";
import animate from "@app/components/css/animations.module.css";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { sectionRef } = useSectionInView("About");


  console.log("about")

  return (
    <section 
      ref={sectionRef}
      id="about"
      className={`
      ${animate.animate} ${animate.up} ${animate.anmDur04} ${animate.anmDel05} ${animate.anmFillBck} 
      sectionBasicStyle mx-[1.5rem] text-pretty xs-styles xs:mx-10 max-w-[45rem] leading-8`}
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        After graduating with a MA in audio engineering and working in the
        entertainment industry, I decided to pursue my passion from programming.
        I completed 2 vigorous Harvard courses, CS50 and CS50P, as well as a
        coding bootcamp from which I learned full-stack development. My
        favourite part of programming is problem-solving because it combines
        technical skills and creativity.
      </p>
      <p>
        When I&apos;m not coding, I enjoy making music, watching shows, wokring out,
        and learning new random skills. I am curently teaching myself math!
      </p>
    </section>
  );
}
