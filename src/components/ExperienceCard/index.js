import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Img from "gatsby-image"

import SectionSubTitle from "~components/SectionSubTitle"
import Paragrap from "~components/Paragraph"
import ExternalLink from "~components/ExternalLink"

const Position = styled(SectionSubTitle)`
  ${tw`font-bold`}
`

const Duration = styled.p`
  ${tw`font-light text-lg italic`}
`
const Description = styled(Paragrap)`
  ${tw`mt-2`}
`

const ExperienceCard = function ({
  position,
  description,
  company,
  website,
  start,
  end,
  logo,
}) {
  return (
    <div className="mb-8 border-b">
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-1">
          <Img
            className="w-full rounded border"
            fluid={logo.childImageSharp.fluid}
          ></Img>
        </div>
        <div className="col-span-8">
          <Position>
            {position} at{" "}
            <ExternalLink href={website} target="_blank">
              {company}
            </ExternalLink>
          </Position>
          <Duration>
            {start} - {end}
          </Duration>
          <Description>{description}</Description>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
