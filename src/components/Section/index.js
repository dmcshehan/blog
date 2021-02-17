import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Container from "~components/Container"

const StyledSection = styled.div`
  ${tw`lg:pt-32 lg:pb-32`}
`

const Section = function ({ children, ...props }) {
  return (
    <StyledSection {...props}>
      <Container>{children}</Container>
    </StyledSection>
  )
}

export default Section
