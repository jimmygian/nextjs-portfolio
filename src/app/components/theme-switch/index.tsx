"use client";

import React, { useEffect, useState } from "react";
import { Bs0Circle, BsMoon, BsSun, BsThermometer } from "react-icons/bs";
import { Theme } from '@lib/types'
import { useGlobalContext } from "@/app/context/global-context";



export default function ThemeSwitch() {
  const {theme, setTheme} = useGlobalContext();

  console.log(theme)
  const toggleTheme = () => {
    console.log("Clicked!")
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }

  return (
    <button
      aria-label="toggle theme mode"
      onClick={toggleTheme}
      className="
        fixed 
        bottom-5 right-5 
        flex justify-center items-center
        w-[3rem] 
        h-[3rem] 
        bg-zinc-50 
        bg-opacity-80 
        backdrop-blur[0.5rem] 
        border 
        border-white 
        border-opacity-70 
        shadow-2xl 
        rounded-full
        hover:scale-[1.15]
        hover:bg-zinc-100
        active:scale-105
        transition-all 
        dark:bg-zinc-950
        dark:hover:bg-zinc-900
        dark:border-opacity-10
      "
    >
      {
        theme === "light" ? <BsSun /> : theme === "dark" ? <BsMoon /> : <BsThermometer />
      }
    </button>
  );
}
