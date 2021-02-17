import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./styles.js"
import logo_color from "./logo_color.svg"

export default function () {
  return <Logo src={logo_color} />
}
