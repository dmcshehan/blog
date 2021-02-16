import React from "react"
import { Link } from "gatsby"

import NavLink from "./style.js"

export default function ({ to, children }) {
  return (
    <NavLink>
      <Link to={to}>{children}</Link>
    </NavLink>
  )
}
