import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { Container } from "~components"

const StyledSection = styled.div`
  ${tw`py-24`}
`
const FillSection = styled(StyledSection)`
  ${tw`bg-fill`}
`

const Section = function ({ children, fill, ...props }) {
  return fill ? (
    <FillSection {...props}>
      <Container>{children}</Container>
    </FillSection>
  ) : (
    <StyledSection {...props}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
