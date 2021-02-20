import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Container from "~components/Container"
import SmallTitle from "~components/SmallTitle"
import Button from "~components/Button"
import SecondaryButton from "~components/SecondaryButton"
import ExternalLink from "~components/ExternalLink"

import social from "./social"
import logo_white from "~images/logo_white.svg"

const Footer = function () {
  return (
    <div className="bg-primary pb-8">
      <Container>
        <div className="relative h-28 -top-14 shadow-xl grid grid-cols-3 gap-4 bg-secondary rounded p-4">
          <div className="flex items-center">
            <SmallTitle className="text-white">
              I’m Looking For Full Time Work
            </SmallTitle>
          </div>
          <div>
            <p className="text-center text-white">
              My dream is to continue to build challenging projects. What
              solutions can I help you find?
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button>Download My Resume</Button>
          </div>
        </div>
        <img src={logo_white} alt="logo white" className="w-16 mx-auto -mt-4" />
        <div className="w-max mx-auto mt-8 space-x-2">
          {social.map(({ icon }) => (
            <SecondaryButton className="text-lg" href="#">
              <FontAwesomeIcon icon={icon} />
            </SecondaryButton>
          ))}
        </div>
        <p className="text-center mt-4">
          Handcrafted by me in Sri Lanka. All rights reserved &copy;{" "}
          {new Date().getFullYear()}. Powered with{" "}
          <ExternalLink
            secondary
            href="https://www.gatsbyjs.com/"
            target="_blank"
          >
            Gatsby
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink
            secondary
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind CSS
          </ExternalLink>
        </p>
      </Container>
    </div>
  )
}

export default Footer
