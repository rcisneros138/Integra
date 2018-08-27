import React from 'react'
import Link from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'

const IndexPage = props => (
  <Layout>
    <Hero />
    {/* <Img sizes={props.data.file.childImageSharp.sizes} /> */}
    <Programs />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "PLEASEWORK.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1240) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
