import React from "react"
import StyledP from "./style"

const Paragraph = function ({ children, ...props }) {
  return <StyledP {...props}>{children}</StyledP>
}

export default Paragraph
