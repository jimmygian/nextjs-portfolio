"use client";

import React from "react";
import exp from "../exp.module.css";
import Image from "next/image";
import graduateIcon from "@public/icons/graduate-cap-svgrepo-com.svg";
import type { expDataObj } from "@lib/types";
// import { useExpCardDialogContext } from "@app/context/dialog-context";
// import { ExpCardDialog } from "./exp-card-dialog";

type extCardProps = {
  side: string;
  data: expDataObj;
};

export default function ExpCard({ side, data }: extCardProps) {
  // const { isHidden, setIsHidden } = useExpCardDialogContext();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // console.log("clicked", e.target);
    console.log("Clicked", e.timeStamp);
    // setIsHidden(false);
  }

  return (
    <div className="relative w-full">
      <div
        className={`${exp.container} ${
          side === "left" ? exp.leftContainer : exp.rightContainer
        }`}
      >
        <div className={`${exp.iconContainer}`}>
          <Image className={`${exp.icon}`} src={graduateIcon} alt="isadfasdg" />
        </div>

        <article className={`${exp.textBox}`}>
          <h2 className="text-lg sm:text-xl">{data.title}</h2>
          <small className="block mt-1 mb-3">{data.date}</small>
          <p className="hidden sm:block">{data.description}</p>
          {/* <button accessKey="sgv" className="bg-gray-300 p-1 px-3 mt-3 text-sm text-center rounded-md" onClick={ (e) => handleClick(e)}>More..</button> */}
        </article>
      </div>
    </div>
  );
}
