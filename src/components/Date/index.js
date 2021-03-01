import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledP = styled.p`
  ${tw`my-2 text-gray-400`}
`

export const Date = function ({ children, ...props }) {
  return <StyledP {...props}>{children}</StyledP>
}

Date.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Date
