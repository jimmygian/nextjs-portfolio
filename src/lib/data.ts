import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Importing images from public lib (Static Img Data)
import project1 from "@public/placeholder1.png";
import project2 from "@public/placeholder2.png";
import project3 from "@public/placeholder3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CV Master",
    description:
      "An all-in-one web application that allows users to quickly create, keep track, and tailor Web-Dev CVs using Markdown syntax.",
    tags: ["JavaScript", "React", "Bootstrap", "node.js", "localStorage"],
    imageUrl: project3,
  },
  {
    title: "Wallet Wizard",
    description:
      "A easy-to-use finance management app that allows users to track their expenses and manage their custom-made budgets.",
    tags: ["JavaScript", "APIs", "Bootstrap", "Custom CSS"],
    imageUrl: project1,
  },
  {
    title: "Audio Operations",
    description:
      "An Electron app that provides users with a simple interface and allows them to perform specific audio operations, such as splitting, merging multi-channel files and more.",
    tags: ["JavaScript", "Python", "Electron", "Bootstrap", "FFmpeg"],
    imageUrl: project2,
  },
  {
    title: "Next.js Portfolio",
    description:
      "This very website portfolio, that's utilizing the latest front-end development technologies (TypeScript, next.js, tailwind CSS) to improve SEO, responsiveness, and interactivity.",
    tags: ["TypeScript", "next.js", "Tailwind CSS"],
    imageUrl: project1,
  },
  {
    title: "WebM Converter",
    description:
      "A cross-platform Electron app that allows users to convert one or more videos to WebM format. Specifically made for internal use within Forever Audio (audio post-production company)",
    tags: ["JavaScript", "Electron", "Custom CSS", "FFmpeg", "electron-builder", "webpack"],
    imageUrl: project3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;