import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Section, ProjectCard } from "~components"

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
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {allMarkdownRemark.edges.map(({ node }) => (
          <ProjectCard key={node.id} {...node.frontmatter} />
        ))}
      </div>
    </Section>
  )
}
