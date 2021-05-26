import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledH1 = styled.h1`
  ${tw`text-3xl lg:text-3xl font-secondary font-bold`}
`

export const SectionTitle = function ({ children, ...props }) {
  return <StyledH1 {...props}>{children}</StyledH1>
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionTitle
