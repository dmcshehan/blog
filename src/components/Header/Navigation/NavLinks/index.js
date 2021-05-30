import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import links from "../links"

export const StyledNavLinks = styled.ul`
  ${tw`list-none space-x-4 font-secondary`}
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
      <ExternalNavLink
        className="font-bold font-secondary"
        href={`mailto:dmcshehan@outlook.com`}
      >
        Contact
      </ExternalNavLink>
    </StyledNavLinks>
  )
}

export default NavLinks
