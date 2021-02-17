import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"

import Paragraph from "~components/Paragraph"
import Tag from "~components/Tag"
import Button from "~components/Button"

const StyledDiv = styled.div`
  ${tw`border`}
`

const ProjectCard = function ({ cover, description, tags, demo, github }) {
  return (
    <StyledDiv>
      <Img className="w-full" fluid={cover.childImageSharp.fluid}></Img>
      <div className="p-4">
        <p className="mb-4">{description}</p>
        {tags.map((tag, index) => (
          <Tag key={index} className="mr-2 px-2">
            {tag}
          </Tag>
        ))}
        <div className="mt-4">
          <Button className="mr-4" href={demo}>
            Demo
          </Button>
          <Button href={github}>Github</Button>
        </div>
      </div>
    </StyledDiv>
  )
}

export default ProjectCard
