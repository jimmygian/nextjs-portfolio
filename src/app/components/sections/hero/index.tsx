"use client";

import animate from "@app/css/animations.module.css";
import backgroundLight from "@public/images/bgs/abstract-envelope-light.svg";
import backgroundDark from "@public/images/bgs/abstract-envelope-dark.svg";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import hero from "./hero.module.css";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@lib/data";
import profilePic from "@public/images/prof-pic-linkedin.jpeg";
import React from "react";
import { useGlobalContext } from "@app/context/global-context";
import { useSectionInView } from "@lib/hooks";
import { useIntersectionObserver } from "@lib/hooks";

export default function HeroNew() {
  const { theme } = useGlobalContext();
  const { sectionRef } = useSectionInView("Home", [0.75]);
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useGlobalContext();

  const { inView, shown } = useIntersectionObserver(sectionRef);

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
        className={`${hero.heroImg}`}
      />

      {/* Hero */}
      <div
        className={`${hero.hero} flex flex-col items-center justify-center mt-[10vh] xs:mt-[15vh] sm:mt-[30vh] px-4 xs:px-5 xs:mx-5 relative`}
      >
        {/* Hero text */}

        <div className="flex justify-center items-center self-end sm:self-center max-w-[40rem] mb-[3rem] xs:mb-[4rem] sm:mb-[2rem] min-h-[10rem] sm:min-h-[4rem] overflow-hidden">
          <div
            className={`
            ${
              inView
                ? `${animate.animate} ${animate.up} ${animate.anmDur05} ${animate.anmFillBck}`
                : "opacity-0"
            }
            border-r border-[--cp1-black2] dark:border-[--cp1-white1]
            overflow-hidden
            `}
          >
            <h1
              className={`
                  ${
                    inView
                      ? `${animate.animate} ${animate.left} ${animate.anmDur04} ${animate.anmDel01} ${animate.anmFillBck}` : "opacity-0"
                  }
                  text-end 
                  font-extralight
                  text-3xl
                  xs:text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  !leading-[1.5] 
                  pe-5 
                  max-w-[50rem] 
                `}
            >
              {`${personalInfo.fullname}`}
            </h1>
          </div>
        </div>

        {/* Hero text */}
        <div
          className={`"
            self-start 
            sm:self-center 
            max-w-[40rem]
            overflow-hidden
          `}
        >
          <div 
            className={`
              border-l border-[--cp1-black2] dark:border-[--cp1-white1]
              ${
                inView
                  ? `${animate.animate} ${animate.up} ${animate.anmDur05} ${animate.anmFillBck}`
                  : "opacity-0"
              }
            `}
          >
            <h2
              className={`
                  self-start
                  max-w-[20rem]
                  sm:max-w-[30rem]
                  ps-5
                  text-xl
                  ${
                    inView
                      ? `${animate.animate} ${animate.right} ${animate.anmDur05} ${animate.anmDel03} ${animate.anmFillBck}`
                      : "opacity-0"
                  }
                `}
            >
              A <span className="font-bold">Front End Developer</span> with a
              passion for creating dynamic web applications.
            </h2>
          </div>
          </div>

        {/* Buttons */}
        <div
          className={`
              text-xl
              ${
                inView
                  ? `${animate.animate} ${animate.up} ${animate.anmDur07} ${animate.anmDel07} ${animate.anmFillBck}`
                  : "opacity-0"
              }
              flex 
              flex-wrap
              justify-end
              gap-3 
              mt-[30%]
              xs:mt-[60%] 
              sm:mt-[7rem] 
            `}
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
          <div className="flex gap-2">
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
