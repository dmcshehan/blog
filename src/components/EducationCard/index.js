import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Img from "gatsby-image"

import { SectionSubTitle, Paragraph, ExternalLink } from "~components"

const Program = styled(SectionSubTitle)`
  ${tw`font-bold`}
`

const Duration = styled.p`
  ${tw`font-light text-lg`}
`
const Description = styled(Paragraph)`
  ${tw`mt-2`}
`

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
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-9 md:col-span-1">
          <Img
            className="w-20 rounded border md:w-full"
            fluid={logo.childImageSharp.fluid}
          ></Img>
        </div>
        <div className="col-span-9 md:col-span-8">
          <Program>
            {program} at{" "}
            <ExternalLink href={website} target="_blank">
              {institute}
            </ExternalLink>
          </Program>
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
