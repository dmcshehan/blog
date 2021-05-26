import React from "react"

export default function index({ list, ...props }) {
  return (
    <ul {...props} className="list-disc list-inside">
      {list.map((item, index) => (
        <li className="text-gray-700" key={index}>
          {item}
        </li>
      ))}
    </ul>
  )
}
