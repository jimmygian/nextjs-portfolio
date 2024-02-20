import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Importing images from public lib (Static Img Data)
import project1_pic_CVM from "@public/project-CVMaster.png";
import project2_pic_WW from "@public/project-WalletWizzard.png";
import project3_pic_nextJSP from "@public/project-nextjsPtf.png";
import project4_pic_AudioOp from "@public/project-AudioOp.png";
import project5_pic_WebmC from "@public/project-WebMConv.png";

export const personalInfo = {
  name: "Dimitris",
  surname: "Giannoulis",
  get fullname(): string {
    return `${this.name} ${this.surname}`;
  },

  city: "London",
  country: "UK",
  get location(): string {
    return `${this.city} ${this.country}`;
  },

  dob: new Date("13 April 1992"),

  email: "dimitrisgiannoulis.jg@gmail.com",
  phone: "+44 7868 055029",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/jimmygian",
      icon: "",
    },
    { platform: "Website", url: "https://jimmygian.com", icon: "" },
  ],
} as const;

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
    id: "exp1",
    title: "Harvard CS50 Certificate",
    location: "Online",
    description:
      "I completed the renowned Harvard CS50 course, a comprehensive introduction to computer science, algorithms, and web development.",
    details: "",
    skills: [],
    icon: React.createElement(FaReact),
    date: "2023",
    certificateUrl: "",
  },
  {
    id: "exp2",
    title: "Harvard CS50P Certificate",
    location: "Online",
    description:
      "I earned my certificate in Harvard's CS50P course, a rigorous program focusing in building strong foundation in Python and Computer Science.",
    details: "",
    skills: [],
    icon: React.createElement(CgWorkAlt),
    date: "2023",
    certificateUrl: "",
  },
  {
    id: "exp3",
    title: "Front-End Bootcamp Graduate",
    location: "Birmingham University / EdX",
    description:
      "I graduated with practical skills ready to embark on a career as a front-end developer.",
    details: "",
    skills: [],
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    certificateUrl: "",
  },
] as const;

export const projectsData = [
  {
    title: "CV Master",
    description:
      "An all-in-one web application that allows users to quickly create, keep track, and tailor Web-Dev CVs using Markdown syntax.",
    tags: ["JavaScript", "React", "Bootstrap", "node.js", "localStorage"],
    imageUrl: project1_pic_CVM,
  },
  {
    title: "Wallet Wizard",
    description:
      "A easy-to-use finance management app that allows users to track their expenses and manage their custom-made budgets.",
    tags: ["JavaScript", "APIs", "Bootstrap", "Custom CSS"],
    imageUrl: project2_pic_WW,
  },
  {
    title: "Next.js Portfolio",
    description:
      "This very website portfolio, that's utilizing the latest front-end development technologies (TypeScript, next.js, tailwind CSS) to improve SEO, responsiveness, and interactivity.",
    tags: ["TypeScript", "next.js", "Tailwind CSS"],
    imageUrl: project3_pic_nextJSP,
  },
  {
    title: "Audio Operations",
    description:
      "An Electron app that provides users with a simple interface and allows them to perform specific audio operations, such as splitting, merging multi-channel files and more.",
    tags: ["JavaScript", "Python", "Electron", "Bootstrap", "FFmpeg"],
    imageUrl: project4_pic_AudioOp,
  },
  {
    title: "WebM Converter",
    description:
      "A cross-platform Electron app that allows users to convert one or more videos to WebM format. Specifically made for internal use within Forever Audio (audio post-production company)",
    tags: [
      "JavaScript",
      "Electron",
      "Custom CSS",
      "FFmpeg",
      "electron-builder",
      "webpack",
    ],
    imageUrl: project5_pic_WebmC,
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
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "Electron",
  "Firebase",
] as const;
