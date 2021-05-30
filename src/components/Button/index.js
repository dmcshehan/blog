import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const StyledButton = styled.button`
  ${tw`py-1 px-4 text-gray-700 rounded transition border rounded-none border-gray-700 duration-300 ease-in-out max-w-max hover:underline`}
`

const StyledLink = styled(Link)`
  ${tw`py-1 px-4 text-gray-700 rounded transition border rounded-none border-gray-700 duration-300 ease-in-out max-w-max hover:underline`}
`
const StyledA = styled.a`
  ${tw`py-1 px-4 text-gray-700 inline-block rounded border border-gray-700 rounded-none transition duration-300 ease-in-out max-w-max hover:underline`}
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
