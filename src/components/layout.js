import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'
import Img from 'gatsby-image'

import Header from './header'
import GridLayout from './siteWrapper'
import './layout.css'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Roboto:100,400,500,700,900');
html {
  font-family: 'Roboto', sans-serif;
  }
  body{
    margin:0;
  }
  a{
    text-decoration: none;
  }
`

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context)
    // this.handleScroll = this.handleScroll.bind(this)
    this.state = { isMobile: false }
  }

  componentWillMount() {
    const { children } = this.props
    this.childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, {
        isMobile: this.state.isMobile,
      })
    )
  }

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ isMobile: true })
    }
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const isMobile = window.innerWidth < 768
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
  }

  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <GridLayout>
              <Header
                siteTitle={data.site.siteMetadata.title}
                isMobile={this.state.isMobile}
              />

              {this.childrenWithProps}
            </GridLayout>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
