import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { graphql } from "gatsby"
import moment from "moment"

import { Layout, Container, PageTitle, BlogHero, Date } from "~components"

const Body = styled.div`
  ${tw`pt-14 pb-14`}
`

const CapDate = styled(Date)`
  ${tw`uppercase mb-8`}
`

export default function index({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <BlogHero
        style={{
          backgroundImage: `url(${post.frontmatter.cover.childImageSharp.fluid.src})`,
        }}
      />
      <Container>
        <Body>
          <PageTitle>{post.frontmatter.title}</PageTitle>
          <CapDate>
            {moment(post.frontmatter.date).format("D MMMM YYYY")}
          </CapDate>
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
      frontmatter {
        title
        date
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
