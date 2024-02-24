"use client";

import React, { useState } from "react";
// import { motion } from 'framer-motion'
import { BiHomeAlt2 } from "react-icons/bi";
import { links } from "@lib/data";
import Link from "next/link";
import animate from "@app/components/css/animations.module.css";
import { useGlobalContext } from "@/app/context/global-context";
import ThemeSwitch from "@/app/components/theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick, sideMenuOpen, setSideMenuOpen } =
    useGlobalContext();

  const toggleMenu = () => {
    setSideMenuOpen((prev) => !prev);
  };

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
            bg-[#f2f2f2]
            shadow-md 
            shadow-[--cp1-black2]/5 
            border 
            border-white 
            border-opacity-40 
            bg-opacity-80 
            backdrop-blur-[0.5rem] 
            dark:bg-[#050B0D]
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
                    <div className="absolute -z-10 w-[140%] h-[195%] bg-zinc-200 dark:bg-[--cp1-black1] rounded-full"></div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* SMALL SCREENS / HAMBURGER */}
        <div className="sm:hidden self-start flex justify-between items-center p-5 be-5 bg-[#F9F9F7ac] dark:bg-black/50 shadow-sm dark:text-white/70 backdrop-blur-md w-[100%] h-[3.3rem]">
          <BiHomeAlt2 className="m-3 scale-150" />
          <button
            id="hamburger-button"
            className="font-bold"
            onClick={toggleMenu}
          >
            <div className="linesContainer flex w-[1.7rem] h-[1.5rem] relative">
              <div className="absolute top-[25%] left-[15%] line h-[0.15rem] w-[70%] bg-black dark:bg-white/70"></div>
              <div className="absolute top-[45%] left-[15%] line h-[0.15rem] w-[70%] bg-black dark:bg-white/70 rounded-full"></div>
              <div className="absolute bottom-[25%] left-[15%] line h-[0.15rem] w-[70%] bg-black dark:bg-white/70"></div>
            </div>
            {/* &#9776; */}
          </button>
        </div>

        {/* MOBILE MENU */}
          <section
            id="mobileMenu"
            className={`
            ${!sideMenuOpen ? `hidden opacity-0` : `absolute opacity-100`} 
            sm:hidden top-0 bg-[--cp1-black1]/50 backdrop-blur-md w-full min-h-screen text-3xl flex flex-col items-end justify-start transition-all`}
          >
            <nav
              className={`
              ${animate.animate} ${animate.left} ${animate.anmDur03} ${animate.anmFillBck}
               min-h-screen w-[60%] p-5 text-end bg-[--cp1-white1] dark:bg-[--cp1-black2]
              `}
              aria-label="mobile"
            >
              <button
                onClick={toggleMenu}
                className="text-6xl self-end px-6 text-[--cp1-black1] dark:text-[--cp1-white1]"
              >
                &times;
              </button>
              <ul className="flex mt-10 min-h-[60vh] flex-col justify-evenly items-end pe-[14%]">
                {links.map((link) => {
                  return (
                    <li
                      key={link.hash} 
                      className="text-[--cp1-black1] dark:text-[--cp1-white1]">
                      <Link onClick={toggleMenu} href={link.hash} className="text-lg xs:text-2xl">
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ThemeSwitch />
            </nav>
          </section>
      </section>
    </header>
  );
}
