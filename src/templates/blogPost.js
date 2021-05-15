import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { graphql, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import { Layout, Container, BlogHero, SmallTitle } from "~components"

const Body = styled.div`
  ${tw`pt-14 pb-14`}
`

const DescTitle = styled.span`
  ${tw`text-sm`}
`

const NavContainer = styled.div`
  ${tw`flex items-center`}
`

export default function index({ data, pageContext }) {
  const post = data.markdownRemark

  const { next, previous } = pageContext

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
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            {previous !== null ? (
              <Link to={`/${previous.frontmatter.path}`} className="block">
                <NavContainer>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span className="ml-2">
                    <DescTitle>Previous Post</DescTitle>
                    <SmallTitle>{previous.frontmatter.title}</SmallTitle>
                  </span>
                </NavContainer>
              </Link>
            ) : null}
          </div>
          <div>
            {next !== null ? (
              <Link
                to={`/${next.frontmatter.path}`}
                className="text-right block"
              >
                <NavContainer className="justify-end">
                  <span className="mr-2">
                    <DescTitle>Next Post</DescTitle>
                    <SmallTitle>{next.frontmatter.title}</SmallTitle>
                  </span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </NavContainer>
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query blogPostQuery($pagePath: String) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      timeToRead
      frontmatter {
        title
        date
        tags
        path
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
