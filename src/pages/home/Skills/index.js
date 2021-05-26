import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import {
  SectionTitle,
  SmallTitle,
  SectionSubTitle,
  Paragraph,
  Section,
  List,
} from "~components"

import developer from "~images/developer.svg"
import designer from "~images/designer.svg"

const Icon = styled.img`
  ${tw`h-16 w-16 block`}
`
const IconWrapper = styled.div`
  ${tw`mb-8`}
`
const BoxContainer = styled.div`
  ${tw`grid lg:grid-cols-2 gap-4 mt-8`}
`
const Box = styled.div`
  ${tw`border p-4`}
`
const ListContainer = styled.div`
  ${tw`grid gap-4`}
`

export default function Skills() {
  return (
    <Section>
      <SectionTitle>What I Do</SectionTitle>
      <BoxContainer>
        <Box>
          <IconWrapper>
            <Icon src={developer} alt="developer" />
          </IconWrapper>
          <SmallTitle>Frontend Developer</SmallTitle>
          <Paragraph>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </Paragraph>
          <SmallTitle>Languages I speak</SmallTitle>
          <Paragraph>HTML5, CSS3, SCSS, JavaScript, MongoDB</Paragraph>
          <SmallTitle>Dev Tools</SmallTitle>
          <ListContainer className="grid-cols-2 md:grid-cols-2">
            <div>
              <List list={["React, Redux", "jQuery", "Express", "Mongoose"]} />
            </div>
            <div>
              <List list={["Google Firebase", "Heroku / Netlify", "Bulma"]} />
            </div>
          </ListContainer>
        </Box>
        <Box>
          <IconWrapper>
            <Icon src={designer} alt="designer" />
          </IconWrapper>
          <SmallTitle>Designer (Intermediate)</SmallTitle>
          <Paragraph>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </Paragraph>
          <SmallTitle>Things I enjoy designing</SmallTitle>
          <Paragraph>Websites, Web Applications</Paragraph>
          <SmallTitle>Design Tools</SmallTitle>
          <ListContainer>
            <List list={["Pen & Paper", "Figma", "Photoshop", "Adobe XD"]} />
          </ListContainer>
        </Box>
      </BoxContainer>
    </Section>
  )
}
