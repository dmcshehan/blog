import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { Container } from "~components"

const StyledDiv = styled.div`
  ${tw`pt-16 pb-16 bg-fill`}
`

export default function Hero({ children }) {
  return (
    <StyledDiv>
      <Container>{children}</Container>
    </StyledDiv>
  )
}
