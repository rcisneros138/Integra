import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/Seo'
import Hero from '../components/hero'
import Programs from '../components/programs'
import Dare from '../components/dare'
import About from '../components/about'
import Testimonials from '../components/testimonials'
import IntegraInfo from '../components/IntegraInfo'
import Overlay from '../components/overlay'

const IndexPage = ({ location, data }) => {
  const { menuLinks, showEventOverlay } = data.site.siteMetadata
  const active = showEventOverlay.showOverlay == 'true'
  return (
    <Layout location={location} links={menuLinks.index}>
      <SEO
        title={`Integra Physical Therapy Massage Personal Training`}
        pathname={location.pathname}
      />
      <Overlay activeOverlay={active} />
      <Hero />
      <Programs />
      <Dare />
      <About />
      <Testimonials />
      <IntegraInfo />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageMenuItems {
    site {
      siteMetadata {
        menuLinks {
          index {
            name
            link
          }
        }
        showEventOverlay {
          showOverlay
        }
      }
    }
  }
`
