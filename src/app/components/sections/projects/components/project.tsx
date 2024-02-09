import React from "react";
import { projectsData } from "@lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard(props: ProjectProps) {
  const title = props.title;
  const description = props.description;
  const tags = props.tags;
  const imgUrl = props.imageUrl;

  return (
    <article
      className={`group bg-gray-100 border border-black/5 m-6 max-w-[42rem] overflow-hidden sm:min-h-[20rem] mb-3 sm:mb-8 last:mb-0 flex flex-col sm:flex-row justify-between even:flex-row-reverse hover:bg-gray-200 transition`}
    >
      <div className="max-w-[65%] sm:max-w-[50%] p-6 flex flex-col h-full">
        <h3 className={`text-2xl font-semibold`}>{title}</h3>
        <p className={`mt-2 leading-relaxed text-gray-500`}>{description}</p>
        <ul className={`flex flex-wrap gap-2 mt-4 sm:mt-auto`}>
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

      <div className="flex-grow relative">
        <Image
          className={` absolute
            top-6 -right-3
            rounded-t-lg shadow-2xl 
            transition
            group-hover:scale-[1.05]
            group-hover:translate-y-3
            group-hover:-translate-x-3
            group-even:group-hover:translate-x-3
            group-hover:-rotate-3
            group-even:group-hover:rotate-6

            group-even:right-[initial]
            group-even:-left-3
            `}
          src={imgUrl}
          alt="Project I worked on"
          quality={95}
        />
      </div>

    </article>
  );
}
