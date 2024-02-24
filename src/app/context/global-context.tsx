"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import type { SectionName, Theme } from "@lib/types";


type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
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
    <ActiveSectionContext.Provider
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
    </ActiveSectionContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useGlobalContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
