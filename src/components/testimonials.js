import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Card from './card'

import TopQuotation from './svg/topQuotation'
import BottomQuotation from './svg/bottomQuotation'

const TestimonialSection = styled(Element)`
  display: grid;
  grid-gap: 0 2em;
  /* TODO: reduce grid values for mobile */
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(20, 5em);
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  height: auto;
  background-color: #f9f9f9;
  overflow: hidden;
  @media only screen and (min-width: 100px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1250px) {
    font-size: 26px;
  }
`
const Title = styled.div`
  text-align: center;
  grid-area: 1/2/3/13;
  h1 {
    color: #3a3a3a;
    letter-spacing: 0.05em;
    font-size: ${props => (props.isMobile ? '5vmin' : '7vmin')};
  }
`

const TopQuote = styled(TopQuotation)`
  grid-column: 2/4;
  grid-row: 3/5;
  z-index: 2;
`

const BottomQuote = styled(BottomQuotation)`
  grid-column: 11/13;
  grid-row: 17/19;
  z-index: 2;
`

const CardTitle = styled.h2`
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
  color: rgba(58, 58, 58, 0.57);
  grid-column: 5/9;
  font-size: 2em;
  margin: 1em 0 0 0;
`
const CardParagraph = styled.p`
  font-family: Roboto;
  color: rgba(58, 58, 58, 0.57);
  grid-column: 2/12;
  font-weight: 400;
  line-height: ${props => (props.isMobile ? '1.5em' : '2em')};
  font-size: 1em;
  /* font-size: ${props => (props.isMobile ? '1.5vw' : '1vw')}; */
  @media only screen and (min-aspect-ratio: 13/9) and (max-width: 1250px) {
          font-size: 1vw;
        }


`

const Testimonials = props => {
  return (
    <TestimonialSection name="Testimonials" isMobile={props.isMobile}>
      <Title isMobile={props.isMobile}>
        <h1>What People Are Saying</h1>
      </Title>

      {!props.isMobile && <TopQuote viewBox={'0 0 305 305'} />}
      <Card animate="up" area={props.isMobile ? '3/1/8/14' : '4/2/8/14'}>
        <CardTitle>Joe B.</CardTitle>
        <CardParagraph isMobile={props.isMobile}>
          I walked in the door at Integra with pain and no flexibility in both
          shoulders, and limited ability to golf. With Integra’s help, I had a
          full season playing golf pain free! I&#39;d highly recommend Integra
          to anyone who&#39;s tired of living in pain, has limited mobility, or
          anyone seeking better health and fitness. The best thing about Integra
          is the small private environment, personal attention, seamless and
          consistent transition from physical therapy to personal training, and
          the knowledge of the staff.
        </CardParagraph>
      </Card>
      <Card animate="up" area={props.isMobile ? '9/1/14/14' : '9/1/13/12'}>
        {' '}
        <CardTitle>Cathey R.</CardTitle>
        <CardParagraph isMobile={props.isMobile}>
          Without the help and support of Jeremiah Weber and Erik Bork I truly
          can tell you that my recovery would have been much slower and, quite
          possibly, less successful. Jeremiah and Erik worked tirelessly and
          patiently with me to reduce my pain and increase my range of motion
          and to keep me sane.  Their compassion, intellectual curiosity and
          professional competence set me on the road to recovery.  I am proud to
          say that I graduated from PT to personal training. It was, and
          continues to be, a life changer for me.
        </CardParagraph>
      </Card>
      <Card animate="up" area={props.isMobile ? '15/1/20/14' : '14/2/18/14'}>
        {' '}
        <CardTitle>Kelly H.</CardTitle>
        <CardParagraph isMobile={props.isMobile}>
          I wish I would have known about the benefits of working with a
          physical therapist after my first surgery because I suffered so many
          unnecessary setbacks that could have been prevented had I included
          physical therapy as part of my post surgery treatment. Working at
          Integra Physical Therapy and Personal Training after my last surgery
          dramatically reduced the pain I was experiencing and expedited my
          recovery.
        </CardParagraph>
      </Card>
      {!props.isMobile && <BottomQuote viewBox={'0 0 305 305'} />}
    </TestimonialSection>
  )
}
export default Testimonials
