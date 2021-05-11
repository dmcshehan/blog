import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { Container } from "~components"

const StyledSection = styled.div`
  ${tw`py-16 lg:py-24 `}
`

const Section = function ({ children, ...props }) {
  return (
    <StyledSection {...props}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
