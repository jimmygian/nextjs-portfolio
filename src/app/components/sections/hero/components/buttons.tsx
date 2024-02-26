"use client";

import React, { useRef } from "react";
import animate from '@app/css/animations.module.css'
import { useIntersectionObserver } from "@lib/hooks";
import { useGlobalContext } from "@app/context/global-context";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";


type ButtonsType = {
  inView?: boolean;
  shown?: boolean;
  absolute?: boolean;
  relative?: boolean;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  className?: string;
}

export default function Buttons({inView, shown, absolute, className, top, bottom, left, right, relative}: ButtonsType) {

  const { setActiveSection, setTimeOfLastClick } = useGlobalContext()


  return (
    <div
      className={`
        
        ${
          absolute
            ? `sm:hidden absolute bottom-[11rem] right-[2.5rem]`
            : ``
        }
        ${
          className ? className : ""
        }
        ${
          inView
            ? `${animate.animate} ${animate.up} ${animate.anmDur07} ${animate.anmDel07} ${animate.anmFillBck}`
            : "opacity-0"
        }
        ${relative ? `hidden sm:flex` : ``}
        flex 
        flex-wrap
        justify-end
        self-end
        sm:self-center
        gap-3 
        max-w-[75%]
      `}
    >
      <Link
        className="!text-sm sm:text-base px-3 py-2 sm:px-7 sm:py-3 group xs-styles bg-zinc-900 text-white shadow-md shadow-black/10 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition dark:shadow-black/10 dark:bg-gray-600"
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
        className="!text-sm sm:text-base px-3 py-2 sm:px-7 sm:py-3 group xs-styles bg-white text-zinc-900 flex items-center gap-2 rounded-full shadow-sm shadow-[#00000071] outline-none focus:scale-105 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/90 dark:shadow-md"
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
          className="p-[0.8rem] sm:p-4  text-sm sm:text-base bg-white text-zinc-700 flex items-center gap-2 rounded-full shadow-sm shadow-[#000000a4] outline-none focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition dark:bg-white/10 dark:text-white/60 dark:shadow-md"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jimmygian"
          target="_blank"
          className="p-[0.8rem] sm:p-4  text-sm sm:text-base bg-white  text-zinc-700 flex items-center gap-2 rounded-full shadow-sm shadow-[#000000a4] outline-none focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition dark:bg-white/10 dark:text-white/60 dark:shadow-md"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
