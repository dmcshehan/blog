import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { Container } from "~components"

const StyledSection = styled.div`
  ${tw`lg:pt-24 lg:pb-24`}
`

const Section = function ({ children, ...props }) {
  return (
    <StyledSection {...props}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
