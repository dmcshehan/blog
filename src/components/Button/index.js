import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

const StyledButton = styled.button`
  ${tw`py-2 px-4 font-body bg-primary transition duration-300 ease-in-out max-w-max block hover:bg-secondary hover:text-white`}
`

const StyledLink = styled(Link)`
  ${tw`py-2 px-4 font-body bg-primary transition duration-300 ease-in-out max-w-max block hover:bg-secondary hover:text-white`}
`

const Section = function ({ children, ...props }) {
  return props.to ? (
    <StyledLink {...props}>{children}</StyledLink>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Section
