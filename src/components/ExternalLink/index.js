import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Link = styled.a`
  ${tw`text-primary font-semibold`}
`

const Section = function ({ children, secondary, ...props }) {
  return <Link {...props}>{children}</Link>
}

export default Section