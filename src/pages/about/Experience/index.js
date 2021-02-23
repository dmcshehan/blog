import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Section from "~components/Section"
import SectionTitle from "~components/SectionTitle"
import SectionSubTitle from "~components/SectionSubTitle"
import Paragraph from "~components/Paragraph"
import ExperienceCard from "~components/ExperienceCard"

const Wrapper = styled.div`
  ${tw`mt-16`}
`

export default function Intro() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experience" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              company
              start
              end
              position
              description
              logo {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section className="bg-gray-50">
      <SectionTitle>Work Experience</SectionTitle>
      <SectionSubTitle>Companies That I have worked so far</SectionSubTitle>

      <Wrapper>
        {allMarkdownRemark.edges.map(({ node }) => (
          <ExperienceCard key={node.id} {...node.frontmatter} />
        ))}
      </Wrapper>
    </Section>
  )
}
