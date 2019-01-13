import React from 'react'
import Link from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'
import About from '../components/about'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Programs />
        <About />
      </Layout>
    )
  }
}

export default IndexPage
