import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { useStaticQuery, graphql } from "gatsby"

import { Section, BlogCard } from "~components"

export default function index() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
              cover {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              date
              tags
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Section>
      <div className="grid grid-cols-3 gap-4">
        {allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard
            key={node.id}
            {...node.frontmatter}
            timeToRead={node.timeToRead}
            slug={node.fields.slug}
          />
        ))}
      </div>
    </Section>
  )
}
