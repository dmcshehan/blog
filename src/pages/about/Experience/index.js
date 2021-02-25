import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  SectionTitle,
  SectionSubTitle,
  ExperienceCard,
} from "~components"

const Wrapper = styled.div`
  ${tw`mt-16`}
`

const Experience = function () {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___num], order: ASC }
        filter: { frontmatter: { category: { eq: "experience" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              company
              website
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

export default Experience
