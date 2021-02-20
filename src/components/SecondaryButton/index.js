import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const StyledButton = styled.button`
  ${tw`py-2 px-4 rounded font-body border border-secondary transition duration-300 ease-in-out max-w-max hover:bg-secondary hover:text-white`}
`

const StyledLink = styled(Link)`
  ${tw`py-2 px-4 rounded font-body border border-secondary transition duration-300 ease-in-out max-w-max hover:bg-secondary hover:text-white`}
`
const StyledA = styled.a`
  ${tw`py-2 px-4 inline-block rounded border border-secondary transition duration-300 ease-in-out max-w-max hover:bg-secondary hover:text-white`}
`

const Section = function ({ children, ...props }) {
  return props.to ? (
    <StyledLink {...props}>{children}</StyledLink>
  ) : props.href ? (
    <StyledA {...props}>{children}</StyledA>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Section
