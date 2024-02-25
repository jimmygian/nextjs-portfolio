"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import animate from "@app/css/animations.module.css";
import { personalInfo } from "@lib/data";
import { useGlobalContext } from "@app/context/global-context";
import { useSectionInView } from "@lib/hooks";
import backgroundLight from "@public/images/bgs/abstract-envelope-light.svg";
import backgroundDark from "@public/images/bgs/abstract-envelope-dark.svg";
import hero from "./hero.module.css";

export default function Hero() {
  const { theme } = useGlobalContext();
  const { sectionRef } = useSectionInView("Home", [0.75]);
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useGlobalContext();

  console.log("home");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="mx-[0.2rem] min-h-screen scroll-mt-[100rem] w-[100%] flex flex-col relative"
    >
      {/* Background Image */}
      <Image
        src={theme === "dark" ? backgroundDark : backgroundLight}
        alt="Background Image"
        fill={true}
        className={`${hero.heroImg} bg-repeat`}
      />

      {/* Hero */}
      <div className={`${hero.hero} flex justify-center items-start`}>
        <div className={`${hero.heroContent}`}>
          {/* Image */}
          <div
            className={`${animate.animate} ${animate.zoomIn} ${animate.anmDur04} flex items-center justify-center mt-[9.3rem]`}
          >
            <div className="relative">
              <Image
                className="w-[7rem] h-[7rem] border p-[0.2rem] shadow-sm transition-shadow shadow-[#6394bf] rounded-full"
                src="/prof-pic-linkedin.jpeg"
                alt={`Profile Picture of ${personalInfo.fullname}.`}
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
            className={`${animate.animate} ${animate.up} ${animate.anmDur04} self-center text-center pt-2 text-xl xs:text-3xl sm:text-4xl ps-10 pe-10 max-w-[50rem] font-medium !leading-[1.5] xl:text-5xl xl:max-w-[65rem]`}
          >
            <span className="font-bold">{`Hello, I'm ${personalInfo.name}.`}</span>{" "}
            A <span className="font-bold">Front End Developer</span> with a
            passion for creating dynamic web applications.
          </h1>

          {/* Buttons */}
          <div
            className={`${animate.animate} ${animate.up} ${animate.anmDur04} ${animate.anmDel04} ${animate.anmFillBck} flex items-center justify-center gap-3 mt-[1rem] flex-wrap`}
          >
            <Link
              className="group xs-styles bg-zinc-900 text-white shadow-md shadow-black/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition dark:shadow-black/10 dark:bg-gray-600"
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
            </Link>
            <a
              className="group xs-styles bg-white text-zinc-900 px-7 py-3 flex items-center gap-2 rounded-full shadow-sm shadow-[#00000071] outline-none focus:scale-105 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/90 dark:shadow-md"
              href="/CV-ph.pdf"
              download={true}
            >
              Download CV{" "}
              <HiDownload className="opacity-70  group-hover:scale-125 transition" />
            </a>
            <a
              href="https://linkedin.com/jimmygian"
              target="_blank"
              className="bg-white p-4 text-zinc-700 flex items-center gap-2 rounded-full shadow-sm shadow-[#000000a4] outline-none focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition dark:bg-white/10 dark:text-white/60 dark:shadow-md"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/jimmygian"
              target="_blank"
              className="bg-white p-4 text-zinc-700 flex items-center gap-2 rounded-full shadow-sm shadow-[#000000a4] outline-none focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition dark:bg-white/10 dark:text-white/60 dark:shadow-md"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
