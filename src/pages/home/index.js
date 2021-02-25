import React from "react"
import { Layout } from "~components"

import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Testimonials from "./Testimonials"

export default function () {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
    </Layout>
  )
}
