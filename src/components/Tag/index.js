import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

export const Tag = function ({ children, ...props }) {
  const StyledSpan = styled.span`
    ${tw`border-gray-700 text-gray-700 rounded font-primary mr-1 px-1`}
  `

  return <StyledSpan {...props}>#{children}</StyledSpan>
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tag
