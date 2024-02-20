"use client";

import React from 'react'
import animate from "@app/components/css/animations.module.css";

export default function SectionDiviter() {
  return (
    <div className={`${animate.animate} ${animate.zoomIn} ${animate.anmDur04} ${animate.anmDel05} ${animate.anmFillBck} hidden bg-gray-300 my-[3.7rem] h-12 w-1 rounded-full sm:block sm:h-16 sm:my-24 dark:bg-opacity-20`}></div>
  )
}
