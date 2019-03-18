import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Programs from '../components/programs'
import Dare from '../components/dare'
import About from '../components/about'
import Testimonials from '../components/testimonials'
import IntegraInfo from '../components/IntegraInfo'
import GridLayout from '../components/siteWrapper'

import { GroupedObservable } from 'rxjs'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <GridLayout isMobile={this.props.isMobile}>
          <Hero />
          <Programs />
          <Dare />
          <About />
          <Testimonials />
          <IntegraInfo />
        </GridLayout>
      </Layout>
    )
  }
}

export default IndexPage
