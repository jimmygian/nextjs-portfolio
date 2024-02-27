import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Importing images from public lib (Static Img Data)
import project1_pic_CVM from "@public/images/projects/project-CVMaster.png";
import project2_pic_WW from "@public/images/projects/project-WalletWizzard.png";
import project3_pic_nextJSP from "@public/images/projects/project-nextjsPtf.png";
import project4_pic_AudioOp from "@public/images/projects/project-AudioOp.png";
import project5_pic_WebmC from "@public/images/projects/project-WebMConv.png";

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
    title: "CS50's Introduction to Computer Science",
    type: "Course Certificate",
    location: "Online",
    description:
      "I completed the renowned Harvard CS50 course, a comprehensive introduction to computer science, algorithms, and web development.",
      details: "Gained a strong theoretical foundation in CS concepts including algorithms, data structures, and software design principles. Developed coding proficiency in C and an understanding of web technologies (HTML, CSS, JavaScript).", 
    skills: ['algorithms', 'computational thinking', 'CS Fundamentals', 'Data Structures', 'Abstraction', 'C', 'Python', 'JavaScript'],
    icon: React.createElement(FaReact),
    date: "August 2023",
    certificateUrl: "https://courses.edx.org/certificates/ee3bd6a629c7444faa65edaf5006c217?_gl=1*1ys0qpm*_ga*MjEyODAyNzQ3Ny4xNjg5ODkxMTc3*_ga_D3KS4KMDT0*MTcwODk4OTg3OC4yMy4xLjE3MDg5OTAxMDIuNjAuMC4w",
  },
  {
    id: "exp2",
    title: "Computer Science for Python Programming",
    type: "Professional Certificate",
    location: "Online",
    description:
      "I earned my Professional Certificate by completing Harvard's CS50P course, a rigorous program focusing in building strong foundation in Python and Computer Science.",
      details: "Mastered Python's syntax, data structures, and object-oriented programming paradigms. Applied problem-solving skills to create Python applications, and gained an introduction to web development concepts." ,
    skills: ["Python", "Advanced Python Syntax", "Object-Oriented Programming", "File I/O", "Data Handling", "Problem Solving", "Web Development Basics", "Debugging"],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023",
    certificateUrl: "https://credentials.edx.org/credentials/932cd2776caf4d9580ba1b5fd38eaf69/",
  },
  {
    id: "exp3",
    title: "Skills Bootcamp in Front-End Development",
    type: "Bootcamp Certificate",
    location: "Birmingham University / EdX",
    description:
      "I graduated with practical skills ready to embark on a career as a front-end developer.",
      details: "Built a portfolio of projects demonstrating expertise in HTML, CSS, JavaScript, and React.  Learned to create responsive web applications,  utilize testing frameworks, and work effectively within a team environment.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Responsive Design", "Jest", "node.js", "Version Control", "Git", "Web Performance Optimization", "CI/CD", "Testing", "Team Work"],
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2024",
    certificateUrl: "https://skillsbootcamp.credential.getsmarter.com/9aacc9c2-157f-4a7e-8456-73199b9ba8d2#gs.52c4sw",
  },
  {
    id: "exp4",
    title: "Self Studying",
    type: "Continuous Learning",
    location: "World Wide Web",
    description:
      "Learning is forever, and internet is a great place for it.",
      details: "Actively exploring advanced technologies and frameworks to expand my skillset.", 
    skills: ["Product Design", "nextjs", "electron", "TypeScript", "Webpack"],
    icon: React.createElement(LuGraduationCap),
    date: "Present",
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
