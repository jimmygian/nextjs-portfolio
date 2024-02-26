"use client";

import animate from "@app/css/animations.module.css";
import backgroundLight from "@public/images/bgs/abstract-envelope-light.svg";
import backgroundDark from "@public/images/bgs/abstract-envelope-dark.svg";
import Buttons from "./components/buttons";
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

      <Buttons inView={inView} absolute={true}/>

      {/* Hero */}
      <div
        className={`${hero.hero} flex flex-col items-center justify-center mt-[2rem] xs:mt-[4rem] sm:mt-[30vh] px-4 xs:px-5 xs:mx-5 relative`}
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
                      ? `${animate.animate} ${animate.left} ${animate.anmDur04} ${animate.anmDel01} ${animate.anmFillBck}`
                      : "opacity-0"
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
                  text-md
                  xs:text-xl
                  mb-[3rem]
                  xs:mb-[10rem] 
                  sm:mb-[7rem] 
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

        <Buttons inView={inView}/>

      </div>
    </section>
  );
}
