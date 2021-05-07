import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

export const StyledNavLinks = styled.ul`
  ${tw`list-none flex space-x-4`}
`

import { NavLink, ExternalNavLink } from "~components"

const NavLinks = function () {
  return (
    <StyledNavLinks>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <ExternalNavLink href={`mailto:dmcshehan@outlook.com`}>
        Contact
      </ExternalNavLink>
    </StyledNavLinks>
  )
}

export default NavLinks
