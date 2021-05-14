import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledP = styled.p`
  ${tw`my-2`}
`

export const ReadTime = function ({ children, ...props }) {
  return (
    <StyledP {...props}>
      {Number(children) === 1 ? `${children} min` : `${children} mins`} read
    </StyledP>
  )
}

ReadTime.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReadTime
