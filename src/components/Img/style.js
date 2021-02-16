import styled from "styled-components"
import tw from "twin.macro"
import Img from "gatsby-image"

export default styled(Img)`
  border-radius: ${props => props.bRadius || 0};
`
