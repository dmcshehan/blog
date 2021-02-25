import React from "react"
import Layout from "~components/Layout"

import Hero from "./Hero"
import Intro from "./Intro"
import Experience from "./Experience/"
import Education from "./Education/"

export default function index() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Experience />
      <Education />
    </Layout>
  )
}
