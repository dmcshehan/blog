import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default [
  {
    platform: "Github",
    link: "https://github.com/dmcshehan",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    platform: "Twitter",
    link: "https://twitter.com/dmcshehan",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    platform: "Linkedin",
    link: "https://www.linkedin.com/in/dmcshehan/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
]
