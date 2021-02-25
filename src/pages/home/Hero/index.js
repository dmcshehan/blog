import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"

import { PageTitle, Section, ExternalLink, Button } from "~components"

const ExtLink = styled(ExternalLink)`
  ${tw`border-primary hover:border-b-2`};
`

const P = styled.p`
  ${tw`text-xl font-light`};
`

const HomeHero = function index() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shehan.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Section className="bg-gray-50">
      <div class="grid grid-cols-2 gap-4">
        <div>
          {" "}
          <PageTitle>Hi, I’m Shehan 👋🏼</PageTitle>
          <P className="mb-4 text-xl">
            I'm a Front end developer from Colombo, Sri Lanka 🏝️. I code, write
            and build little things on the internet. 🌐
          </P>
          <P className="mb-4">
            I'm a 26 and interested in design and focused on building products
            with JavaScript, specifically React. I work remotely at
            CopernicusMD.
          </P>
          <P className="mb-4">
            When I'm not coding, I'm likely waticling 📺 something on Netflix /
            YouTube or travel. You can find me on{" "}
            <ExtLink href="https://github.com/dmcshehan" target="_blank">
              GitHub
            </ExtLink>
            ,
            <ExtLink href="https://twitter.com/dmcshehan" target="_blank">
              Twitter
            </ExtLink>{" "}
            and{" "}
            <ExtLink
              href="https://www.linkedin.com/in/dmcshehan/"
              target="_blank"
            >
              LinkedIn
            </ExtLink>
            .
          </P>
          <Button className="mt-8 block" to="/about">
            More About Me
          </Button>
        </div>
        <div className="flex items-center">
          <Img
            className="rounded-full mt-8 mb-8 mx-auto block"
            fixed={data.file.childImageSharp.fixed}
          />
        </div>
      </div>
    </Section>
  )
}

export default HomeHero
