import { useEffect, useState, useRef, RefObject } from "react";

interface IntersectionData {
    ref: RefObject<Element>;
    inView: boolean;
    entry?: IntersectionObserverEntry;
    ratio: number;
    shown:boolean;
}

export function useIntersectionObserver(ref: RefObject<Element>): IntersectionData {
    const [intersectionData, setIntersectionData] = useState<IntersectionData>({
        ref,
        inView: false,
        ratio: 0,
        shown: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIntersectionData(prev => ({
                ...prev,
                inView: entry.isIntersecting,
                entry,
                ratio: entry.intersectionRatio,
                shown: (entry.isIntersecting) ? true : prev.inView,
            }));
        });

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