"use client";

import React, { useState, useContext } from "react";
// import { motion } from 'framer-motion'
import { links } from "@lib/data";
import Link from "next/link";
import animate from "@app/components/css/animations.module.css";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <header
      className={`${animate.animate} ${animate.headerDown} ${animate.anmDur1} ${animate.anmDel04}} ${animate.anmFillBck} z-[999] relative`}
    >
      <div className="fixed top-0 w-[100vw] h-14 rounded-none bg-white shadow-md shadow-black/5 border border-white border-opacity-40 bg-opacity-80 backdrop-blur-[0.5rem] sm:top-5 sm:h-[3.20rem] sm:w-[36rem] left-1/2 -translate-x-1/2 sm:rounded-full"></div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
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
                  relative flex w-full items-center justify-center px-3 py-2 mb-4 hover:text-gray-950 transition 
                  ${activeSection === link.name && `text-gray-950`}`
                }
                href={link.hash}
              >

                {link.name}

                {/* Background of active Link */}
                {link.name === activeSection ? (
                  <span
                    className={`bg-gray-200 rounded-full absolute inset-0 -z-10`}
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
