import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  SectionTitle,
  SectionSubTitle,
  EducationCard,
} from "~components"

const Wrapper = styled.div`
  ${tw`mt-16`}
`

const Education = function () {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___num], order: ASC }
        filter: { frontmatter: { category: { eq: "education" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              program
              institute
              website
              start
              end
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

  console.log(allMarkdownRemark)

  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <SectionSubTitle>
        The Degrees and certifications programs that I have done
      </SectionSubTitle>

      <Wrapper>
        {allMarkdownRemark.edges.map(({ node }) => (
          <EducationCard key={node.id} {...node.frontmatter} />
        ))}
      </Wrapper>
    </Section>
  )
}

export default Education
