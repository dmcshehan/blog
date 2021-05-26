import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const StyledP = styled.p`
  ${tw`mb-1 text-gray-700`}
`

const Paragraph = function ({ children, ...props }) {
  return <StyledP {...props}>{children}</StyledP>
}

export default Paragraph
