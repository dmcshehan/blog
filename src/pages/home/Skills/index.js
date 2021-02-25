import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import {
  SectionTitle,
  SectionSubTitle,
  Paragraph,
  Section,
  List,
} from "~components"

import developer from "~images/developer.svg"
import designer from "~images/designer.svg"

const Icon = styled.img`
  ${tw`h-16 mx-auto block`}
`
const IconWrapper = styled.div`
  ${tw`w-16 mb-8`}
`
const Title = styled(SectionSubTitle)`
  ${tw`mt-4 mb-4 font-bold`}
`
const BoxContainer = styled.div`
  ${tw`grid grid-cols-2 gap-4 mt-8`}
`
const Box = styled.div`
  ${tw`border p-4`}
`

const ListContainer = styled.div`
  ${tw`grid grid-cols-3 gap-4 text-lg font-light`}
`

export default function Skills() {
  return (
    <Section>
      <SectionTitle>What I Do</SectionTitle>
      <SectionSubTitle className="font-light">
        The technologies that I use most often
      </SectionSubTitle>
      <BoxContainer>
        <Box>
          <IconWrapper>
            <Icon src={developer} alt="developer" />
          </IconWrapper>
          <Title>Frontend Developer</Title>
          <Paragraph>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </Paragraph>
          <Title>Languages I speak</Title>
          <Paragraph>HTML5, CSS3, SCSS, JavaScript, MongoDB</Paragraph>
          <Title>Dev Tools</Title>
          <ListContainer>
            <div>
              <List list={["React, Redux", "jQuery", "Express", "Mongoose"]} />
            </div>
            <div>
              <List
                list={["JWT", "Google Firebase", "Heroku / Netlify", "Bulma"]}
              />
            </div>
            <div>
              <List
                list={["Ant Design", "Gatsby", "Git / Github", "VS Code"]}
              />
            </div>
          </ListContainer>
        </Box>
        <Box>
          <IconWrapper>
            <Icon src={designer} alt="designer" />
          </IconWrapper>
          <Title>Designer (Intermediate)</Title>
          <Paragraph>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </Paragraph>
          <Title>Things I enjoy designing</Title>
          <Paragraph>Websites, Web Applications</Paragraph>
          <Title>Design Tools</Title>
          <ListContainer>
            <List list={["Pen & Paper", "Figma", "Photoshop", "Adobe XD"]} />
          </ListContainer>
        </Box>
      </BoxContainer>
    </Section>
  )
}
