import React from "react"
import { graphql } from "gatsby"

export default function index({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query {
    markdownRemark {
      html
      frontmatter {
        title
      }
    }
  }
`
