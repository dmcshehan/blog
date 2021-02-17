import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Section from "~components/Section"
import SectionTitle from "~components/SectionTitle"
import SectionSubTitle from "~components/SectionSubTitle"
import ProjectCard from "~components/ProjectCard"
import Button from "~components/Button"

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
      <SectionTitle className="text-center">
        My Recent Personal Projects
      </SectionTitle>
      <SectionSubTitle className="font-light text-center">
        Here are a few design projects I've worked on recently.
      </SectionSubTitle>
      <div className="grid grid-cols-2 gap-4 my-8">
        {allMarkdownRemark.edges.map(edge => (
          <ProjectCard key={edge.id} {...edge.node.frontmatter} />
        ))}
      </div>
      <Button className="mx-auto mt-8 block" to="/about">
        View More Projects
      </Button>
    </Section>
  )
}
