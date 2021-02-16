import React from "react"
import PropTypes from "prop-types"
import SubTitle from "./style.js"

const subTitle = function ({ children }) {
  return <SubTitle>{children}</SubTitle>
}

subTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default subTitle
