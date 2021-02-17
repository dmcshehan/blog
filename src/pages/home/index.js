import React from "react"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"

import Layout from "~components/Layout"

export default function () {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}
