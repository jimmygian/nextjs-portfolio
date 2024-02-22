"use client";

import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/app/context/global-context";

import type { RefObject } from "react";
import type { SectionName, ThresholdValue, IntersectionData } from "@lib/types";




const thresArr: ThresholdValue[] = [];
for (let i = 0; i < 100; i++) {
    thresArr.push(Number(`0.${i}`) as ThresholdValue)
}

export function useIntersectionObserver(ref: RefObject<Element>, thresholdArr: ThresholdValue[] = thresArr): IntersectionData {
    const [intersectionData, setIntersectionData] = useState<IntersectionData>({
        ref,
        inView: false,
        ratio: 0,
        shown: false,
    });

    useEffect(() => {

        let options: IntersectionObserverInit = {
            threshold: thresholdArr,
        }
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIntersectionData(prev => ({
                ...prev,
                inView: entry.isIntersecting,
                entry,
                ratio: entry.intersectionRatio,
                shown: (entry.isIntersecting) ? true : prev.inView,
            }));
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
            
        }

        // return () => {
        //     if (ref.current) {
        //         observer.unobserve(ref.current);
        //     }
        // };
    }, [ref]);

    return intersectionData;
}





export function useSectionInView(sectionName: SectionName, threshold: ThresholdValue[] = [0.75]) {

  // Initializes ref to be passed in section div
  const sectionRef = useRef<HTMLElement>(null);

  // Calls custom hook that observes when section is in-viewport
  const { inView } = useIntersectionObserver(sectionRef, threshold);
  
  // Imports "global" states from context 
  const { setActiveSection, timeOfLastClick } = useGlobalContext();

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


