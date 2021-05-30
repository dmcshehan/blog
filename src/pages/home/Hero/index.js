import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import resume from "../../../data/Shehan_s_Resume.pdf"

import {
  PageTitle,
  Section,
  ExternalLink,
  Button,
  Paragraph,
} from "~components"

const HomeHero = function index() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shehan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section fill>
      <div class="grid lg:grid-cols-4 gap-4">
        <div className="col-span-3 order-2 lg:order-1">
          <PageTitle className="mb-4">Hi, I’m Shehan 👋🏼</PageTitle>
          <Paragraph>
            I'm a Front end developer from Colombo, Sri Lanka 🏝️. I code, write
            and build little things on the internet. 🌐
          </Paragraph>
          <Paragraph className="mb-4">
            I'm a 26 and interested in design and focused on building products
            with JavaScript, specifically React. I work remotely at
            CopernicusMD.
          </Paragraph>
          <Paragraph className="mb-4">
            When I'm not coding, I'm likely watching 📺 something on Netflix /
            YouTube or travel. You can find me on{" "}
            <ExternalLink href="https://github.com/dmcshehan" target="_blank">
              GitHub
            </ExternalLink>
            ,
            <ExternalLink href="https://twitter.com/dmcshehan" target="_blank">
              Twitter
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink
              href="https://www.linkedin.com/in/dmcshehan/"
              target="_blank"
            >
              LinkedIn
            </ExternalLink>
            .
          </Paragraph>
          <div className="flex">
            <Button className="mt-8 block mr-4" to="/about">
              More About Me
            </Button>

            <Button className="mt-8 block" download href={resume}>
              Download Resume
            </Button>
          </div>
        </div>
        <div className="flex order-1 lg:order-2">
          <Img
            className="w-48 h-48 mt-8 mb-8 block rounded lg:rounded-full lg:mx-auto"
            fixed={data.file.childImageSharp.fluid}
          />
        </div>
      </div>
    </Section>
  )
}

export default HomeHero
