"use client";

import React from "react";
// import { motion } from 'framer-motion'
import { BiHomeAlt2 } from "react-icons/bi";
import { links } from "@lib/data";
import Link from "next/link";
import animate from "@app/components/css/animations.module.css";
import { useGlobalContext } from "@/app/context/global-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useGlobalContext();

  // return (
  //   <header
  //     className={`${animate.animate} ${animate.headerDown} ${animate.anmDur1} ${animate.anmDel04}} ${animate.anmFillBck} z-[999] relative`}
  //   >
  //     {/* Header Background */}
  //     <div
  //       className="
  //         h-[4rem]
  //         fixed
  //         top-0
  //         w-[100vw]
  //         rounded-none
  //         bg-white
  //         shadow-md
  //         shadow-black/5
  //         border
  //         border-white
  //         border-opacity-40
  //         bg-opacity-80
  //         backdrop-blur-[0.5rem]
  //         sm:top-5
  //         sm:h-[3.20rem]
  //         sm:w-[36rem]
  //         left-1/2
  //         -translate-x-1/2
  //         sm:rounded-full
  //         dark:bg-zinc-950
  //         dark:border-black/10
  //         dark:bg-opacity-75
  //       "
  //     ></div>

  //     <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
  //       <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:flex-nowrap sm:gap-5">
  //         {links.map((link) => (
  //           <li
  //             className={`h-3/4 flex items-center justify-center`}
  //             key={link.hash}
  //           >
  //             <Link
  //               onClick={() => {
  //                 setActiveSection(link.name)
  //                 setTimeOfLastClick(Date.now())
  //               }}
  //               className={`
  //                 relative
  //                 flex
  //                 w-full
  //                 items-center
  //                 justify-center
  //                 px-3
  //                 py-2
  //                 mb-4
  //                 hover:text-zinc-950
  //                 transition
  //                 dark:text-zinc-500
  //                 dark:hover:text-zinc-300
  //                 ${activeSection === link.name && `text-zinc-900 dark:text-zinc-200`}`
  //               }
  //               href={link.hash}
  //             >

  //               {link.name}

  //               {/* Background of active Link */}
  //               {link.name === activeSection ? (
  //                 <span
  //                   className={`bg-zinc-200 rounded-full absolute inset-0 -z-10 dark:bg-zinc-800`}
  //                 >
  //                 </span>
  //               ) : (
  //                 <span
  //                   className="absolute inset-0 -z-1"
  //                 ></span>
  //               )}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   </header>
  // );

  return (
    <header
      className="
        z-[999] 
        fixed        
        w-[100%] h-[5.5rem] 
      "
    >
      {/* NAVBAR */}
      <section
        className={`${animate.animate} ${animate.headerDown} ${animate.anmDur1} ${animate.anmDel04}} ${animate.anmFillBck}`}
      >
        <nav
          className={`
            m-auto
            mt-5
            p-5
            hidden
            sm:block
            sm:w-[36rem] 
            h-[3.20rem] 
            rounded-full
            bg-white 
            shadow-md 
            shadow-black/5 
            border 
            border-white 
            border-opacity-40 
            bg-opacity-80 
            backdrop-blur-[0.5rem] 
            dark:bg-zinc-950
            dark:border-black/10
            dark:bg-opacity-75
          `}
        >
          {/* SM:LIST */}
          <ul
            className="
            flex 
            h-full 
            justify-evenly 
            items-center 
            gap-9
          "
          >
            {/* LIST ITEMS */}
            {links.map((link) => {
              return (
                <li
                  key={link.hash}
                  className="relative text-white flex justify-center items-center text-center z-[1000]"
                >
                  <Link
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    href={link.hash}
                    className="
                      mx-1
                      text-sm
                      font-medium
                      text-zinc-500
                      hover:text-zinc-950 
                      transition 
                      dark:text-zinc-500
                      dark:hover:text-zinc-300
                    "
                  >
                    {link.name}
                  </Link>

                  {/* SELECTED */}
                  {link.name === activeSection ? (
                    <div className="absolute -z-10 w-[140%] h-[195%] bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* SMALL SCREENS / HAMBURGER */}
        <div className="sm:hidden self-start flex justify-between items-center p-5 be-5 bg-red-500 w-[100%] h-[4.5rem]">
          <BiHomeAlt2 className="m-3 scale-150" />
          <button id="hamburger-button" className="font-bold">
            {/* <div className="linesContainer flex w-[2rem] h-[2rem] relative">
              <div className="absolute top-[25%] left-[15%] line h-[0.2rem] w-[70%] bg-black"></div>
              <div className="absolute top-[45%] left-[15%] line h-[0.2rem] w-[70%] bg-black rounded-full"></div>
              <div className="absolute bottom-[25%] left-[15%] line h-[0.2rem] w-[70%] bg-black"></div>
            </div> */}
            &#9776;
          </button>
        </div>

        {/* MOBILE MENU */}
        <section
          id="mobileMenu"
          className="absolute top-0 bg-black/50 backdrop-blur-sm w-full min-h-screen text-3xl flex flex-col items-end justify-start"
        >
          <button className="text-6xl self-end px-6 text-white">&times;</button>
          <nav
            className="min-h-screen w-[80%] bg-black p-5"
            aria-label="mobile"
          >
            <ul className="flex mt-10 min-h-[60vh] flex-col justify-evenly items-end pe-[14%]">
              {links.map((link) => {
                return (
                  <li className="text-white">
                    <Link href={link.hash} className="text-lg xs:text-2xl">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </section>
    </header>
  );
}
