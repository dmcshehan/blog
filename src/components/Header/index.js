import React from "react"
import Header from "./style"
import Container from "~components/Container"
import Navigation from "./Navigation"

export default function index() {
  return (
    <Header>
      <Container>
        <Navigation></Navigation>
      </Container>
    </Header>
  )
}
