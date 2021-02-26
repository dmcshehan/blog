import React from "react"
import { Layout, PageTitle } from "~components"

import Hero from "./Hero/"
import BlogPosts from "./BlogPosts/"

export default function () {
  return (
    <Layout>
      <Hero />
      <BlogPosts />
    </Layout>
  )
}
