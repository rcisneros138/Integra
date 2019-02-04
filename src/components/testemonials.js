import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import TextComponent from './textComponent/textComponent'
import AnimatedComponent from './textComponent/animate'

import TopQuotation from './svg/topQuotation'

const TestemonialSection = styled.div`
  grid-area: testemonials;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(15, 1fr);
  margin: 0 auto;
  width: 100%;
  height: 200vmin;
  background-color: #f9f9f9;
`
const Title = styled.div`
  text-align: center;
  grid-column: 2 / 13;
  margin: 7vmin;
  h1 {
    color: #3a3a3a;
    letter-spacing: 0.05em;
    font-size: 6vmin;
  }
`
const TopQuotationMark = styled(TopQuotation)`
  grid-column: 2/11;
  grid-row: 2/5;
  z-index: 2;
`
const AnimatedQuotation = styled(AnimatedComponent)`
  grid-column: 2/11;
  grid-row: 2/5;
  z-index: 2;
`

const TestemonialBox = styled.div`
  grid-column: 3/14;
  grid-row: 3/6;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px #bdbdbd;
`

const Testemonials = props => (
  <TestemonialSection>
    <Title>
      <h1>What People Are Saying</h1>
    </Title>
    <AnimatedQuotation>
      <TopQuotationMark />
    </AnimatedQuotation>
    <TestemonialBox>
      <p>Test</p>
    </TestemonialBox>
  </TestemonialSection>
)
export default Testemonials
