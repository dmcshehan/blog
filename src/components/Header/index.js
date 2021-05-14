import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { Container } from "~components"
import Navigation from "./Navigation"

const StyledHeader = styled.header`
  ${tw`w-full h-16 flex items-center`}
`

const Header = function () {
  return (
    <StyledHeader>
      <Container>
        <Navigation />
      </Container>
    </StyledHeader>
  )
}

export default Header
