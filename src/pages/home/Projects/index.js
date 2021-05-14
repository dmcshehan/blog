import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  SectionTitle,
  SectionSubTitle,
  ProjectCard,
  Button,
} from "~components"

export default function index() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              demo
              description
              github
              title
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 500) {
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
    <Section className="bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <SectionTitle>My Recent Personal Projects</SectionTitle>
          <SectionSubTitle className="font-light">
            Here are a few design projects I've worked on recently.
          </SectionSubTitle>
        </div>
        <div className="col-span-3 md:col-span-1 flex items-center justify-start md:justify-end">
          <Button className="block" to="/about">
            View More Projects
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {allMarkdownRemark.edges.map(({ node }) => (
          <ProjectCard key={node.id} {...node.frontmatter} />
        ))}
      </div>
    </Section>
  )
}
