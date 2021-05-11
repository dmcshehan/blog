import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"

import { SmallTitle, ExternalLink, Paragraph } from "~components"

const NameTitle = styled(SmallTitle)`
  ${tw`mt-8 font-bold`}
`

const ProjectCard = function ({
  thumbnail,
  testimonial,
  Name,
  position,
  company,
  website,
}) {
  return (
    <div className="px-2 text-center md:text-left">
      <Img
        className="w-20 rounded-full md:rounded mx-auto md:ml-0"
        fluid={thumbnail.childImageSharp.fluid}
      />
      <Paragraph className="mt-2">{testimonial}</Paragraph>
      <NameTitle>{Name}</NameTitle>
      <Paragraph className="mb-8">
        {position} ,{" "}
        <ExternalLink href={website} target="_blank">
          {company}
        </ExternalLink>
      </Paragraph>
    </div>
  )
}

export default ProjectCard
