import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledH4 = styled.h4`
  ${tw`text-lg leading-6 font-bold`}
`

export const SectionTitle = function ({ children, ...props }) {
  return <StyledH4 {...props}>{children}</StyledH4>
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionTitle
