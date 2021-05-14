import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import links from "../links"

export const StyledNavLinks = styled.ul`
  ${tw`list-none space-x-4`}
`

import { NavLink, ExternalNavLink } from "~components"

const NavLinks = function (props) {
  return (
    <StyledNavLinks {...props}>
      {links.map((nav, index) => (
        <NavLink key={index} to={nav.path}>
          {nav.title}
        </NavLink>
      ))}
      <ExternalNavLink href={`mailto:dmcshehan@outlook.com`}>
        Contact
      </ExternalNavLink>
    </StyledNavLinks>
  )
}

export default NavLinks
