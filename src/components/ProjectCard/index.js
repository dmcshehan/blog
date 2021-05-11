import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"
import tw from "twin.macro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { Tag, ExternalLink } from "~components"

const StyledDiv = styled.div`
  ${tw`border`}
`

const ProjectCard = function ({ cover, description, tags, demo, github }) {
  return (
    <StyledDiv>
      <Img className="w-full" fluid={cover.childImageSharp.fluid}></Img>
      <div className="p-4">
        <p className="mb-4 text-center md:text-left">{description}</p>
        <div className="flex justify-center md:justify-start">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-4 pt-2 border-t text-xl flex justify-center md:justify-start">
          <ExternalLink href={demo} className="mr-4">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
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
