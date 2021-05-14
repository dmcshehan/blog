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
              date
              tags
              path
              cover {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allMarkdownRemark.edges.map(({ node }) => {
          console.log(node)
          return (
            <BlogCard
              key={node.id}
              {...node.frontmatter}
              timeToRead={node.timeToRead}
            />
          )
        })}
      </div>
    </Section>
  )
}
