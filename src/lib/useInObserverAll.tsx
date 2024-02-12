import { useEffect, useState, useRef, RefObject } from "react";

interface IntersectionData {
    ref: RefObject<Element>;
    index: number;
    inView: boolean;
    ratio: number;
    shown: boolean;
}

export function useIntersectionObserverAll(refs: RefObject<Element>[]): IntersectionData[] {
    const [intersectionData, setIntersectionData] = useState<IntersectionData[]>([]);

    useEffect(() => {
        // Initialize intersectionData when refs change
        const initialIntersectionData: IntersectionData[] = refs.map((ref, index) => ({
            ref,
            index,
            inView: false,
            ratio: 0,
            shown: false
        }));
        setIntersectionData(initialIntersectionData);

        const observer = new IntersectionObserver(entries => {
            setIntersectionData(prev => {
                // Update intersectionData based on entries
                return prev.map((data, index) => {
                    const entry = entries.find(entry => entry.target === data.ref.current);
                    return {
                        ...data,
                        inView: entry ? entry.isIntersecting : false,
                        ratio: entry ? entry.intersectionRatio : 0,
                        shown: entry ? entry.isIntersecting : false
                    };
                });
            });
        });

        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [refs]);

    return intersectionData;
}
