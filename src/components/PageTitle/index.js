import React from "react"
import PropTypes from "prop-types"
import PageTitle from "./style.js"

const pageTitle = function ({ children }) {
  return <PageTitle>{children}</PageTitle>
}

pageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default pageTitle
