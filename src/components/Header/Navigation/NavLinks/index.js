import React from "react"
import { NavLinks } from "./style.js"
import NavLink from "./NavLink"

export default function ({ children }) {
  return (
    <NavLinks>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavLinks>
  )
}
