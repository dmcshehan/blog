import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const P = styled.p`
  ${tw`text-xl font-light`};
`

const Paragraph = function ({ children, ...props }) {
  return <P {...props}>{children}</P>
}

export default P
