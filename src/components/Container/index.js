import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

export const StyledDiv = styled.div`
  ${tw`lg:w-3/6 lg:max-w-4xl mx-auto`}
`

const Container = function ({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>
}

export default Container
