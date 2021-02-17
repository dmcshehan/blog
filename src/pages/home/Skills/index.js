import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Container from "~components/Container"
import SectionSubTitle from "~components/SectionSubTitle"
import SmallTitle from "~components/SmallTitle"
import Paragraph from "~components/Paragraph"

import developer from "~images/developer.svg"
import designer from "~images/designer.svg"

const Icon = styled.img`
  ${tw`h-16 mx-auto block`}
`
const IconWrapper = styled.div`
  ${tw`bg-primary w-max mx-auto p-4`}
`
const CrossOver = styled.div`
  ${tw`-mt-16`}
`

export default function Skills() {
  return (
    <CrossOver>
      <Container className="bg-white border">
        <div className="grid grid-cols-2 gap-4">
          <div className="border-r p-8">
            <IconWrapper>
              <Icon src={developer} alt="developer" />
            </IconWrapper>
            <SectionSubTitle className="mt-4 font-bold text-center">
              Frontend Developer
            </SectionSubTitle>
            <Paragraph className="text-center mt-4">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Paragraph>
            <SmallTitle className="text-center my-4">
              Languages I speak
            </SmallTitle>
            <Paragraph className="text-center">
              HTML5, CSS3, SCSS, JavaScript, MongoDB
            </Paragraph>
            <SmallTitle className="text-center my-4">Dev Tools</SmallTitle>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <ul>
                  <li>React, Redux </li>
                  <li>jQuery</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>JWT</li>
                  <li>Google Firebase</li>
                  <li>Heroku / Netlify</li>
                  <li>Bulma</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Ant Design</li>
                  <li>Gatsby</li>
                  <li>Git / Github</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-8">
            <IconWrapper>
              <Icon src={designer} alt="designer" />
            </IconWrapper>
            <SectionSubTitle className="mt-4 font-bold text-center">
              Designer (Intermediate)
            </SectionSubTitle>
            <Paragraph className="text-center mt-4">
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </Paragraph>
            <SmallTitle className="text-center my-4">
              Things I enjoy designing
            </SmallTitle>
            <Paragraph className="text-center">
              Websites, Web Applications
            </Paragraph>
            <SmallTitle className="text-center my-4">Design Tools</SmallTitle>
            <div className="text-center">
              <ul>
                <li>Pen & Paper</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Adobe XD</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </CrossOver>
  )
}
