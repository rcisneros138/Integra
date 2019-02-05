import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import TextComponent from './textComponent/textComponent'
import AnimatedComponent from './textComponent/animate'

import TopQuotation from './svg/topQuotation'
import BottomQuotation from './svg/bottomQuotation'

const TestemonialSection = styled.div`
  grid-area: testemonials;
  display: grid;
  grid-gap: 0 2.25em;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(16, 1fr);
  margin: 0 auto;
  width: 100%;
  height: auto;
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
const BottomQuotationMarkWrapper = styled.div`
  grid-column: 11/13;
  grid-row: 13/15;
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
const boxStyleRight = {
  gridColumn: '2/14',
  gridRow: '3/6',
  backgroundColor: '#ffffff',
  boxShadow: '4px 4px 4px #bdbdbd',
  zIndex: '1',
}
const boxStyleLeft = {
  gridColumn: '1/12',
  gridRow: '7/10',
  backgroundColor: '#ffffff',
  boxShadow: '4px 4px 4px #bdbdbd',
  zIndex: '1',
}

const boxStyleRightLast = {
  gridColumn: '2/14',
  gridRow: '11/14',
  backgroundColor: '#ffffff',
  boxShadow: '4px 4px 4px #bdbdbd',
  zIndex: '1',
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

    <AnimatedComponent style={boxStyleRight} animationType="fade-left">
      <p>Test</p>
    </AnimatedComponent>
    <AnimatedComponent style={boxStyleLeft} animationType="fade-right" />
    <AnimatedComponent style={boxStyleRightLast} animationType="fade-left" />
    <BottomQuotationMarkWrapper>
      <AnimatedComponent animationType="fade-up">
        <BottomQuotation />
      </AnimatedComponent>
    </BottomQuotationMarkWrapper>
  </TestemonialSection>
)
export default Testemonials
