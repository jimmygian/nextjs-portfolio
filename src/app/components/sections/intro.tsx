"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import animate from "@app/components/css/animations.module.css";
import { useSectionInView } from "@lib/hooks";

export default function Intro() {
  const { sectionRef } = useSectionInView("Home", [0.75]);

  return (
    <section 
      ref={sectionRef}
      id="home"
      className="mt-[4.3rem] sm:mt-[2rem] h-[83vh] sm:h-[40vh] scroll-mt-[100rem]">
      {/* Image */}
      <div
        className={`${animate.animate} ${animate.zoomIn} ${animate.anmDur04} flex items-center justify-center`}
      >
        <div className="relative">
          <Image
            className="w-[7rem] h-[7rem] border p-[0.2rem] shadow-sm transition-shadow shadow-[#6394bf] rounded-full"
            src="/prof-pic-linkedin.jpeg"
            alt="Profile Picture of Dimitris Giannoulis."
            height={192}
            width={192}
            priority={true}
          />
          <span
            className={`${animate.animate} ${animate.animationGreet} absolute bottom-[0rem] right-[0.2rem] text-4xl`}
          >
            👋
          </span>
        </div>
      </div>

      {/* Hero text */}
      <h1
        className={`${animate.animate} ${animate.up} ${animate.anmDur04} text-center pt-2 text-3xl sm:text-4xl ps-10 pe-10 max-w-[50rem] font-medium !leading-[1.5]`}
      >
        <span className="font-bold">Hello, I'm Dimitris.</span> A{" "}
        <span className="font-bold">Front End Developer</span> with a passion
        for creating dynamic web applications.
      </h1>

      {/* Buttons */}
      <div
        className={`${animate.animate} ${animate.up} ${animate.anmDur04} ${animate.anmDel04} ${animate.anmFillBck} flex items-center justify-center gap-3 mt-[1rem] flex-wrap`}
      >
        <Link
          className="group bg-gray-900 text-white shadow-md shadow-[#ffffff] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition"
          href="#contact"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition"/>
        </Link>
        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full shadow-sm shadow-[#00000071] outline-none focus:scale-105 hover:scale-110 active:scale-105 transition"
          href="/CV-ph.pdf"
          download={true}
        >
          Download CV <HiDownload className="opacity-70 group-hover:scale-125 transition"/>
        </a>
        <a 
          href="https://linkedin.com/jimmygian"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full shadow-sm shadow-[#000000a4] outline-none focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition"
        >
          <BsLinkedin />
        </a>
        <a 
          href="https://github.com/jimmygian"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full shadow-sm shadow-[#000000a4] outline-none focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
}
