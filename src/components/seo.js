import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, titleTemplate }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          image
          title
          url
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate || `%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `og:image:secure_url`,
          content: site.siteMetadata.image,
        },
        {
          name: `og:url`,
          content: site.siteMetadata.url,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `twitter:image:alt`,
          content: `Pedro Cerna`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
