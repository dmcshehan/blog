import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"
import tw from "twin.macro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { Tags, ExternalLink, SmallTitle } from "~components"

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
      <div className="p-4">
        <SmallTitle>{title}</SmallTitle>
        <p className="mb-4">{description}</p>
        <div>
          <Tags data={tags} />
        </div>

        <div className="mt-4 pt-2 border-t text-xl">
          <ExternalLink href={demo} className="mr-4">
            <FontAwesomeIcon icon={faLaptop} />
          </ExternalLink>
          <ExternalLink href={github} secondary>
            <FontAwesomeIcon icon={faGithub} />
          </ExternalLink>
        </div>
      </div>
    </StyledDiv>
  )
}

export default ProjectCard
