"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import type { SectionName, Theme } from "@lib/types";


type GlobalContextProviderProps = { children: React.ReactNode };
type GlobalContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalSectionContext =
  createContext<GlobalContextType | null>(null);

export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [theme, setTheme] = useState<Theme>("none");
  const [sideMenuOpen, setSideMenuOpen] = useState(false);


  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, [])

  return (
    <GlobalSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        theme,
        setTheme,
        sideMenuOpen,
        setSideMenuOpen,
      }}
    >
      {children}
    </GlobalSectionContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalSectionContext);

  if (context === null) {
    throw new Error(
      "useGlobalContext must be used within an GlobalContextProvider"
    );
  }

  return context;
}
