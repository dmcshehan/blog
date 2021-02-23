import React from "react"
import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Testimonials from "./Testimonials"

import Layout from "~components/Layout"

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
