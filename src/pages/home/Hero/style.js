import styled from "styled-components"
import tw from "twin.macro"

export default styled.div`
  height: 700px;
  background-size: 40%;
  background-image: ${props => {
    return props.background ? `url(${props.background})` : "none"
  }};

  ${tw`min-h-vh lg:p-40 flex flex-col items-center bg-bottom bg-no-repeat`};
`
