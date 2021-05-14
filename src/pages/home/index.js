import React from "react"
import { Layout, Seo } from "~components"

import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import Testimonials from "./Testimonials"

export default function () {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
    </Layout>
  )
}
