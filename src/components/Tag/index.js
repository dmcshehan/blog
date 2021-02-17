import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledSpan = styled.span`
  ${tw`border border-secondary rounded-sm font-body`}
`

export const Tag = function ({ children, ...props }) {
  return <StyledSpan {...props}>{children}</StyledSpan>
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tag
