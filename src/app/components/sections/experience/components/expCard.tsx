"use client";

import React, { useEffect, useRef, useState } from "react";
import exp from "../exp.module.css";
import Image from "next/image";
import graduateIcon from "@public/icons/graduate-cap-svgrepo-com.svg";
import type { expDataObj } from "@lib/types";
import { useExpCardDialogContext } from "@/app/context/dialog-context";
import { useIntersectionObserver } from "@/lib/hooks";
import animate from "@app/components/css/animations.module.css";

type extCardProps = {
  side: string;
  data: expDataObj;
};

export default function ExpCard({ side, data }: extCardProps) {
  const [expand, setExpand] = useState(false);
  const { expandedContainer, setExpandedContainer } = useExpCardDialogContext();
  const expCardRef = useRef<HTMLDivElement>(null);
  const { shown, inView } = useIntersectionObserver(expCardRef, [0.4]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (expandedContainer === e.currentTarget.id) {
      setExpand((prev) => !prev);
    } else {
      setExpandedContainer(e.currentTarget.id);
      setExpand(true);
    }
  }

  return (
    <div ref={expCardRef} className={`${exp.expCardWrapper}`}>
      <button
        id={data.id}
        onClick={(e) => handleClick(e)}
        className={`${exp.container} ${side === "left" ? exp.leftContainer : exp.rightContainer} 
          ${shown && side === "left" ? exp.appearLeft : "opacity-0"}
          ${shown && side === "right" ? exp.appearRight : "opacity-0"}
          ${/*
            inView && expandedContainer === data.id && expand ? exp.expand : exp.shrink
          */""}
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
          <small className="block mt-1 mb-3">{data.date}</small>
          <p className="hidden sm:block">
            {data.description}
          </p>
          {/* <button accessKey="sgv" className="bg-gray-300 p-1 px-3 mt-3 text-sm text-center rounded-md" onClick={ (e) => handleClick(e)}>More..</button> */}
        </article>
      </button>

      {/* Line */}
      <div className={`${exp.line}`}></div>
    </div>
  );
}
