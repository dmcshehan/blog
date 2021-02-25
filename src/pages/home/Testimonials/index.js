import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

import {
  SectionTitle,
  SectionSubTitle,
  Section,
  TestimonialCard,
} from "~components"

const Testimonials = function () {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "testimonial" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              Name
              testimonial
              position
              company
              website
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(allMarkdownRemark)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerPadding: "50px",
    slidesToScroll: 1,
  }

  return (
    <Section>
      <SectionTitle>Testimonials</SectionTitle>
      <SectionSubTitle>
        People I've worked with have said some nice things
      </SectionSubTitle>
      <Slider {...settings} className="mt-16">
        {allMarkdownRemark.edges.map(({ node }) => (
          <TestimonialCard key={node.id} {...node.frontmatter} />
        ))}
      </Slider>
    </Section>
  )
}

export default Testimonials
