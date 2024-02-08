import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import animate from "./css/animations.module.css";

export default function Intro() {
  return (
    <section className="mt-[0.3rem] sm:mt-[2rem]">
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
      <p
        className={`${animate.animate} ${animate.up} ${animate.anmDur04} text-center pt-2 text-3xl sm:text-4xl ps-10 pe-10 max-w-[50rem] font-medium !leading-[1.5]`}
      >
        <span className="font-bold">Hello, I'm Dimitris.</span> A{" "}
        <span className="font-bold">Front End Developer</span> with a passion
        for creating dynamic web applications.
      </p>

      {/* Buttons */}
      <div
        className={`${animate.animate} ${animate.up} ${animate.anmDur04} ${animate.anmDel04} ${animate.anmFillBck} flex items-center justify-center gap-1 sm:gap-3 mt-[1rem]`}
      >
        <Link
          className="bg-gray-900 text-white shadow-md shadow-[#ffffff] px-7 py-3 flex items-center gap-2 rounded-full"
          href="#contact"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          className="bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full shadow-sm shadow-[#00000071]"
          href=""
        >
          Download CV <HiDownload />{" "}
        </a>
      </div>
    </section>
  );
}
