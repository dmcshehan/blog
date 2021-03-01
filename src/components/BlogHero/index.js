import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Wrapper = styled.div`
  ${tw`pt-60 pb-60 bg-no-repeat bg-cover bg-center`}
`

const BlogHero = function ({ ...props }) {
  return <Wrapper {...props} />
}

export default BlogHero
