"use client";

import animate from "@app/css/animations.module.css";
import { BiHomeAlt2 } from "react-icons/bi";
import Link from "next/link";
import { links } from "@lib/data";
import React from "react";
import ThemeSwitch from "@app/components/theme-switch";
import { useGlobalContext } from "@app/context/global-context";
import HamburgerBtn from "./components/hamburger";

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
            hidden
            sm:block
            m-auto
            mt-5
            p-5
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
            dark:bg-opacity-75
            dark:border-black/10
          `}
        >
          {/* SM:LIST */}
          <ul
            className="
            h-full 
            flex 
            justify-evenly 
            gap-9
            items-center 
          "
          >
            {/* LIST ITEMS */}
            {links.map((link) => {
              return (
                <li
                  key={link.hash}
                  className="
                  relative 
                  flex 
                  justify-center 
                  items-center 
                  text-center 
                    text-[--cp1-white1] 
                    z-[1000]
                  "
                >
                  <Link
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                    href={link.hash}
                    className={`
                      ${link.name === activeSection ? `text-[--cp1-black1] dark:text-[--cp1-white1]` : `text-[--cp1-gray2] dark:text-[--cp1-gray1]`}
                      hover:text-[--cp1-black2]      
                      dark:hover:text-[--cp1-white1]
                      text-sm
                      font-medium
                      mx-1
                      transition 
                    `}
                  >
                    {link.name}
                  </Link>

                  {/* SELECTED */}
                  {link.name === activeSection ? (
                    <div className="
                      absolute 
                      -z-10 
                      w-[140%] 
                      h-[195%] 
                      bg-[--cp2-color1]
                      dark:bg-[--cp1-black1] 
                      rounded-full"
                      ></div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* SMALL SCREENS / HAMBURGER */}
        <div 
          className="
            sm:hidden 
            self-start 
            flex 
            justify-between 
            items-center 
            p-5 
            be-5 
            bg-[#F9F9F7ac] 
            dark:bg-black/50 
            shadow-sm 
            dark:text-white/70 
            backdrop-blur-md 
            w-[100%] 
            h-[3.3rem]"
          >
          <Link 
            id="homeBtn" 
            className="hover:scale-125 rotate-0 hover:rotate-[360deg]  transition-all"
            href='#home' 
            onClick={() => {
              setActiveSection("Home");
              setTimeOfLastClick(Date.now());
            }}
          >
            <BiHomeAlt2 className="m-3 scale-150" />
          </Link>
          <HamburgerBtn onClick={toggleMenu} id={`hamburger-btn`} />
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
                <li className="translate-y-10">
                  <ThemeSwitch position="block"/>
                </li>
              </ul>
            </nav>
          </section>
      </section>
    </header>
  );
}
