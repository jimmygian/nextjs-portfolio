"use client";

import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@lib/useInObserver";
import { useActiveSectionContext } from "@app/context/active-section-context";

import type { SectionName, ThresholdValue } from "@lib/types";




export function useSectionInView(sectionName: SectionName, threshold: ThresholdValue[] = [0.75]) {

  // Initializes ref to be passed in section div
  const sectionRef = useRef<HTMLElement>(null);

  // Calls custom hook that observes when section is in-viewport
  const { inView } = useIntersectionObserver(sectionRef, threshold);
  
  // Imports "global" states from context 
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // Sets activeSection state to "sectionName" if section is in-view + no header button was clicked
  useEffect(() => {
    if (
      inView &&
      Date.now() - timeOfLastClick > 1000
    ) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    sectionRef,
  };
}
