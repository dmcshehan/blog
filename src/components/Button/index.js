import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const StyledButton = styled.button`
  ${tw`py-2 px-4 bg-primary max-w-max block text-white`}
`

const StyledLink = styled(Link)`
  ${tw`py-2 px-4 bg-primary max-w-max block text-white`}
`

const Section = function ({ children, ...props }) {
  return props.to ? (
    <StyledLink {...props}>{children}</StyledLink>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Section
