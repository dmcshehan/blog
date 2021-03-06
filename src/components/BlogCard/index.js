import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import tw from "twin.macro"
import Img from "gatsby-image"
import moment from "moment"

import { SmallTitle, ReadTime, Tags } from "~components"

const AgoDate = styled.p`
  ${tw`my-2 text-gray-400`}
`

const Wrapper = styled.div`
  ${tw`border relative`}
`

const SumDate = styled.p`
  ${tw`absolute top-2 right-2 text-white z-10 bg-primary p-2 rounded text-center w-14 h-14 text-sm`}
`

const ExperienceCard = function ({
  title,
  tags,
  date,
  cover,
  excerpt,
  timeToRead,
  path,
}) {
  return (
    <Link to={`/${path}`}>
      <Wrapper>
        <SumDate>
          {moment(date).format("D")}
          <br />
          {moment(date).format("MMM")}
        </SumDate>
        <Img
          className="w-full rounded border"
          fluid={cover.childImageSharp.fluid}
        ></Img>
        <div className="p-4">
          <SmallTitle>{title}</SmallTitle>
          <AgoDate> {moment(date).startOf("day").fromNow()}</AgoDate>
          <p>{excerpt}</p>
          <Tags data={tags} />
          <ReadTime>{timeToRead}</ReadTime>
        </div>
      </Wrapper>
    </Link>
  )
}

export default ExperienceCard
