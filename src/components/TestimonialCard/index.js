import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"

import SmallTitle from "~components/SmallTitle"
import ExternalLink from "~components/ExternalLink"
import Paragraph from "~components/Paragraph"

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
    <div className="px-2">
      <Img className="w-20 rounded" fluid={thumbnail.childImageSharp.fluid} />
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
