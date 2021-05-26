import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Img from "gatsby-image"

import { SmallTitle, Paragraph, ExternalLink } from "~components"

const ExperienceCard = function ({
  program,
  institute,
  description,
  website,
  start,
  end,
  logo,
}) {
  return (
    <div className="mb-8 border-b">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-1">
          <Img
            className="w-20 rounded border md:w-10"
            fluid={logo.childImageSharp.fluid}
          ></Img>
        </div>
        <div className="col-span-12 md:col-span-11">
          <SmallTitle>
            {program} at{" "}
            <ExternalLink href={website} target="_blank">
              {institute}
            </ExternalLink>
          </SmallTitle>
          <Paragraph>
            {start} - {end}
          </Paragraph>
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
