import React from "react";
import { projectsData } from "@lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard(props: ProjectProps) {
  const title = props.title;
  const description = props.description;
  const tags = props.tags;
  const imgUrl = props.imageUrl;

  return (
    <article className={`flex flex-col gap-3 mb-20 items-center`}>
      <h3 className={``}>{title}</h3>
      <p>
        {" "}
        className={``}
        {description}
      </p>
      <ul className={``}>
        {tags.map((tag, index) => (
          <li key={index} className={``}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
