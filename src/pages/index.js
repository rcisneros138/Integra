import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'
import Dare from '../components/dare'
import About from '../components/about'
import Testimonials from '../components/testimonials'
import IntegraInfo from '../components/IntegraInfo'
import GridLayout from '../components/siteWrapper'

import { GroupedObservable } from 'rxjs'

const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location} links={data.site.siteMetadata.menuLinks.index}>
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
      }
    }
  }
`
