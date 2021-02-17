import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"

import PageTitle from "~components/PageTitle"
import SectionSubTitle from "~components/SectionSubTitle"

import hero_desk from "~images/hero_desk.svg"

const StyledDiv = styled.div`
  height: 700px;
  background-size: 40%;
  background-image: ${props => {
    return props.background ? `url(${props.background})` : "none"
  }};

  ${tw`min-h-vh lg:p-40 flex flex-col items-center bg-bottom bg-no-repeat`};
`

const HomeHero = function index() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "shehan.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledDiv background={hero_desk}>
      <PageTitle className="text-center">
        Frontend Developer & Lifelong Learner
      </PageTitle>
      <SectionSubTitle className="font-light">
        I code simple yet beautiful things and love what I do
      </SectionSubTitle>
      <Img
        className="rounded-full mt-8"
        fixed={data.file.childImageSharp.fixed}
      />
    </StyledDiv>
  )
}

export default HomeHero
