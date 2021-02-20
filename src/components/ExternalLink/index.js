import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const Primary = styled.a`
  ${tw`border-b-2 border-primary hover:border-secondary transition-all duration-300 ease-out`}
`
const Secondary = styled.a`
  ${tw`border-b-2 border-secondary transition-all duration-300 ease-out`}
`

const Section = function ({ children, secondary, ...props }) {
  return secondary ? (
    <Secondary {...props}>{children}</Secondary>
  ) : (
    <Primary {...props}>{children}</Primary>
  )
}

export default Section
