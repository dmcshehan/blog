import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              social {
                twitter
              }
            }
          }
        }
      `}
      render={({ site }) => (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={
            site.siteMetadata?.title ? `%s | ${site.siteMetadata?.title}` : null
          }
          meta={[
            {
              name: `description`,
              content: description || site.siteMetadata.description,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:description`,
              content: description || site.siteMetadata.description,
            },
            {
              property: `og:type`,
              content: `www.dmcshehan.com`,
            },
            {
              name: `twitter:card`,
              content: `Who lives in Colombo building useful things.`,
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata?.social?.twitter || ``,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: description || site.siteMetadata.description,
            },
          ].concat(meta)}
        />
      )}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
