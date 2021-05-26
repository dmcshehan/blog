import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Paragraph } from "~components"

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
      <div className="grid grid-cols-12 gap-4 flex flex-col">
        <div className="col-span-12 order-2 lg:col-span-8 lg:order-1">
          <Paragraph>
            My name is Shehan Disanayake. I'm a 26 year old Front End Developer
            based in Colombo, Sri Lanka 🏝️. I describe myself as a passionate
            developer who loves coding specialy in JavaScript and trying to find
            simple solutions to the problems that developers face ❤️.
          </Paragraph>
          <br />
          <Paragraph>
            Aside from my job, I like to create and contribute to open source
            projects. That helps me to learn a ton of new stuff, grow as a
            developer and support other open source projects. Also I enjoy
            writing technical things ✍️ at my blog.
          </Paragraph>
          <br />
          <Paragraph>
            Since the beginning of my journey as a freelance web developer
            nearly 5 years ago, I've done remote work for agencies 🏢 and
            collaborated 👨‍💻 with talented people to create digital products for
            both business and consumer use. I love programming and traveling.
          </Paragraph>
        </div>
        <div className="col-span-12 order-1 lg:order-2 lg:col-span-4">
          <Img className="rounded" fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </Section>
  )
}
