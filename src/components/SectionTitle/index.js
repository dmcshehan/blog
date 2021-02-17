import React from "react"
import PropTypes from "prop-types"
import SectionTitle from "./style.js"

export const sectionTitle = function ({ children }) {
  return <SectionTitle>{children}</SectionTitle>
}

sectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default sectionTitle
