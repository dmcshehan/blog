import React from "react"
import { Layout, Seo } from "~components"

import Hero from "./Hero/"
import BlogPosts from "./BlogPosts/"

export default function () {
  return (
    <Layout>
      <Seo title="Blog" />
      <Hero />
      <BlogPosts />
    </Layout>
  )
}
