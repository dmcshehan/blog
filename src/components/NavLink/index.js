import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Link } from "gatsby"

const StyledNavLink = styled.li`
  ${tw`font-primary`}
`

const NavLink = function ({ to, children, ...props }) {
  return (
    <StyledNavLink>
      <Link to={to} {...props}>
        {children}
      </Link>
    </StyledNavLink>
  )
}

export default NavLink
