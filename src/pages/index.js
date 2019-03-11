import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'
import Dare from '../components/dare'
import About from '../components/about'
import Testimonials from '../components/testimonials'
import IntegraInfo from '../components/IntegraInfo'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Programs />
        <Dare />
        <About />
        <Testimonials />
        <IntegraInfo />
      </Layout>
    )
  }
}

export default IndexPage
