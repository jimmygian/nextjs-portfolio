"use client";

import React, { useRef, CSSProperties } from "react";
import { projectsData } from "@lib/data";
import Image from "next/image";
import project from "../projects.module.css";
import { useIntersectionObserver } from "@/lib/useInObserver";
import { useIntersectionObserverAll } from "@/lib/useInObserverAll";
import animate from '@app/components/css/animations.module.css';

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard(props: ProjectProps) {
  const title = props.title;
  const description = props.description;
  const tags = props.tags;
  const imgUrl = props.imageUrl;

  // Setting element visibility trackers
  const articleRef = useRef<HTMLDivElement>(null);
  const articleInData = useIntersectionObserver(articleRef);
  const skillsRef = useRef<HTMLUListElement>(null);
  const skillsInData = useIntersectionObserver(skillsRef);
  const titleRef = useRef<HTMLHeadingElement>(null);
  // const titleInData = useIntersectionObserver(titleRef);
  const textRef = useRef<HTMLParagraphElement>(null);
  // const textInData = useIntersectionObserver(textRef);

  // const IntersectArr = useIntersectionObserverAll([articleRef, skillsRef, titleRef, textRef])
  const ratio = useRef<Number | null>(null);
  ratio.current = Number((articleInData.ratio).toFixed(2));

  const myStyles: CSSProperties = {
    "opacity": `${ratio.current}`,
  }

  if (articleInData.shown && Number(ratio.current) < 0.5) {
    myStyles["opacity"] = `${Number(ratio.current)*2}`;
    myStyles["transform"] = `translateY(${Number(ratio.current)*3}rem)`;

  } else {
    myStyles["opacity"] = `100`;
    myStyles["transform"] = `translateY(${0.5*3}rem)`;
  }

  return (
    <article
      ref={articleRef}
      tabIndex={0}
      style={myStyles}
      className={`${project.project} 
        ${/*articleInData.shown ? `${animate.animate} ${animate.up} ${animate.anmDur05} ${animate.anmFillBck} scale-[${ratio.current}]` : "opacity-0" */ ""} 
        group 
        relative
        bg-gray-100 
        border 
        border-black/2 
        m-6 
        max-w-[42rem] 
        overflow-hidden 
        sm:min-h-[20rem] 
        mb-3 
        sm:mb-8 
        last:mb-0 
        flex 
        flex-col 
        sm:flex-row 
        justify-between 
        sm:even:flex-row-reverse 
        hover:bg-gray-200 
        transition 
        outline-none
        focus:scale-[1.03]
        focus:bg-gray-200 
        cursor-pointer

      `}
    >

      {/* Text */}
      <div
        className={`

          max-w-[100%] 
          sm:max-w-[50%] 
          p-6 
          flex 
          flex-col 
          text-left
          group-even:text-right
          sm:group-even:text-left
        `}
      >
        <h3 
          ref={titleRef}
          className={`
            ${"" /*titleInData.shown ? `${animate.animate} ${animate.up} ${animate.anmDur05} ${animate.anmFillBck}` : "opacity-0" */}
            text-2xl font-semibold`}
        >
          {title}
        </h3>

        <p 
          ref={textRef}
          className={`
            ${"" /* textInData.shown ? `${animate.animate} ${animate.up} ${animate.anmDur05} ${animate.anmFillBck}` : "opacity-0" */}
            mt-2 leading-relaxed text-gray-500`}
        >
          {description}
        </p>

        <ul
          ref={skillsRef}
          className={`
            ${skillsInData.inView ? `${animate.animate} ${animate.up} ${animate.anmDur05} ${animate.anmFillBck}` : "opacity-0"}
            flex flex-wrap gap-2 mt-4 sm:mt-auto group-even:justify-end sm:group-even:justify-start`}
        >
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="flex-grow relative">
        <Image
          className={` 
            sm:absolute
            top-6 -right-3
            rounded-t-lg shadow-2xl 
            transition
            scale-[0.95]
            translate-y-6
            -translate-x-3
            -rotate-[1.45deg]
            opacity-95
                        
            group-focus:translate-x-3
            group-even:translate-x-3
            sm:group-even:-translate-x-3
            group-even:group-focus:-translate-x-3 
            sm:group-even:group-focus:-translate-x-10
            group-hover:translate-x-3
            group-even:rotate-[1.45deg]
            group-even:group-hover:translate-x-1
            
            sm:group-even:right-[initial]
            sm:group-even:left-3
            sm:group-hover:scale-[1.05]
            sm:group-hover:translate-y-3
            sm:group-hover:-translate-x-3
            sm:group-hover:-rotate-3
            sm:group-even:group-hover:scale-[1.02]
            sm:group-even:group-hover:-translate-x-3
            sm:group-even:group-hover:rotate-2
            `}
          src={imgUrl}
          alt="Project I worked on"
          quality={95}
        />
      </div>

      {/* "Visit" Overlay */}
      <div
        className={`${project.projectCta} absolute -bottom-[0rem] w-full h-[18rem] sm:h-[6rem] text-center sm:flex flex-col justify-end sm:opacity-0 sm:group-hover:opacity-100 transition`}
      >
        {/* <h4 className={`
          hidden
          group-focus:block
          sm:block
          p-[3rem] 
          text-gray-600 
          text-xl 
          font-bold 
          tracking-widest 
          uppercase 
          transition
        `}
        >
          Visit
        </h4> */}
      </div>
    </article>
  );
}
