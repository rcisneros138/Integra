import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, pathname, keyWords }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, url, keyWords },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${url}${pathname}`,
        keyWords: keyWords,
      }
      return (
        <Helmet title={seo.title}>
          <meta name="description" content={seo.description} />
          {seo.url && <meta name="og:url" content={seo.url} />}
          {seo.description && (
            <meta name="og:description" content={seo.description} />
          )}
          {seo.title && <meta name="og:title" content={seo.title} />}
        </Helmet>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathName: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        url
        keyWords
      }
    }
  }
`
