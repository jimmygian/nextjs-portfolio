"use client"

import { useEffect, useState, useRef, RefObject } from "react";
import type { ThresholdValue } from "@lib/types";

interface IntersectionData {
    ref: RefObject<Element>;
    inView: boolean;
    entry?: IntersectionObserverEntry;
    ratio: number;
    shown:boolean;
    height?: number;
}




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
            // threshold: [0.4]
            threshold: thresholdArr
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

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return intersectionData;
}