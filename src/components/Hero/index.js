import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Container from "~components/Container"

const StyledDiv = styled.div`
  ${tw`pt-16 pb-16 bg-gray-50`}
`

export default function Hero({ children }) {
  return (
    <StyledDiv>
      <Container>{children}</Container>
    </StyledDiv>
  )
}
