import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledDiv = styled.p`
  ${tw`my-2`}
`

export const TagWrapper = function ({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>
}

TagWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TagWrapper
