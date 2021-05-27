import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"
import tw from "twin.macro"

import { Tags, ExternalLink, SmallTitle, Paragraph } from "~components"

const StyledDiv = styled.div`
  ${tw`border`}
`

const ProjectCard = function ({
  cover,
  description,
  tags,
  demo,
  github,
  title,
}) {
  return (
    <StyledDiv>
      <Img className="w-full" fluid={cover.childImageSharp.fluid}></Img>
      <div className="py-2 px-2">
        <SmallTitle>{title}</SmallTitle>
        <Paragraph>{description}</Paragraph>
        <div>
          <Tags data={tags} />
        </div>
      </div>
      <div className="p-2 border-t">
        <ExternalLink href={demo} className="mr-4">
          Demo
        </ExternalLink>
        <ExternalLink href={github} secondary>
          Github
        </ExternalLink>
      </div>
    </StyledDiv>
  )
}

export default ProjectCard
