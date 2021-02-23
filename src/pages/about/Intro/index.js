import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Section from "~components/Section"
import SectionTitle from "~components/SectionTitle"
import SectionSubTitle from "~components/SectionSubTitle"

import Paragraph from "~components/Paragraph"

export default function Intro() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shehan_italy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Paragraph>
            My name is Shehan Disanayake. I'm a 26 year old Front End Developer
            based in Colombo, Sri Lanka 🏝️. I describe myself as a passionate
            developer who loves coding specialy in JavaScript and trying to find
            simple solutions to the problems that developers face ❤️.
          </Paragraph>

          <Paragraph>
            Aside from my job, I like to create and contribute to open source
            projects. That helps me to learn a ton of new stuff, grow as a
            developer and support other open source projects. Also I enjoy
            writing technical things ✍️ at my blog.
          </Paragraph>

          <Paragraph>
            Since the beginning of my journey as a freelance web developer
            nearly 5 years ago, I've done remote work for agencies 🏢 and
            collaborated 👨‍💻 with talented people to create digital products for
            both business and consumer use. I love programming and traveling.
          </Paragraph>
        </div>
        <div className="col-span-1">
          <Img className="rounded" fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </Section>
  )
}
