import React from "react"
import { Layout, Seo } from "~components"

import Hero from "./Hero"
import Projects from "./Projects"

export default function () {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Hero />
      <Projects />
    </Layout>
  )
}
