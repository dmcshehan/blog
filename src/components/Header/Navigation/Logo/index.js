import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { Link } from "gatsby"

const StyledLogo = styled.img`
  ${tw`w-12`}
`

import logo_color from "~images/logo_color.svg"

const Logo = function () {
  return (
    <Link to="/">
      <StyledLogo src={logo_color} alt="logo" />
    </Link>
  )
}

export default Logo
