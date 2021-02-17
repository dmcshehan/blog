import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const StyledH1 = styled.h1`
  ${tw`lg:text-5xl lg:mb-4 font-title font-bold`}
`

export const PageTitle = function ({ children, ...props }) {
  return <StyledH1 {...props}>{children}</StyledH1>
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitle
