import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { graphql } from "gatsby"

import { Layout, Container, BlogHero } from "~components"

const Body = styled.div`
  ${tw`pt-14 pb-14`}
`

export default function index({ data }) {
  const post = data.markdownRemark

  console.log(data)
  return (
    <Layout>
      <BlogHero
        {...data}
        style={{
          backgroundImage: `url(${post.frontmatter.cover.childImageSharp.fluid.src})`,
        }}
      />
      <Container>
        <Body>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Body>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        tags
        cover {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
