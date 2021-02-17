import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Link } from "gatsby"

const StyledNavLink = styled.li`
  ${tw`font-body`}
`

const NavLink = function ({ to, children }) {
  return (
    <StyledNavLink>
      <Link to={to}>{children}</Link>
    </StyledNavLink>
  )
}

export default NavLink
