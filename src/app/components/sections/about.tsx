"use client";

import React from "react";
import SectionHeader from "@/app/components/sections/section-header";
import animate from "@app/components/css/animations.module.css";

export default function About() {
  return (
    <section 
      id="about"
      className={`
      ${animate.animate} ${animate.up} ${animate.anmDur04} ${animate.anmDel05} ${animate.anmFillBck} 
      scroll-mt-28 mb-28 mx-10 max-w-[45rem] text-center leading-8 sm:mb-40`}
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
        When I'm not coding, I enjoy making music, watching shows, wokring out,
        and learning new random skills. I am curently teaching myself math!
      </p>
    </section>
  );
}
