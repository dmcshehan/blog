import React from "react"
import PropTypes from "prop-types"
import StyledH1 from "./style.js"

export const PageTitle = function ({ children }) {
  return <StyledH1>{children}</StyledH1>
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitle
