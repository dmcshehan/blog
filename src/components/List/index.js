import React from "react"

export default function index({ list, ...props }) {
  return (
    <ul {...props}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
