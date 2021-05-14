import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
// import tw from "twin.macro"

import { TagWrapper, Tag } from "~components"

export const Tags = function ({ data, white, ...props }) {
  return (
    <TagWrapper {...props}>
      {data.map((tag, index) => (
        <Tag
          className={white ? "border-white text-white" : "border-secondary"}
          key={index}
        >
          {tag}
        </Tag>
      ))}
    </TagWrapper>
  )
}

Tags.propTypes = {
  data: PropTypes.array,
}

export default Tags
