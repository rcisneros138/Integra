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
  overflow-x: hidden;
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
const TopQuotationMarkWrapper = styled.div`
  grid-column: 2/4;
  grid-row: 2/5;
  z-index: 2;
`

const TestemonialBox = styled.div`
  background-color: #ffffff;
  box-shadow: 4px 4px 4px #bdbdbd;
  z-index: 1;
`
const animateQuotation = {
  gridColumn: '2/11',
  gridRow: '2/5',
  zIndex: '2',
}
const boxStyle = {
  gridColumn: '3/14',
  gridRow: '3/6',
  backgroundColor: '#ffffff',
  boxShadow: '4px 4px 4px #bdbdbd',
  zIndex: '1',
  overflowX: 'hidden',
}

const Testemonials = props => (
  <TestemonialSection>
    <Title>
      <h1>What People Are Saying</h1>
    </Title>
    <TopQuotationMarkWrapper>
      <AnimatedComponent animationType="fade-up">
        <TopQuotation />
      </AnimatedComponent>
    </TopQuotationMarkWrapper>

    <AnimatedComponent style={boxStyle} animationType="fade-left">
      <p>Test</p>
    </AnimatedComponent>
  </TestemonialSection>
)
export default Testemonials
