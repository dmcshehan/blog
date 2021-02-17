import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const StyledLogo = styled.img`
  ${tw`w-12`}
`

import logo_color from "~images/logo_color.svg"

const Logo = function () {
  return <StyledLogo src={logo_color} alt="logo" />
}

export default Logo
