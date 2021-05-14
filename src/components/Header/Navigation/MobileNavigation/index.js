import React, { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { NavLink, ExternalNavLink, Container } from "~components"
import Hamburger from "./Hamburger"

import links from "../links"

export const StyledNavLinks = styled.ul`
  ${tw`absolute z-20 bg-white w-full left-0 right-0 top-16 list-none flex-col space-x-4 shadow-md`}
`

const StyledNavLink = styled(props => <NavLink {...props} />)`
  ${tw`w-full block py-3 border-b`}
`

const NavLinks = function () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Hamburger
        className="text-2xl lg:hidden"
        isMenuOpen={isMenuOpen}
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <StyledNavLinks className={isMenuOpen ? "flex" : "hidden"}>
        <Container>
          {links.map((nav, index) => (
            <StyledNavLink key={index} to={nav.path}>
              {nav.title}
            </StyledNavLink>
          ))}
          <ExternalNavLink
            className="block py-3"
            href={`mailto:dmcshehan@outlook.com`}
          >
            Contact
          </ExternalNavLink>
        </Container>
      </StyledNavLinks>
    </>
  )
}

export default NavLinks
