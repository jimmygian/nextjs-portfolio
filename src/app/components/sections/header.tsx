"use client";

import React from "react";
// import { motion } from 'framer-motion'
import { links } from "@lib/data";
import Link from "next/link";
import animate from "@app/components/css/animations.module.css";
import { useGlobalContext } from "@/app/context/global-context";

export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useGlobalContext()

  return (
    <header
      className={`${animate.animate} ${animate.headerDown} ${animate.anmDur1} ${animate.anmDel04}} ${animate.anmFillBck} z-[999] relative`}
    >
      {/* Header Background */}
      <div 
        className="
          h-[4rem]
          fixed 
          top-0 
          w-[100vw]  
          rounded-none 
          bg-white 
          shadow-md 
          shadow-black/5 
          border 
          border-white 
          border-opacity-40 
          bg-opacity-80 
          backdrop-blur-[0.5rem] 
          sm:top-5 
          sm:h-[3.20rem] 
          sm:w-[36rem] 
          left-1/2 
          -translate-x-1/2 
          sm:rounded-full
          dark:bg-zinc-950
          dark:border-black/10
          dark:bg-opacity-75
        "
      ></div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className={`h-3/4 flex items-center justify-center`}
              key={link.hash}
            >
              <Link
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                className={`
                  relative 
                  flex 
                  w-full 
                  items-center 
                  justify-center 
                  px-3 
                  py-2 
                  mb-4 
                  hover:text-zinc-950 
                  transition 
                  dark:text-zinc-500
                  dark:hover:text-zinc-300
                  ${activeSection === link.name && `text-zinc-900 dark:text-zinc-100`}`
                }
                href={link.hash}
              >

                {link.name}

                {/* Background of active Link */}
                {link.name === activeSection ? (
                  <span
                    className={`bg-zinc-200 rounded-full absolute inset-0 -z-10 dark:bg-zinc-800`}
                  >
                  </span>
                ) : (
                  <span
                    className="absolute inset-0 -z-1"
                  ></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
