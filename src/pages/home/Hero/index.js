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
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section className="bg-gray-50">
      <div class="grid lg:grid-cols-2 gap-4">
        <div className="order-2 lg:order-1">
          <PageTitle className="text-center lg:text-left mb-4">
            Hi, I’m Shehan 👋🏼
          </PageTitle>
          <P className="mb-4 text-xl text-center lg:text-left">
            I'm a Front end developer from Colombo, Sri Lanka 🏝️. I code, write
            and build little things on the internet. 🌐
          </P>
          <P className="mb-4 text-center lg:text-left">
            I'm a 26 and interested in design and focused on building products
            with JavaScript, specifically React. I work remotely at
            CopernicusMD.
          </P>
          <P className="mb-4 text-center lg:text-left">
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
          <Button className="mt-8 block mx-auto lg:ml-0" to="/about">
            More About Me
          </Button>
        </div>
        <div className="flex items-center order-1 lg:order-2">
          <Img
            className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mt-8 mb-8 mx-auto block"
            fixed={data.file.childImageSharp.fluid}
          />
        </div>
      </div>
    </Section>
  )
}

export default HomeHero
