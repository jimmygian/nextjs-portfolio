import Intro from "@app/components/sections/intro"
import SectionDivider from "@app/components/sections/section-divider"
import About from "@app/components/sections/about"
import Projects from "@app/components/sections/projects"
import { Component } from "react"
import Skills from "@app/components/sections/skills"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[6.5rem]">
    <Intro />
    <SectionDivider />
    <About />
    <Projects />
    <Skills />
    </main>
  )
}
