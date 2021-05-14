import React from "react"
import moment from "moment"
import styled from "styled-components"
import tw from "twin.macro"

import { Container, PageTitle, Date, ReadTime, Tags } from "~components"

const Wrapper = styled.div`
  ${tw`bg-no-repeat bg-cover bg-center`}
`

const MetaWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  ${tw`pt-40 pb-40 lg:pt-60 lg:pb-60`}
`

const BlogHero = function ({ className, ...props }) {
  console.log(props)

  const { title, date, tags } = props.markdownRemark.frontmatter
  const { timeToRead } = props.markdownRemark

  const CapDate = styled(Date)`
    ${tw`text-white`}
  `

  return (
    <Wrapper className={className ? className : ""} {...props}>
      <MetaWrapper>
        <Container>
          <PageTitle className="text-white">{title}</PageTitle>
          <CapDate className="text-white">
            {moment(date).format("D MMMM YYYY")}
          </CapDate>
          <Tags white data={tags} />
          <ReadTime className="text-white">{timeToRead}</ReadTime>
        </Container>
      </MetaWrapper>
    </Wrapper>
  )
}

export default BlogHero
