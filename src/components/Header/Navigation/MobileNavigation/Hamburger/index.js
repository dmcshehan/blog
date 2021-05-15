import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Hamburger({ onMenuClick, isMenuOpen, ...props }) {
  return (
    <div {...props}>
      {isMenuOpen ? (
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            onMenuClick()
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => {
            onMenuClick()
          }}
        />
      )}
    </div>
  )
}
