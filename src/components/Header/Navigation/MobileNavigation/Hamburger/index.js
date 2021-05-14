import React from "react"
import LineIcon from "react-lineicons"

export default function Hamburger({ onMenuClick, isMenuOpen, ...props }) {
  return (
    <div {...props}>
      {isMenuOpen ? (
        <LineIcon
          name="close"
          onClick={() => {
            onMenuClick()
          }}
        />
      ) : (
        <LineIcon
          name="menu"
          onClick={() => {
            onMenuClick()
          }}
        />
      )}
    </div>
  )
}
