import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from 'styled-components'

import Header from './header'
import GridLayout from './siteWrapper'
import './layout.css'

injectGlobal`
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

  componentDidMount() {
    if (window.innerWidth < 768) {
      this.setState({ isMobile: true })
    }
    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth < 768
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile })
      }
    })
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

              {children}
            </GridLayout>
          </>
        )}
      />
    )
  }
}

// const Layout = ({ children, data }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <GridLayout>
//           <Header siteTitle={data.site.siteMetadata.title} />

//           {children}
//         </GridLayout>
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
