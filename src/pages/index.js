import React from 'react'
import Link from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'

const IndexPage = props => (
  <Layout>
    <Hero />
    <Programs />
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 3840, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    AnthonyImage: file(relativePath: { eq: "personaltraining.jpg" }) {
      ...fluidImage
    }
  }
`
