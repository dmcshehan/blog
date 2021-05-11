import React from "react"

import { Container, ExternalLink } from "~components"

import social from "./social"

const Footer = function () {
  return (
    <div className="pb-8 pt-8 border-t">
      <Container>
        <div className="grid grid-cols-3 gap-4 text-center md:text-left">
          <div className="col-span-3 lg:col-span-2">
            <p>
              <span className="block md:inline">
                dmcshehan.com &copy; {new Date().getFullYear()}.
              </span>{" "}
              Powered with{" "}
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
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="space-x-2 flex justify-center lg:justify-end">
              {social.map(({ platform, link }) => (
                <ExternalLink key={platform} href={link}>
                  {platform}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
