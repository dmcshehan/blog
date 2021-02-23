import React from "react"
import Img from "gatsby-image"

import styled from "styled-components"
import tw from "twin.macro"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import Tag from "~components/Tag"
import ExternalLink from "~components/ExternalLink"

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

        <div className="mt-4 pt-2 border-t text-xl">
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
