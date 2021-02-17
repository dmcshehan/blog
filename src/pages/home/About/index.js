import React from "react"
import SectionTitle from "~components/SectionTitle"
import Paragraph from "~components/Paragraph"
import Section from "~components/Section"
import Button from "~components/Button"

export default function () {
  return (
    <Section className="bg-gray-100">
      <SectionTitle className="text-center">
        Hi, I’m Shehan. Nice to meet you.
      </SectionTitle>
      <Paragraph className="text-center">
        Since the beginning of my journey as a freelance web developer nearly 5
        years ago, I've done remote work for agencies and collaborated with
        talented people to create digital products for both business and
        consumer use. I love programming and traveling.
      </Paragraph>
      <Button className="mx-auto mt-8 block" to="/about">
        More About Me
      </Button>
    </Section>
  )
}
