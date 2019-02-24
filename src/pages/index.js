import React from 'react'
import Link from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'
import Dare from '../components/dare'
import About from '../components/about'
import Testemonials from '../components/testemonials'
import IntegraInfo from '../components/IntegraInfo'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Programs />
        <Dare />
        <About />
        <Testemonials />
        {/* <IntegraInfo />  */}
      </Layout>
    )
  }
}

export default IndexPage
