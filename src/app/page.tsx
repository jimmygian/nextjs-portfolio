import About from "@app/components/sections/about"
import Contact from "@app/components/sections/contact"
import Experience from "@app/components/sections/experience"
import Hero from "@/app/components/sections/hero-old"
import HeroNew from "@/app/components/sections/hero"
import Projects from "@app/components/sections/projects"
import SectionDivider from "@app/components/sections/section-divider"
import Skills from "@app/components/sections/skills"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <HeroNew />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
