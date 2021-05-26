import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const StyledButton = styled.button`
  ${tw`py-2 px-4 text-black rounded transition border-2 rounded-none border-black duration-300 ease-in-out max-w-max`}
`

const StyledLink = styled(Link)`
  ${tw`py-2 px-4 text-black rounded transition border-2 rounded-none border-black duration-300 ease-in-out max-w-max`}
`
const StyledA = styled.a`
  ${tw`py-2 px-4 text-black inline-block rounded border-2 border-black rounded-none transition duration-300 ease-in-out max-w-max`}
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
