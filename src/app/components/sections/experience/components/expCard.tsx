"use client";

import React, { useEffect, useRef, useState, useId } from "react";
import exp from "../exp.module.css";
import Image from "next/image";
import graduateIcon from "@public/icons/graduate-cap-svgrepo-com.svg";
import type { expDataObj } from "@lib/types";
import { useExpCardDialogContext } from "@/app/context/exp-context";
import { useIntersectionObserver } from "@lib/hooks";

type extCardProps = {
  side: string;
  data: expDataObj;
};

export default function ExpCard({ side, data }: extCardProps) {
  const cardId = useId();
  const [focused, setFocused] = useState(false);
  const { expandedContainer, setExpandedContainer } = useExpCardDialogContext();
  const expCardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { shown, inView } = useIntersectionObserver(expCardRef, [0.4]);

  function handleClick() {
    console.log(btnRef.current?.name);
    if (expandedContainer !== btnRef.current?.name) {
      setExpandedContainer(`${btnRef.current?.name}`)
      setFocused(true)
      btnRef.current?.focus();
      return;
    }
    if (expandedContainer === btnRef.current?.name) {
      setExpandedContainer(``);
      setFocused(false)
      btnRef.current?.blur();
    }
  }

  useEffect(() => {
    console.log("OUT OF VIEW!")
    setTimeout(() => {
      setExpandedContainer(``)
      btnRef.current?.blur();
    }, 100)
  }, [inView])

  return (
    <div ref={expCardRef} className={`${exp.expCardWrapper}`}>
      <button
        ref={btnRef}
        id={`${cardId}${data.id}`}
        name={data.title}
        onClick={() => handleClick()}
        className={`${exp.container} ${
          side === "left" ? exp.leftContainer : exp.rightContainer
        } 
          ${shown && side === "left" ? exp.appearLeft : "opacity-0"}
          ${shown && side === "right" ? exp.appearRight : "opacity-0"}
          ${
            /*
            inView && expandedContainer === data.id && expand ? exp.expand : exp.shrink
          */ ""
          }
        `}
      >
        <div className={`${exp.iconContainer}`}>
          <Image
            className={`${exp.icon}`}
            src={graduateIcon}
            alt="icon of experience type"
          />
        </div>

        <article className={`${exp.textBox}`}>
          <h2 className="text-lg sm:text-xl">{data.title}</h2>
          <small className="block mt-1 mb-3">{data.location}</small>
          <p className="hidden sm:block">{data.description}</p>
          {/* <button accessKey="sgv" className="bg-zinc-300 p-1 px-3 mt-3 text-sm text-center rounded-md" onClick={ (e) => handleClick(e)}>More..</button> */}
        </article>
      </button>

      {/* Line */}
      <div className={`${exp.line}`}></div>

      {/* DATE */}
      <div
        className={`${side === "left" ? exp.dateDivLeft : exp.dateDivRight}
        ${shown && side === "left" ? exp.appearRight : "opacity-0"}
        ${shown && side === "right" ? exp.appearLeft : "opacity-0"}`}
      >
        {data.date}
      </div>
    </div>
  );
}
