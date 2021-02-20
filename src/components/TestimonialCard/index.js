import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"

import SectionSubTitle from "~components/SectionSubTitle"
import SmallTitle from "~components/SmallTitle"
import ExternalLink from "~components/ExternalLink"
import Paragraph from "~components/Paragraph"

import quote from "~images/quote.svg"

const ProjectCard = function ({
  thumbnail,
  testimonial,
  Name,
  position,
  company,
  website,
}) {
  return (
    <div>
      <Img
        className="w-24 rounded-full mx-auto border-4 border-primary"
        fluid={thumbnail.childImageSharp.fluid}
      />
      <Paragraph className="mt-2 text-center">{testimonial}</Paragraph>
      <img src={quote} alt="quote" className="w-8 mx-auto mt-4" />
      <SmallTitle className="text-center mt-8 font-bold">{Name}</SmallTitle>
      <Paragraph className="text-center mb-8">
        {position} ,{" "}
        <ExternalLink href={website} target="_blank">
          {company}
        </ExternalLink>
      </Paragraph>
    </div>
  )
}

export default ProjectCard
