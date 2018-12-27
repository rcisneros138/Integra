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
