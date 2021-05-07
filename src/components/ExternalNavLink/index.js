import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Link } from "gatsby"

const StyledNavLink = styled.li`
  ${tw`font-primary`}
`

const ExternalNavLink = function ({  children,...props }) {
  return (
    <StyledNavLink>
      <a {...props}>{children}</a>
    </StyledNavLink>
  )
}

export default ExternalNavLink
