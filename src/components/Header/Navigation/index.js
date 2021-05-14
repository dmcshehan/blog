import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const StyledNav = styled.nav`
  ${tw`flex flex-wrap justify-between items-center`}
`

import Logo from "./Logo/"
import Navlinks from "./NavLinks/"
import MobileNavigation from "./MobileNavigation"

const Navigation = function ({ props }) {
  return (
    <StyledNav {...props}>
      <Logo />
      <Navlinks className="hidden lg:flex" />
      <MobileNavigation />
    </StyledNav>
  )
}

export default Navigation
