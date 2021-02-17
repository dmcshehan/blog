import React from "react"
import { useStaticQuery } from "gatsby"
import Hero from "./style"

import PageTitle from "~components/PageTitle"
import SubTitle from "~components/SubTitle"
import Img from "~components/Img"
import VSpacer from "~components/VSpacer"

import hero_desk from "~images/hero_desk.svg"

export default function index() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shehan.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Hero background={hero_desk}>
      <PageTitle>Frontend Developer & Lifelong Learner</PageTitle>
      <SubTitle>I code simple yet beautiful things and love what I do</SubTitle>
      <VSpacer />
      <Img fixed={data.file.childImageSharp.fixed} bRadius="100%" />
    </Hero>
  )
}
