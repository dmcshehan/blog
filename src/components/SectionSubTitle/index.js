import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledH4 = styled.h4`
  ${tw`text-2xl font-body text-center`}
`

const SectionSubTitle = function ({ children, ...props }) {
  return <StyledH4 {...props}>{children}</StyledH4>
}

SectionSubTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionSubTitle
