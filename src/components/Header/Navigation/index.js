import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const StyledNav = styled.nav`
  ${tw`flex justify-between items-center`}
`

import Logo from "./Logo/"
import Navlinks from "./NavLinks/"

const Navigation = function ({ props }) {
  return (
    <StyledNav {...props}>
      <Logo />
      <Navlinks />
    </StyledNav>
  )
}

export default Navigation
